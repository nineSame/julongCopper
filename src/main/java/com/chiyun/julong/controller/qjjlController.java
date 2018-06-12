package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.qjjlEntity;
import com.chiyun.julong.repository.qjjlRepository;
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
import java.util.Date;

@Controller
public class qjjlController {


    @Resource
    private qjjlRepository qjjlRepository;

    @ResponseBody
    @RequestMapping("/qjjl/del")
    public ApiResult<Object> del(String id, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //通过id实行删除操作
        if (id == "" || id==null) {
            return ApiResult.FAILURE("参数错误");
        }
        int isdel = qjjlRepository.deleteOrderById(id);
        if (isdel == 0) {
            return ApiResult.FAILURE("删除失败");
        }
        return ApiResult.SUCCESS("删除成功");
    }

    @ResponseBody
    @RequestMapping("/qjjl/page")
    public ApiResult<Object> page(String bt,int page,int size, HttpSession httpSession){
//zh为关键字查询，信息模块的关键字暂定
        if(bt==null){
            bt="%%";
        }
        Page<qjjlEntity> list = qjjlRepository.findAllByBt(bt,PageRequest.of(page-1,size, Sort.by(new Sort.Order(Sort.Direction.DESC,"gxsj"))));


        //httpSession.setAttribute("id", userEntity.getId());
        //ApiPageResult ApiPageResult = new
        return ApiResult.SUCCESS(list);

    }

    @ResponseBody
    @RequestMapping("/qjjl/update")
    public ApiResult<Object> update(qjjlEntity qjjlEntity, MultipartFile sntfile, HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

        //通过id查询是否有该信息
        qjjlEntity qjjlEntity1 = qjjlRepository.findById(qjjlEntity.getId());
        if(qjjlEntity1==null){
            return ApiResult.FAILURE("未找到该信息");
        }
        //判断上传文件是否为空
        if (sntfile==null||sntfile.isEmpty()||sntfile.getSize()==0){
            qjjlEntity.setSnt(qjjlEntity1.getSnt());
            System.out.print("文件为空");
        }else {
            //判断文件上传大小
            if(sntfile.getSize()>10485760){
                return ApiResult.FAILURE("缩略图超出上传文件大小");
            }
            //判断该数据库里面是否有照片
            if(qjjlEntity1.getSnt()!=null&&qjjlEntity1.getSnt()!=""){
                //如果有照片，删除原有照片
                int isdel=fileUtil.fileDel(qjjlEntity1.getSnt(),"news");
                //判断是否删除成功
                if(isdel!=1){
                    return ApiResult.FAILURE("缩略图删除失败");
                }
                //删除成功后将用户修改的照片上传
                String filename=fileUtil.fileUpload(sntfile,"news");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("缩略图上传失败");
                }
                //将文件名保存在数据库
                qjjlEntity.setSnt(filename);
            }else{
                //如果没有，直接上传文件，保存文件名
                String filename=fileUtil.fileUpload(sntfile,"news");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("缩略图上传失败");
                }
                //将文件名保存在数据库
                qjjlEntity.setSnt(filename);
            }
        }
        //保存更新时间
        qjjlEntity.setCjsj(qjjlEntity1.getCjsj());
        qjjlEntity.setGxsj(new Date());
        //保存操作
        qjjlEntity entity = qjjlRepository.save(qjjlEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }


    @ResponseBody
    @RequestMapping("/qjjl/create")
    //@AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(qjjlEntity qjjlEntity, MultipartFile sntfile, HttpSession httpSession) throws Exception {
        //判断是否为管理员
        //判断文件是否为空
        if (sntfile==null||sntfile.isEmpty()||sntfile.getSize()==0){
            System.out.print("文件为空");
        }else {
            //判断文件上传大小
            if(sntfile.getSize()>10485760){
                return ApiResult.FAILURE("缩略图超出上传文件大小");
            }
            //不为空，文件大小符合，则上传缩略图
            String filename=fileUtil.fileUpload(sntfile,"news");
            //由返回的数据判断缩略图是否上传成功
            if(filename==null){
                return ApiResult.FAILURE("缩略图上传失败");
            }
            //将返回的文件名保存在数据库
            qjjlEntity.setSnt(filename);
        }
        //存创建时间和更新时间
        qjjlEntity.setCjsj(new Date());
        qjjlEntity.setGxsj(new Date());
        qjjlEntity entity = qjjlRepository.save(qjjlEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建信息失败");
        }

        return ApiResult.SUCCESS("新建信息成功");
    }

}
