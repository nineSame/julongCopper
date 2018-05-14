package com.chiyun.julong.repository;

import com.chiyun.julong.entity.newsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface newsRepository extends CrudRepository<newsEntity, Long> {
    newsEntity findById(String id);

    //使用原生sql通过id删除用户
    @Query(value = "delete from news where id=? ", nativeQuery = true)
    @Modifying
    @Transactional
    int deleteOrderById(String id);

    Page<newsEntity> findAll(Pageable pageable);
}
