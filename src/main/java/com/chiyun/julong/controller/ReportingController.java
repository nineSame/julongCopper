package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.ReportingEntity;
import com.chiyun.julong.repository.ReportingReposity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;

/**
 * Created by Administrator on 2018/6/12.
 */
@RestController
@RequestMapping("/reporting")
public class ReportingController {
    @Resource
    private ReportingReposity reportingReposity;

    /**
     * 增加
     */
    @ResponseBody
    @RequestMapping("/create")
    public ApiResult<Object> create(ReportingEntity reportingEntity, HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        ReportingEntity reportingEntity1 = reportingReposity.findById(reportingEntity.getId());
        if(reportingEntity1!=null){
            return ApiResult.FAILURE("已经存在");
        }
        //不存在则创建
        reportingEntity1.setJbr(reportingEntity.getJbr());
        reportingEntity1.setJbrdh(reportingEntity.getJbrdh());
        reportingEntity1.setJbryx(reportingEntity.getJbryx());
        reportingEntity1.setJbsm(reportingEntity.getJbsm());
        reportingEntity1.setCjsj(new Date());
        //保存
        reportingReposity.save(reportingEntity1);
        //
        return ApiResult.SUCCESS("增加成功");
    }
    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/update")
    public ApiResult<Object> update(ReportingEntity reportingEntity,HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        ReportingEntity reportingEntity1 = reportingReposity.findById(reportingEntity.getId());
        if(reportingEntity1==null){
            return ApiResult.FAILURE("该记录不存在");
        }
        //存在则修改
        reportingEntity1.setJbr(reportingEntity.getJbr());
        reportingEntity1.setJbrdh(reportingEntity.getJbrdh());
        reportingEntity1.setJbryx(reportingEntity.getJbryx());
        reportingEntity1.setJbsm(reportingEntity.getJbsm());
        reportingEntity1.setXgsj(new Date());
        //保存
        reportingReposity.save(reportingEntity1);
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
        ReportingEntity reportingEntity = reportingReposity.findById(id);
        if(reportingEntity==null){
            return ApiResult.FAILURE("该记录不存在");
        }
        //存在则删除
        reportingReposity.deleteById(id);
        //
        return ApiResult.SUCCESS("删除成功");
    }
}
