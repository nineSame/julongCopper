package com.chiyun.julong.repository;

import com.chiyun.julong.entity.UserDisplay;

import com.chiyun.julong.entity.photoEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface userDisplayRepository  extends CrudRepository<UserDisplay, Long> {


    UserDisplay findById(String id);

    @Query(value ="select * from user_display order by updatedate desc", nativeQuery = true)
    List<UserDisplay> findAlldesc();

    //分页查询
//    @Query(value = "select * from user_display limit (a-1)*b,b", nativeQuery = true)
//    @Modifying
//    @Transactional
    Page<UserDisplay> findAllBy(Pageable pageable);
}
