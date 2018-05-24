package com.chiyun.julong.repository;

import com.chiyun.julong.entity.photoEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface photoRepository extends CrudRepository<photoEntity, Long> {
    photoEntity findById(String id);


    /*//使用原生sql查询用户
    @Query(value = "select * from photo where place=? ", nativeQuery = true)
    @Modifying
    @Transactional
     List<photoEntity> findByPlace(String place);*/

    //使用原生sql通过id删除用户
    @Query(value = "delete from photo where id=? ", nativeQuery = true)
    @Modifying
    @Transactional
    int deleteOrderById(String id);
}
