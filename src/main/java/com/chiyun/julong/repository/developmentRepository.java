package com.chiyun.julong.repository;

import com.chiyun.julong.entity.developmentEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface developmentRepository extends CrudRepository<developmentEntity,Long> {
    Page<developmentEntity> findAllByFzlcsj(Date fzlcsj, Pageable pageable);

    //developmentEntity findByFzlcbt(String title);

    developmentEntity findById(String id);

    int deleteOrderById(String id);
}
