package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.TenderEntity;
import com.chiyun.julong.repository.TenderReposity;
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
@RequestMapping("/tender")
public class TenderController {
    @Resource
    private TenderReposity tenderReposity;

    /**
     * 增加
     */
    @ResponseBody
    @RequestMapping("/create")
    public ApiResult<Object> create(TenderEntity tenderEntity, HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        TenderEntity tenderEntity1 = tenderReposity.findById(tenderEntity.getId());
        if(tenderEntity1!=null){
            return ApiResult.FAILURE("已经存在");
        }
        //不存在，创建
        tenderEntity1.setGyslxr(tenderEntity.getGyslxr());
        tenderEntity1.setGyslxdh(tenderEntity.getGyslxdh());
        tenderEntity1.setGysly(tenderEntity.getGysly());
        tenderEntity1.setCjsj(new Date());
        //保存
        tenderReposity.save(tenderEntity1);
        //
        return ApiResult.SUCCESS("创建成功");
    }
    /**
     * 删除
     */
    @ResponseBody
    @RequestMapping("/delete")
    public ApiResult<Object> delete(String id,HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        TenderEntity tenderEntity = tenderReposity.findById(id);
        if(tenderEntity==null){
            return ApiResult.FAILURE("该记录不存在");
        }
        //存在则删除
        tenderReposity.deleteById(id);
        //
        return ApiResult.SUCCESS("删除成功");
    }
    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/update")
    public ApiResult<Object> update(TenderEntity tenderEntity,HttpSession session) throws Exception{
        //判断是否为管理员

        //判断是否存在
        TenderEntity tenderEntity1 = tenderReposity.findById(tenderEntity.getId());
        if(tenderEntity1==null){
            return ApiResult.FAILURE("该记录不存在");
        }
        //存在则修改
        tenderEntity1.setGyslxr(tenderEntity.getGyslxr());
        tenderEntity1.setGyslxdh(tenderEntity.getGyslxdh());
        tenderEntity1.setGysly(tenderEntity.getGysly());
        tenderEntity1.setXgsj(new Date());
        //保存
        tenderReposity.save(tenderEntity1);
        //
        return ApiResult.SUCCESS("修改成功");
    }
}
