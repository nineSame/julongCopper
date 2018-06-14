package com.chiyun.julong.repository;

import com.chiyun.julong.entity.TenderEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2018/6/12.
 */
public interface TenderReposity extends CrudRepository<TenderEntity,Long> {
    //通过id删除
    void deleteById(String id);
    //通过id查询
    TenderEntity findById(String id);
    //通过联系电话查询
    TenderEntity findByGyslxdh(String gyslxdh);
    //通过时间查询
    List<TenderEntity> findByCjsj(Date cjsj);
    //查询所有
    List<TenderEntity> findAll();
    //保存
    TenderEntity save(TenderEntity tenderEntity);
}
