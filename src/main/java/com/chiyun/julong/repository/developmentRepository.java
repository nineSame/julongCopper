package com.chiyun.julong.repository;

import com.chiyun.julong.entity.developmentEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface developmentRepository extends CrudRepository<developmentEntity,Long> {
//    Page<developmentEntity> findAllByFzlcsj(Date fzlcsj, Pageable pageable);

    //developmentEntity findByFzlcbt(String title);

    developmentEntity findById(String id);

    int deleteOrderById(String id);

    List<developmentEntity> findAll();
   /*@Query(value = "select * from development where fzlcsj=? ", nativeQuery = true)
   @Modifying
   @Transactional
   List<developmentEntity> findAllBysj();*/
    @Query(value ="select * from development order by time asc", nativeQuery = true)
    List<developmentEntity> findAllasc();

}
