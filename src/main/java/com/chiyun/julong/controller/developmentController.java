package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.common.annotation.AccessRequired;
import com.chiyun.julong.entity.developmentEntity;
import com.chiyun.julong.repository.developmentRepository;
import com.chiyun.julong.utils.fileUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class developmentController {
    @Resource
    private developmentRepository developmentRepository;

    @ResponseBody
    @RequestMapping("/development/display")
    public ApiResult<Object> display( HttpSession httpSession){

        List<developmentEntity> list = developmentRepository.findAllasc();
        //httpSession.setAttribute("id", userEntity.getId());
        //ApiPageResult ApiPageResult = new
        return ApiResult.SUCCESS(list);

    }
    @ResponseBody
    @RequestMapping("/development/create")
    @AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(developmentEntity developmentEntity, MultipartFile fzlctpfile, HttpSession httpSession) throws Exception {


        if(developmentEntity.getFzlcbt()==null||developmentEntity.getFzlcbt()==""||developmentEntity.getFzlcnr()==null||developmentEntity.getFzlcnr()==""||developmentEntity.getFzlcsj()==null){
            return ApiResult.FAILURE("数据为空");
        }
        if (fzlctpfile.isEmpty()||fzlctpfile.getSize()==0){
            System.out.print("文件为空");
        }else {
            //判断文件上传大小
            if(fzlctpfile.getSize()>10485760){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //不为空，文件大小符合，则上传图片
            String filename=fileUtil.fileUpload(fzlctpfile,"news");
            //由返回的数据判断图片是否上传成功
            if(filename==null){
                return ApiResult.FAILURE("图片上传失败");
            }
            //将返回的文件名保存在数据库
            developmentEntity.setFzlctp(filename);
        }
        //存储操作
        developmentEntity entity = developmentRepository.save(developmentEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建发展历程失败");
        }

        return ApiResult.SUCCESS("新建发展历程成功");
    }

    @ResponseBody
    @RequestMapping("/development/update")
    @AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> update(developmentEntity developmentEntity, MultipartFile fzlctpfile, HttpSession httpSession) throws Exception {
      /*  String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        /*if (developmentEntity == null) {
            return ApiResult.FAILURE("参数错误");
        }*/
       ;
        if(developmentEntity.getFzlcbt()==null||developmentEntity.getFzlcbt()==""||developmentEntity.getFzlcnr()==null||developmentEntity.getFzlcnr()==""||developmentEntity.getFzlcsj()==null){
            return ApiResult.FAILURE("数据为空");
        }
        developmentEntity developmentEntity1 = developmentRepository.findById(developmentEntity.getId());
        if(developmentEntity1==null){
            return ApiResult.FAILURE("未找到该发展历程");
        }
        //判断上传文件是否为空
        if (fzlctpfile.isEmpty()||fzlctpfile.getSize()==0){
            developmentEntity.setFzlctp(developmentEntity1.getFzlctp());
            System.out.print("文件为空");
        }else {
            //判断文件上传大小
            if(fzlctpfile.getSize()>10485760){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //判断该数据库里面是否有照片
            if(developmentEntity1.getFzlctp()!=null&&developmentEntity1.getFzlctp()!=""){
                //如果有照片，删除原有照片
                int isdel=fileUtil.fileDel("news");
                //判断是否删除成功
                if(isdel!=1){
                    return ApiResult.FAILURE("图片删除失败");
                }
                //删除成功后将用户修改的照片上传
                String filename=fileUtil.fileUpload(fzlctpfile,"news");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                developmentEntity.setFzlctp(filename);
            }else{
                //如果没有，直接上传文件，保存文件名
                String filename=fileUtil.fileUpload(fzlctpfile,"news");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                developmentEntity.setFzlctp(filename);
            }
        }
        developmentEntity entity = developmentRepository.save(developmentEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }

    @ResponseBody
    @RequestMapping("/development/del")
    public ApiResult<Object> del(String id, HttpSession httpSession) throws Exception {

        if (id == "" || id==null) {
            return ApiResult.FAILURE("参数错误");
        }
        int isdel = developmentRepository.deleteOrderById(id);
        // System.out.print("-------------isdel:"+ isdel);
        if (isdel == 0) {
            return ApiResult.FAILURE("删除失败");
        }
        return ApiResult.SUCCESS("删除成功");
    }

}
