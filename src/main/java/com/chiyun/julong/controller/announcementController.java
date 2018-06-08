package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.announcementEntity;
import com.chiyun.julong.utils.fileUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import com.chiyun.julong.repository.announcementRepository;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Controller
public class announcementController {
    @Resource
    private announcementRepository announcementRepository;


    @ResponseBody
    @RequestMapping("/ann/page")
    public ApiResult<Object> page(int lx,int page, int size, HttpSession httpSession){
//zh为关键字查询，模块的关键字暂定
        /*if(zh==null){
            zh="%%";
        }*/
        Page<announcementEntity> list = announcementRepository.findAllByLx(lx,PageRequest.of(page-1,size, Sort.by(new Sort.Order(Sort.Direction.DESC,"gxsj"))));

        return ApiResult.SUCCESS(list);

    }

    @ResponseBody
    @RequestMapping("/ann/del")
    public ApiResult<Object> del(String id,HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //通过id实行删除操作
        if (id == "" || id==null) {
            return ApiResult.FAILURE("参数错误");
        }
        int isdel = announcementRepository.deleteOrderById(id);
        if (isdel == 0) {
            return ApiResult.FAILURE("删除失败");
        }
        return ApiResult.SUCCESS("删除成功");
    }


    @ResponseBody
    @RequestMapping("/ann/create")
    //@AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(announcementEntity announcementEntity, MultipartFile ggdzfile, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //判断数据中的必填项是否为空
        /*if(name.isEmpty()){
            return ApiResult.FAILURE("姓名为空");
        }*/

        //判断传进的公告标题和公告文件是否为空
        if(announcementEntity.getGgbt()==null||announcementEntity.getGgbt()==""||ggdzfile.isEmpty()||ggdzfile.getSize()==0){
            return ApiResult.FAILURE("公告标题或公告文件为空");
        }
        if(announcementRepository.findByGgbt(announcementEntity.getGgbt())!=null){
            return ApiResult.FAILURE("数据库已有该标题的数据");
        }

            //判断文件上传大小
            if(ggdzfile.getSize()>20971520){
                return ApiResult.FAILURE("文件超出上传文件大小");
            }
            //文件大小符合，上传图片
            String filename=fileUtil.fileUpload(ggdzfile,"announcement");
            //由返回的数据判断是否上传成功
            if(filename==null){
                return ApiResult.FAILURE("图片上传失败");
            }
            //将返回的文件名保存在数据库
            announcementEntity.setGgdz(filename);

        //存创建时间和更新时间
        announcementEntity.setCjsj(new Date());
        announcementEntity.setGxsj(new Date());
        announcementEntity entity = announcementRepository.save(announcementEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建公告失败");
        }

        return ApiResult.SUCCESS("新建公告成功");
    }


    @ResponseBody
    @RequestMapping("/ann/update")
    public ApiResult<Object> update(announcementEntity announcementEntity, MultipartFile ggdzfile, HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

        //判断传进的新闻标题和内容是否为空
        if(announcementEntity.getGgbt()==null||announcementEntity.getGgbt()==""||ggdzfile.isEmpty()||ggdzfile.getSize()==0){
            return ApiResult.FAILURE("公告标题和文件为空");
        }
        //通过id查询是否有该公告
        announcementEntity announcementEntity1 = announcementRepository.findById(announcementEntity.getId());
        if(announcementEntity1==null){
            return ApiResult.FAILURE("未找到该公告");
        }
            //判断文件上传大小
            if(ggdzfile.getSize()>20971520){
                return ApiResult.FAILURE("图片超出上传文件大小");
            }
            //判断数据库里面是否有公告文件地址
            if(announcementEntity1.getGgdz()!=null&&announcementEntity1.getGgdz()!=""){
                //如果有文件，删除原有文件
                int isdel=fileUtil.fileDel(announcementEntity1.getGgdz(),"news");
                //判断是否删除成功
                if(isdel!=1){
                    return ApiResult.FAILURE("文件删除失败");
                }
                //删除成功后将用户修改的文件上传
                String filename=fileUtil.fileUpload(ggdzfile,"news");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("文件上传失败");
                }
                //将文件名保存在数据库
                announcementEntity.setGgdz(filename);
            }else{
                //如果没有，直接上传文件，保存文件名
                String filename=fileUtil.fileUpload(ggdzfile,"news");
                //判断上传方法返回回来的数据
                if(filename==null){
                    return ApiResult.FAILURE("图片上传失败");
                }
                //将文件名保存在数据库
                announcementEntity.setGgdz(filename);
            }

        //保存更新时间
        announcementEntity.setCjsj(announcementEntity1.getCjsj());
        announcementEntity.setGxsj(new Date());
        //保存操作
        announcementEntity entity = announcementRepository.save(announcementEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }
}
