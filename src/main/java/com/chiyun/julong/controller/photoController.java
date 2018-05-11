package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.photoEntity;
import com.chiyun.julong.repository.photoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class photoController {

    private List<photoEntity> ListPhoto;

    @Resource
    private photoRepository photoRepository;


    @ResponseBody
    @RequestMapping("/photo/display")
    public ApiResult<Object> lb(String place, HttpSession httpSession) throws Exception {
        ListPhoto = photoRepository.findByPlace(place);

        if (ListPhoto == null) {
            return ApiResult.FAILURE("数据库错误");
        }
        return ApiResult.SUCCESS(ListPhoto);
    }


    @ResponseBody
    @RequestMapping("/photo/del")
    public ApiResult<Object> del(String id,HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //通过id实行删除操作
        if (id == "" || id==null) {
            return ApiResult.FAILURE("参数错误");
        }
        System.out.print("----------id:" + id);
        int isdel = photoRepository.deleteOrderById(id);
        System.out.print("----------isdel:" + isdel);
        if (isdel == 0) {
            return ApiResult.FAILURE("删除失败");
        }
        return ApiResult.SUCCESS("删除成功");
    }


    @ResponseBody
    @RequestMapping("/photo/updata")
    public ApiResult<Object> updata(photoEntity photoEntity,HttpSession httpSession) throws Exception {
        //判断是否登录
        String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }
        //判断是否为管理员

        //判断传进的参数是否为空
        if (photoEntity == null) {
            return ApiResult.FAILURE("参数错误");
        }
        //查询是否有该图片
        photoEntity photoEntity1 = photoRepository.findById(photoEntity.getId());
        if (!photoEntity1.getTitle().equals(photoEntity.getTitle())) {
            photoEntity1.setTitle(photoEntity.getTitle());
        }
        //执行删除操作
        photoEntity entity = photoRepository.save(photoEntity1);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }


    @ResponseBody
    @RequestMapping("/photo/create")
    //@AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(String title, HttpServletRequest httpServletRequest, String description, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //判断数据中的必填项是否为空
        /*if(name.isEmpty()){
            return ApiResult.FAILURE("姓名为空");
        }*/
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) httpServletRequest;
        MultipartFile file = multipartRequest.getFile("photofile");
        String photofile = file.getOriginalFilename();
        photoEntity photoEntity = new photoEntity(title, photofile,description);
        photoEntity entity = photoRepository.save(photoEntity);
        System.out.print("----------entity:" + entity + "photoEntity"+ photoEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建图片失败");
        }

        return ApiResult.SUCCESS("新建图片成功");
    }

}


