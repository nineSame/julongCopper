package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.common.annotation.AccessRequired;
import com.chiyun.julong.entity.UserEntity;
import com.chiyun.julong.repository.UserRepository;
import com.chiyun.julong.utils.Md5Util;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

//@RestController
@Controller
//@RequestMapping("/User")
public class UserController {

    @Resource
    private UserRepository userRepository;
    @RequestMapping("/test")
    public String test() {
        return "test";
    }

    @RequestMapping("/index")
    public String index() {
        return "redirect:admin/html/login.html";
    }

    @ResponseBody
    @RequestMapping("/login")
    public ApiResult<Object> login(String username, String password, HttpSession httpSession) throws Exception {
        if (username == null|| username.isEmpty() || password == null|| username.isEmpty()) {
            return ApiResult.FAILURE("用户名或密码不能为空");
        }
        System.out.print("password:" + password);
        String pwd = Md5Util.getMD5(password);
        System.out.print("password:" + pwd);
        UserEntity userEntity = userRepository.findByAccountAndPassword(username, pwd);
        if (userEntity == null) {
            return ApiResult.FAILURE("用户名或密码错误");
        }
        httpSession.setAttribute("id", userEntity.getId());
        return ApiResult.SUCCESS("登录成功");
    }

    @RequestMapping("/create")
    @AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(String username, String password, HttpSession httpSession) throws Exception {
        String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }
        String pwd = Md5Util.getMD5(password);
        UserEntity userEntity = new UserEntity(pwd, username);
        UserEntity entity = userRepository.save(userEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建成员失败");
        }
        return ApiResult.SUCCESS("新建成员成功");
    }

    @RequestMapping("/update")
    @AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> update(UserEntity userEntity, HttpSession httpSession) throws Exception {
        String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }
        if (userEntity == null) {
            return ApiResult.FAILURE("参数错误");
        }
        UserEntity userEntity1 = userRepository.findById(userEntity.getId());
        if (!userEntity1.getName().equals(userEntity.getName())) {
            userEntity1.setName(userEntity.getName());
        }
        UserEntity entity = userRepository.save(userEntity1);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }

    @RequestMapping("/valid")
    @AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> valid(String id, int valid, HttpSession httpSession) {
        String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }
        UserEntity userEntity = userRepository.findById(id);
        if (userEntity == null) {
            return ApiResult.FAILURE("不存在的用户");
        }
        userEntity.setValid(valid);
        userRepository.save(userEntity);
        return ApiResult.SUCCESS();
    }

    @RequestMapping("/setrole")
    @AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> setrole(String id, String role, HttpSession httpSession) {
        String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }
        if (id == null || role == null) {
            return ApiResult.FAILURE("参数错误");
        }
        UserEntity userEntity = userRepository.findById(id);
        if (userEntity == null) {
            return ApiResult.FAILURE("不存在的用户");
        }
        userEntity.setRole(role);
        userRepository.save(userEntity);
        return ApiResult.SUCCESS();
    }

    @RequestMapping("/resetPassword")
    public ApiResult<Object> changepassword(String oldpwd, String newpwd, HttpSession httpSession) throws Exception {
        String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }
        if (oldpwd == null || newpwd == null) {
            return ApiResult.FAILURE("参数错误");
        }
        UserEntity userEntity = userRepository.findById(personid);
        if (userEntity == null) {
            return ApiResult.FAILURE("不存在的用户");
        }
        if (!Md5Util.getMD5(oldpwd).equals(userEntity.getPassword())) {
            return ApiResult.FAILURE("原密码错误");
        }
        userEntity.setPassword(Md5Util.getMD5(newpwd));
        userRepository.save(userEntity);
        return ApiResult.SUCCESS("密码修改成功");
    }
}
