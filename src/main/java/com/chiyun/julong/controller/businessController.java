package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.businessEntity;
import com.chiyun.julong.repository.businessRepository;
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
public class businessController {

    @Resource
    private businessRepository businessRepository;

    @ResponseBody
    @RequestMapping("/business/page")
    public ApiResult<Object> page(int ywlx, int page, int size, HttpSession httpSession){
//zh为关键字查询，新闻模块的关键字暂定
        Page<businessEntity> list;
        if(ywlx==0){
            list = businessRepository.findAll(PageRequest.of(page-1,size, Sort.by(new Sort.Order(Sort.Direction.DESC,"cjsj"))));
        }else {
            list = businessRepository.findAllByYwlx(ywlx,PageRequest.of(page-1,size, Sort.by(new Sort.Order(Sort.Direction.DESC,"cjsj"))));
        }
//        Page<businessEntity> list = businessRepository.findAll(PageRequest.of(page-1,size, Sort.unsorted()));

        //httpSession.setAttribute("id", userEntity.getId());
        //ApiPageResult ApiPageResult = new
        return ApiResult.SUCCESS(list);

    }

    @ResponseBody
    @RequestMapping("/business/del")
    public ApiResult<Object> del(String id,HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //通过id实行删除操作
        if (id == "" || id==null) {
            return ApiResult.FAILURE("参数错误");
        }
        int isdel = businessRepository.deleteOrderById(id);
        if (isdel == 0) {
            return ApiResult.FAILURE("删除失败");
        }
        return ApiResult.SUCCESS("删除成功");
    }


    @ResponseBody
    @RequestMapping("/business/update")
    public ApiResult<Object> update(businessEntity businessEntity, MultipartFile ywtpfile, HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

        if(businessEntity.getYwbt()==null||businessEntity.getYwbt()==""||ywtpfile.isEmpty()||ywtpfile.getSize()==0){
            return ApiResult.FAILURE("图片为空或标题为空");
        }
        //通过id查询是否有该图片
        businessEntity businessEntity1 = businessRepository.findById(businessEntity.getId());
        if(businessEntity1==null){
            return ApiResult.FAILURE("未找到该图片");
        }
            //判断文件上传大小
            if(ywtpfile.getSize()>10485760){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //判断该数据库里面是否有照片
            if(businessEntity1.getYwtp()!=null&&businessEntity1.getYwtp()!=""){
                //如果有照片，删除原有照片
                int isdel=fileUtil.fileDel("business");
                //判断是否删除成功
                if(isdel!=1){
                    return ApiResult.FAILURE("图片删除失败");
                }
                //删除成功后将用户修改的照片上传
                String filename=fileUtil.fileUpload(ywtpfile,"business");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                businessEntity.setYwtp(filename);
            }else{
                //如果没有，直接上传文件，保存文件名
                String filename=fileUtil.fileUpload(ywtpfile,"business");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                businessEntity.setYwtp(filename);
            }

        //保存操作
        businessEntity entity = businessRepository.save(businessEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }


    @ResponseBody
    @RequestMapping("/business/create")
    //@AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(businessEntity businessEntity, MultipartFile ywtpfile, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //判断数据中的必填项是否为空
        /*if(name.isEmpty()){
            return ApiResult.FAILURE("姓名为空");
        }*/
        if(businessEntity.getYwbt()==null||businessEntity.getYwbt()==""||ywtpfile.isEmpty()||ywtpfile.getSize()==0){
            return ApiResult.FAILURE("图片为空或标题为空");
        }


            //判断文件上传大小
            if(ywtpfile.getSize()>10485760){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //不为空，文件大小符合，则上传图片
            String filename=fileUtil.fileUpload(ywtpfile,"business");
            //由返回的数据判断图片是否上传成功
            if(filename==null){
                return ApiResult.FAILURE("图片上传失败");
            }
            //将返回的文件名保存在数据库
            businessEntity.setYwtp(filename);

        //存创建时间
        businessEntity.setCjsj(new Date());
        businessEntity entity = businessRepository.save(businessEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建图片失败");
        }

        return ApiResult.SUCCESS("新建图片成功");
    }

}
