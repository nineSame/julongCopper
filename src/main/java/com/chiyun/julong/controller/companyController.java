package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiPageResult;
import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.companyEntity;
import com.chiyun.julong.repository.companyRepository;
import com.chiyun.julong.utils.fileUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

public class companyController {
    @Resource
    private companyRepository companyRepository;


    @ResponseBody
    @RequestMapping("/company/display")
    public ApiResult<Object> dislpay(HttpSession httpSession) throws Exception {

        List<companyEntity> list = companyRepository.findAll();
        if (list == null) {
            return ApiResult.FAILURE("数据库错误");
        }
        //httpSession.setAttribute("id", userEntity.getId());
        //ApiPageResult ApiPageResult = new
        return ApiPageResult.SUCCESS(list);

    }

    @ResponseBody
    @RequestMapping("/company/update")
    public ApiResult<Object> update(companyEntity companyEntity, MultipartFile gstbfile, HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

        //判断传进的信息是否为空
        String name=companyEntity.getGsmz();
        String address=companyEntity.getGsdz();
        String num=companyEntity.getGsyb();
        String phone=companyEntity.getGsdh();
        String man=companyEntity.getGslxr();
        if(name==null||name==""||address==null||address==""||num==null||num==""||phone==null||phone==""||man==null||man==""){
            return ApiResult.FAILURE("传入数据有空数据");
        }
        //通过id查询是否有该信息
        companyEntity companyEntity1 = companyRepository.findById(companyEntity.getId());
        if(companyEntity1==null){
            return ApiResult.FAILURE("未找到该信息");
        }

        if (gstbfile==null||gstbfile.getSize()==0){
            System.out.print("图标为空");
        }else {
        //判断文件上传大小
        if(gstbfile.getSize()>20971520){
            return ApiResult.FAILURE("图片超出图标文件大小");
        }
        //判断数据库里面是否有图标地址
        if(companyEntity1.getGstb()!=null&&companyEntity1.getGstb()!=""){
            //如果有图标，删除原有图标
            int isdel=fileUtil.fileDel(companyEntity1.getGstb(),"company");
            //判断是否删除成功
            if(isdel!=1){
                return ApiResult.FAILURE("图标删除失败");
            }
            //删除成功后将用户修改的图标上传
            String filename=fileUtil.fileUpload(gstbfile,"company");
            //判断上传方法返回回来的数据
            if(filename==null){
                return ApiResult.FAILURE("图标上传失败");
            }
            //将文件名保存在数据库
            companyEntity.setGstb(filename);
        }else{
            //如果没有，直接上传图标，保存图标名
            String filename=fileUtil.fileUpload(gstbfile,"company");
            //判断上传方法返回回来的数据
            if(filename==null){
                return ApiResult.FAILURE("图标上传失败");
            }
            //将文件名保存在数据库
            companyEntity.setGstb(filename);
        }
        }
        //保存操作
        companyEntity entity = companyRepository.save(companyEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }
}
