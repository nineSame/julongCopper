package com.chiyun.julong.repository;

import com.chiyun.julong.entity.newsEntity;
import com.chiyun.julong.entity.qjjlEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

public interface qjjlRepository extends CrudRepository<qjjlEntity, Long> {
    qjjlEntity findById(String id);

    //使用原生sql通过id删除用户
    @Query(value = "delete from quanjingjulong where id=?1 ", nativeQuery = true)
    @Modifying
    @Transactional
    int deleteOrderById(String id);

    Page<qjjlEntity> findAllByBt(String bt,Pageable pageable);
}
