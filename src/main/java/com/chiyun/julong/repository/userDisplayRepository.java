package com.chiyun.julong.repository;

import com.chiyun.julong.entity.view_user;
import org.springframework.data.repository.CrudRepository;

public interface userDisplayRepository  extends CrudRepository<view_user, Long> {
    
}
