package com.chiyun.julong.repository;

import com.chiyun.julong.entity.UserDisplay;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface userDisplayRepository  extends CrudRepository<UserDisplay, Long> {
    @Query(value ="select * from user_display order by updatedate desc", nativeQuery = true)
    List<UserDisplay> findAlldesc();
}
