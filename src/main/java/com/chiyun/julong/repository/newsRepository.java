package com.chiyun.julong.repository;

import com.chiyun.julong.entity.newsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface newsRepository extends CrudRepository<newsEntity, Long> {
    newsEntity findById(String id);

    //使用原生sql通过id删除用户
    @Query(value = "delete from news where id=?1 ", nativeQuery = true)
    @Modifying
    @Transactional
    int deleteOrderById(String id);

    Page<newsEntity> findAll(Pageable pageable);
    Page<newsEntity> findAllByXwlx(int xwlx,Pageable pageable);

    newsEntity findByXwbt(String title);


    @Query(value = "select * from news where (title like ?1 or content like ?1) and (createtime between ?2 and ?2) ", nativeQuery = true)
    @Modifying
    @Transactional
    List<newsEntity> findAllByCondition(String Condition,Date begin,Date end);
}
