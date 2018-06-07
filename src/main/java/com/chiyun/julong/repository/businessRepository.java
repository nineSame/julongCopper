package com.chiyun.julong.repository;

import com.chiyun.julong.entity.businessEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

public interface businessRepository extends CrudRepository<businessEntity,Long> {

    Page<businessEntity> findAll(Pageable pageable);

    Page<businessEntity> findAllByYwlx(int ywlx, Pageable pageable);


    //使用原生sql通过id删除用户
    @Query(value = "delete from business where id=?1 ", nativeQuery = true)
    @Modifying
    @Transactional
    int deleteOrderById(String id);

    businessEntity findById(String id);
}
