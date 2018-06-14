package com.chiyun.julong.repository;

import com.chiyun.julong.entity.RecruitmentEntity;
import com.chiyun.julong.entity.businessEntity;
import org.springframework.data.repository.CrudRepository;


import java.util.List;

/**
 * Created by Administrator on 2018/6/12.
 */
public interface RecruitmentReposity extends CrudRepository<RecruitmentEntity,Long> {
    //通过id删除
    void deleteById(String id);
    //通过id查询
    RecruitmentEntity findById(String id);
    //查询所有
    List<RecruitmentEntity> findAll();
    //保存
    RecruitmentEntity save(RecruitmentEntity recruitmentEntity);
}
