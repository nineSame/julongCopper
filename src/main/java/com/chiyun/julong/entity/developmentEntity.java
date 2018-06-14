package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "development", schema = "julong")
public class developmentEntity {
    private String id;
    private String fzlcbt;//发展历程标题
    private String fzlcnr;//发展历程内容
    private String fzlctp;//发展历程图片
    private Date fzlcsj;//发展历程时间

    @Id
    @Column(name = "ID")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @GeneratedValue(generator = "system-uuid")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "title")
    public String getFzlcbt() {
        return fzlcbt;
    }

    public void setFzlcbt(String fzlcbt) {
        this.fzlcbt = fzlcbt;
    }

    @Basic
    @Column(name = "content")
    public String getFzlcnr() {
        return fzlcnr;
    }

    public void setFzlcnr(String fzlcnr) {
        this.fzlcnr = fzlcnr;
    }

    @Basic
    @Column(name = "photo")
    public String getFzlctp() {
        return fzlctp;
    }

    public void setFzlctp(String fzlctp) {
        this.fzlctp = fzlctp;
    }

    @Basic
    @Column(name = "time")
    public Date getFzlcsj() {
        return fzlcsj;
    }

    public void setFzlcsj(Date fzlcsj) {
        this.fzlcsj = fzlcsj;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        developmentEntity that = (developmentEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(fzlcbt, that.fzlcbt) &&
                Objects.equals(fzlcnr, that.fzlcnr) &&
                Objects.equals(fzlcsj, that.fzlcsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, fzlcbt, fzlcnr, fzlcsj);
    }
}
