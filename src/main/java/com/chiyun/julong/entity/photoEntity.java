package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "photo", schema = "julong")
public class photoEntity {
    private String id;
    private String tpbt;//图片标题
    private String tplj;//图片路径
    private String tpms;//图片描述
    private Date gxsj;//更新时间

    public photoEntity() {
    }

    public photoEntity(String tpbt, String tplj, String tpms) {
        this.tpbt = tpbt;
        this.tplj = tplj;
        this.tpms = tpms;
    }


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
    public String getTpbt() {
        return tpbt;
    }

    public void setTpbt(String tpbt) {
        this.tpbt = tpbt;
    }

    @Basic
    @Column(name = "src")
    public String getTplj() {
        return tplj;
    }

    public void setTplj(String tplj) {
        this.tplj = tplj;
    }

    @Basic
    @Column(name = "description")
    public String getTpms() {
        return tpms;
    }

    public void setTpms(String tpms) {
        this.tpms = tpms;
    }

    @Basic
    @Column(name = "updatetime")
    public Date getGxsj() {
        return gxsj;
    }

    public void setGxsj(Date gxsj) {
        this.gxsj = gxsj;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        photoEntity that = (photoEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(tpbt, that.tpbt) &&
                Objects.equals(tplj, that.tplj) &&
                Objects.equals(tpms, that.tpms)&&
                Objects.equals(gxsj, that.gxsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, tpbt, tplj, tpms,gxsj);
    }
}

