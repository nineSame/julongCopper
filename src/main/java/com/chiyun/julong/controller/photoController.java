package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.photoEntity;
import com.chiyun.julong.repository.photoRepository;
import com.chiyun.julong.utils.fileUtil;
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
    public ApiResult<Object> update(photoEntity photoEntity,MultipartFile tpfile, HttpSession httpSession) throws Exception {
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
        //判断上传文件是否为空
        if (tpfile==null||tpfile.getSize()==0){
            System.out.print("文件为空");
        }else {
            //判断文件上传大小
            if(tpfile.getSize()>10485760){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //判断该用户数据库里面是否有照片
            if(photoEntity1.getTplj()!=null&&photoEntity1.getTplj()!=""){
                //如果有照片，删除原有照片
                int isdel=fileUtil.fileDel(photoEntity1.getTplj(),"banner");
                //判断是否删除成功
                if(isdel!=1){
                    return ApiResult.FAILURE("图片删除失败");
                }
                //删除成功后将用户修改的照片上传
                String filename=fileUtil.fileUpload(tpfile,"banner");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                photoEntity.setTplj(filename);
            }else{
                //如果没有，直接上传文件，保存文件名
                String filename=fileUtil.fileUpload(tpfile,"banner");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                photoEntity.setTplj(filename);
            }
        }
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
    public ApiResult<Object> create(photoEntity photoEntity, MultipartFile tpfile, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //由于图片标题和描述不一定需要，所以不需要判断传进来的两个参数是否为空，但是在下面必须判断图片路径是否为空

        //判断文件是否为空
        if (tpfile==null||tpfile.getSize()==0){
            System.out.print("文件为空");
        }else {
            //判断文件上传大小
            if(tpfile.getSize()>10485760){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //不为空，文件大小符合，则上传图片
            String filename=fileUtil.fileUpload(tpfile,"banner");
            //由返回的数据判断图片是否上传成功
            if(filename==null){
                return ApiResult.FAILURE("图片上传失败");
            }
            //将返回的文件名保存在数据库
            photoEntity.setTplj(filename);
        }
        //保存更新时间
        photoEntity.setGxsj(new Date());
        photoEntity entity = photoRepository.save(photoEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建图片失败");
        }

        return ApiResult.SUCCESS("新建图片成功");
    }

}


