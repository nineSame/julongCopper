package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.RecruitmentEntity;
import com.chiyun.julong.repository.RecruitmentReposity;
import com.chiyun.julong.utils.fileUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;

/**
 * Created by Administrator on 2018/6/12.
 */
@RestController

@RequestMapping("/recruitment")
public class RecruitmentController {
    @Resource
    private RecruitmentReposity recruitmentReposity;

    /**
     * 增加
     */
    @ResponseBody
    @RequestMapping("/create")
    public ApiResult<Object> create(RecruitmentEntity recruitmentEntity, MultipartFile mFile, HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        RecruitmentEntity recruitmentEntity1 = recruitmentReposity.findById(recruitmentEntity.getId());
        if(recruitmentEntity1!=null){
            return ApiResult.FAILURE("已经存在");
        }
        //不存在则创建
        recruitmentEntity1.setZprs(recruitmentEntity.getZprs());
        recruitmentEntity1.setXzdy(recruitmentEntity.getXzdy());
        recruitmentEntity1.setGzjy(recruitmentEntity.getGzjy());
        recruitmentEntity1.setXlyq(recruitmentEntity.getXlyq());
        //上传附件
        //判断附件是否为空
        if(mFile.isEmpty()){
            return ApiResult.FAILURE("上传失败，附件为空");
        }else{
            //判断文件大小
            if(mFile.getSize()>10485760){
                return ApiResult.FAILURE("上传失败，附件太大");
            }
            String fileName = fileUtil.fileUpload(mFile,"recruitment");
            if(fileName==null){
                return ApiResult.FAILURE("附件上传失败");
            }
            //保存附件到数据库
            recruitmentEntity1.setZpfj(fileName);
        }
        //保存
        recruitmentReposity.save(recruitmentEntity1);
        //
        return ApiResult.SUCCESS("增加成功");
    }
    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/update")
    public ApiResult<Object> update(RecruitmentEntity recruitmentEntity,MultipartFile mFile,HttpSession session) throws Exception{
        //判断是否为管理员

        RecruitmentEntity recruitmentEntity1 = recruitmentReposity.findById(recruitmentEntity.getId());
        //判断是否存在
        if(recruitmentEntity1==null){
            return ApiResult.FAILURE("该记录不存在");
        }
        //存在则修改
        recruitmentEntity1.setZprs(recruitmentEntity.getZprs());
        recruitmentEntity1.setXzdy(recruitmentEntity.getXzdy());
        recruitmentEntity1.setGzjy(recruitmentEntity.getGzjy());
        recruitmentEntity1.setXlyq(recruitmentEntity.getXlyq());
        //上传附件
        //1 删除原附件
        int result = fileUtil.fileDel("recruitment");
        if(result!=1){
            return ApiResult.FAILURE("删除失败");
        }
        //2 上传新附件
        if(mFile.isEmpty()){
            return ApiResult.FAILURE("上传失败，附件为空");
        }else{
            //判断文件大小
            if(mFile.getSize()>10485760){
                return ApiResult.FAILURE("上传失败，附件太大");
            }
            String fileName = fileUtil.fileUpload(mFile,"recruitment");
            if(fileName==null){
                return ApiResult.FAILURE("上传失败");
            }
            //保存到数据库
            recruitmentEntity1.setZpfj(fileName);
        }
        //保存
        recruitmentReposity.save(recruitmentEntity1);
        //
        return ApiResult.SUCCESS("修改成功");
    }
    /**
     * 删除
     */
    @ResponseBody
    @RequestMapping("/delete")
    public ApiResult<Object> delete(String id,HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        RecruitmentEntity recruitmentEntity = recruitmentReposity.findById(id);
        if(recruitmentEntity==null){
            return ApiResult.FAILURE("该记录不存在");
        }
        //存在则删除
        recruitmentReposity.deleteById(id);
        //
        return ApiResult.SUCCESS("删除成功");
    }
}
