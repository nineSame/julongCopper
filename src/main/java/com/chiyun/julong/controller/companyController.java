package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiPageResult;
import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.companyEntity;
import com.chiyun.julong.repository.companyRepository;
import com.chiyun.julong.utils.fileUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;


@Controller
public class companyController {
    @Resource
    private companyRepository companyRepository;


    @ResponseBody
    @RequestMapping("/company/display")
    public ApiResult<Object> dislpay(HttpSession httpSession) throws Exception {

        List<companyEntity> list = companyRepository.findAll();

        //httpSession.setAttribute("id", userEntity.getId());
        //ApiPageResult ApiPageResult = new
        return ApiPageResult.SUCCESS(list);

    }

    @ResponseBody
    @RequestMapping("/company/update")
    public ApiResult<Object> update(companyEntity companyEntity, MultipartFile gstbfile, MultipartFile gsjstpfile,HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

//        //判断传进的信息是否为空
//        String name=companyEntity.getGsmz();
//        String address=companyEntity.getGsdz();
//        String num=companyEntity.getGsyb();
//        String phone=companyEntity.getGsdh();
//        String man=companyEntity.getGslxr();
//        System.out.print("-----"+name+"-----"+companyEntity.getJjbt());
//        if(name==null||name==""||address==null||address==""||num==null||num==""||phone==null||phone==""||man==null||man==""
//                ||companyEntity.getJjbt()==null||companyEntity.getJjbt()==""
//                ||companyEntity.getGszz()==null||companyEntity.getGszz()==""
//                ||companyEntity.getGsjs()==null||companyEntity.getGsjs()==""
//                ||companyEntity.getRlzpyx()==null||companyEntity.getRlzpyx()==""
//                ||companyEntity.getRllxr()==null||companyEntity.getRllxr()==""
//                ||companyEntity.getRllxdh()==null||companyEntity.getRllxdh()==""
//                ||companyEntity.getXyx()==null||companyEntity.getXyx()==""
//                ||companyEntity.getYyx()==null||companyEntity.getYyx()==""
//                ||companyEntity.getZyx()==null||companyEntity.getZyx()==""
//                ||companyEntity.getZbdh()==null||companyEntity.getZbdh()==""
//                ||companyEntity.getZbdz()==null||companyEntity.getZbdz()==""
//                ||companyEntity.getJsdh()==null||companyEntity.getJsdh()==""
//                ){
//        return ApiResult.FAILURE("传入数据有空数据");
//        }
        //通过id查询是否有该信息
        companyEntity companyEntity1 = companyRepository.findById(companyEntity.getId());
        if(companyEntity1==null){
            return ApiResult.FAILURE("未找到该信息");
        }
        if (gstbfile==null||gstbfile.isEmpty()||gstbfile.getSize()==0){
            companyEntity.setGstb(companyEntity1.getGstb());
            System.out.print("未上传公司图标");
        }else {

            //判断文件上传大小
            if(gstbfile.getSize()>20971520){
                return ApiResult.FAILURE("图片超出文件大小");
            }
            //判断数据库里面是否有图标地址
            if(companyEntity1.getGstb()!=null&&companyEntity1.getGstb()!=""){
                //如果有图标，删除原有图标
                int isdel=fileUtil.fileDel("company");
                //判断图标是否删除成功
                if(isdel!=1){
                    return ApiResult.FAILURE("公司图标删除失败");
                }
                //删除成功后将用户修改的图标上传
                String filename=fileUtil.fileUpload(gstbfile,"company");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("公司图标上传失败");
                }
                //将文件名保存在数据库
                companyEntity.setGstb(filename);
            }else{
                System.out.print("上传图片");
                //如果没有，直接上传图标，保存图标名
                String filename=fileUtil.fileUpload(gstbfile,"company");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("公司图标上传失败");
                }
                //将文件名保存在数据库
                companyEntity.setGstb(filename);
            }

        }

        if (gsjstpfile==null||gsjstpfile.isEmpty()||gsjstpfile.getSize()==0){
            companyEntity.setGsjstp(companyEntity1.getGsjstp());
            System.out.print("未上传公司图片");
        }else{
            //判断文件上传大小
            if(gsjstpfile.getSize()>20971520){
                return ApiResult.FAILURE("图片超出文件大小");
            }
            //判断数据库里面是否有图标地址
            if(companyEntity1.getGsjstp()!=null&&companyEntity1.getGsjstp()!=""){
                //如果有图标，删除原有图标
                int isdel2=fileUtil.fileDel("company");
                //判断图标是否删除成功
                if(isdel2!=1){
                    return ApiResult.FAILURE("公司介绍图片删除失败");
                }
                //删除成功后将用户修改的图标上传
                String filename2=fileUtil.fileUpload(gsjstpfile,"company");
                //判断上传方法返回回来的数据
                if(filename2==null){
                    return ApiResult.FAILURE("公司介绍图片上传失败");
                }
                //将文件名保存在数据库
                companyEntity.setGsjstp(filename2);
            }else{
                System.out.print("上传图片");
                //如果没有，直接上传图标，保存图标名
                String filename2=fileUtil.fileUpload(gsjstpfile,"company");
                //判断上传方法返回回来的数据
                if(filename2==null){
                    return ApiResult.FAILURE("公司介绍图片上传失败");
                }
                //将文件名保存在数据库
                companyEntity.setGsjstp(filename2);
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
