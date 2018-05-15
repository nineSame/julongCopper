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
import java.util.Date;
import java.util.List;

@Controller
public class photoController {

    private List<photoEntity> ListPhoto;

    @Resource
    private photoRepository photoRepository;


    @ResponseBody
    @RequestMapping("/banner/display")
    public ApiResult<Object> lb(HttpSession httpSession) throws Exception {
        ListPhoto = (List<photoEntity>) photoRepository.findAll();

        if (ListPhoto == null) {
            return ApiResult.FAILURE("数据库错误");
        }
        return ApiResult.SUCCESS(ListPhoto);
    }


    @ResponseBody
    @RequestMapping("/banner/del")
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
    @RequestMapping("/banner/update")
    public ApiResult<Object> update(photoEntity photoEntity,HttpServletRequest tplj, HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

        //由于图片标题和描述不一定需要，所以不需要判断传进来的两个参数是否为空，但是在下面必须判断图片路径是否为空
        //查询是否有该图片
        photoEntity photoEntity1 = photoRepository.findById(photoEntity.getId());
        if(photoEntity1==null){
            return ApiResult.FAILURE("未找到该图片");
        }
       /*
        photoEntity photoEntity1 = photoRepository.findById(photoEntity.getId());
        if (!photoEntity1.getTitle().equals(photoEntity.getTitle())) {
            photoEntity1.setTitle(photoEntity.getTitle());
        }*/
        //处理传过来的图片路径
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) tplj;
        MultipartFile file = multipartRequest.getFile("tpfile");
        String zpfile ="";
        if (file!=null){
            zpfile = file.getOriginalFilename();
        }else{
            return ApiResult.FAILURE("图片路径为空");
        }
        photoEntity.setTplj(zpfile);
        //保存更新时间
        photoEntity.setGxsj(new Date());
        //执行保存操作
        photoEntity entity = photoRepository.save(photoEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }


    @ResponseBody
    @RequestMapping("/banner/create")
    //@AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(photoEntity photoEntity, HttpServletRequest tp, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //由于图片标题和描述不一定需要，所以不需要判断传进来的两个参数是否为空，但是在下面必须判断图片路径是否为空
        //处理图片路径
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) tp;
        MultipartFile file = multipartRequest.getFile("tpfile");
        String zpfile ="";
        if (file!=null){
            zpfile = file.getOriginalFilename();
        }else{
            return ApiResult.FAILURE("图片路径为空");
        }
        photoEntity.setTplj(zpfile);
        photoEntity.setGxsj(new Date());
        photoEntity entity = photoRepository.save(photoEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建图片失败");
        }

        return ApiResult.SUCCESS("新建图片成功");
    }

}


