package com.chiyun.julong.repository;

import com.chiyun.julong.entity.companyEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface companyRepository extends CrudRepository<companyEntity,Long> {
     List<companyEntity> findAll();

    companyEntity findById(String id);
}

