package com.chiyun.julong.repository;

import com.chiyun.julong.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Long> {
    UserEntity findById(String id);

    UserEntity findByAccountAndPassword(String username, String password);
}
