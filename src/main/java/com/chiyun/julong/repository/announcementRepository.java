package com.chiyun.julong.repository;

import com.chiyun.julong.entity.announcementEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

public interface announcementRepository extends CrudRepository<announcementEntity,Long> {

    Page<announcementEntity> findAllByLx(int lx,Pageable pageable);

    //使用原生sql通过id删除用户
    @Query(value = "delete from announcement where id=?1 ", nativeQuery = true)
    @Modifying
    @Transactional
    int deleteOrderById(String id);

    announcementEntity findByGgbt(String title);

    announcementEntity findById(String id);
}
