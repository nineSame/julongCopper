package com.chiyun.julong.repository;

import com.chiyun.julong.entity.ReportingEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2018/6/12.
 */
public interface ReportingReposity extends CrudRepository<ReportingEntity,Long> {
    //通过id删除
    void deleteById(String id);
    //通过id查询
    ReportingEntity findById(String id);
    //通过联系电话查询
    ReportingEntity findByJbrdh(String jbrdh);
    //通过时间查询
    List<ReportingEntity> findByCjsj(Date cjsj);
    //查询所有
    List<ReportingEntity> findAll();
    //保存
    ReportingEntity save(ReportingEntity reportingEntity);
}
