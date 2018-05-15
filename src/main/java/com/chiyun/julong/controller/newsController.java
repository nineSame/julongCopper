package com.chiyun.julong.controller;

import com.chiyun.julong.common.ApiResult;
import com.chiyun.julong.entity.newsEntity;
import com.chiyun.julong.repository.newsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
public class newsController {

    private List<newsEntity> ListNews;

    @Resource
    private newsRepository newsRepository;


    @ResponseBody
    @RequestMapping("/news/display")
    public ApiResult<Object> lb(HttpSession httpSession) throws Exception {
        ListNews = (List<newsEntity>) newsRepository.findAll();

        if (ListNews == null) {
            return ApiResult.FAILURE("数据库错误");
        }
        return ApiResult.SUCCESS(ListNews);
    }


    @ResponseBody
    @RequestMapping("/news/del")
    public ApiResult<Object> del(String id,HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //通过id实行删除操作
        if (id == "" || id==null) {
            return ApiResult.FAILURE("参数错误");
        }
        int isdel = newsRepository.deleteOrderById(id);
        if (isdel == 0) {
            return ApiResult.FAILURE("删除失败");
        }
        return ApiResult.SUCCESS("删除成功");
    }


    @ResponseBody
    @RequestMapping("/news/update")
    public ApiResult<Object> update(newsEntity newsEntity, HttpServletRequest tp, HttpSession httpSession) throws Exception {
        //判断是否登录
       /* String personid = (String) httpSession.getAttribute("id");
        if (personid.isEmpty()) {
            return ApiResult.UNKNOWN();
        }*/
        //判断是否为管理员

        //新闻标题和内容属于必填字段，但是新闻图片不一定，所以只在前面判断标题和内容，下面的图片路径可不必判断是否为空
        //判断传进的新闻标题和内容是否为空
        String title=newsEntity.getXwbt();
        String content=newsEntity.getXwnr();
        if(title==null||title==""||content==null||content==""){
            return ApiResult.FAILURE("新闻标题和内容为空");
        }
        //通过id查询是否有该新闻
        newsEntity newsEntity1 = newsRepository.findByXwbt(newsEntity.getId());
        if(newsEntity1==null){
            return ApiResult.FAILURE("未找到该用户");
        }
        //处理传过来的图片路径
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) tp;
        MultipartFile file = multipartRequest.getFile("xwtpfile");
        String zpfile ="";
        if (file!=null){
            zpfile = file.getOriginalFilename();
        }
        newsEntity.setXwtplj(zpfile);
        //执行保存操作
        newsEntity.setGxsj(new Date());
        newsEntity entity = newsRepository.save(newsEntity);
        if (entity == null) {
            return ApiResult.FAILURE("修改失败");
        }
        return ApiResult.SUCCESS("修改成功");
    }


    @ResponseBody
    @RequestMapping("/news/create")
    //@AccessRequired(menue = 0, action = 1)
    public ApiResult<Object> create(newsEntity newsEntity, HttpServletRequest tp, HttpSession httpSession) throws Exception {
        //判断是否为管理员

        //判断数据中的必填项是否为空
        /*if(name.isEmpty()){
            return ApiResult.FAILURE("姓名为空");
        }*/
        //新闻标题和内容属于必填字段，但是新闻图片不一定，所以只在前面判断标题和内容，下面的图片路径可不必判断是否为空
        //判断传进的新闻标题和内容是否为空
        String title=newsEntity.getXwbt();
        String content=newsEntity.getXwnr();
        if(title==null||title==""||content==null||content==""){
            return ApiResult.FAILURE("新闻标题和内容为空");
        }
        if(newsRepository.findByXwbt(title)!=null){
            return ApiResult.FAILURE("数据库已有该标题的数据");
        }
        //处理图片路径并存储
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) tp;
        MultipartFile file = multipartRequest.getFile("xwtpfile");
        String zpfile ="";
        if (file!=null){
            zpfile = file.getOriginalFilename();
        }
        newsEntity.setXwtplj(zpfile);
        //存创建时间和更新时间
        newsEntity.setCjsj(new Date());
        newsEntity.setGxsj(new Date());
        newsEntity entity = newsRepository.save(newsEntity);
        if (entity == null) {
            return ApiResult.FAILURE("新建新闻失败");
        }

        return ApiResult.SUCCESS("新建新闻成功");
    }

    @ResponseBody
    @RequestMapping("/news/page")
    public ApiResult<Object> page(int page,int size, HttpSession httpSession){
//zh为关键字查询，新闻模块的关键字暂定
        /*if(zh==null){
            zh="%%";
        }*/
        Page<newsEntity> list = newsRepository.findAll(PageRequest.of(page-1,size, Sort.unsorted()));

        if (list == null) {
            return ApiResult.FAILURE("没有数据");
        }
        //httpSession.setAttribute("id", userEntity.getId());
        //ApiPageResult ApiPageResult = new
        return ApiResult.SUCCESS(list);

    }
}


