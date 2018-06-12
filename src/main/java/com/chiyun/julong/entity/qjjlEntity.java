package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "quanjingjulong", schema = "julong")
public class qjjlEntity {
    private String id;
    private String bt;
    private String snt;
    private String wldz;
    private Date cjsj;
    private Date gxsj;

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
    public String getBt() {
        return bt;
    }

    public void setBt(String xwbt) {
        this.bt = bt;
    }

    @Basic
    @Column(name = "thumbnail")
    public String getSnt() {
        return snt;
    }

    public void setSnt(String snt) {
        this.snt = snt;
    }

    @Basic
    @Column(name = "outside")
    public String getWldz() {
        return wldz;
    }

    public void setWldz(String wldz) {
        this.wldz = wldz;
    }

    @Basic
    @Column(name = "createtime")
    public Date getCjsj() {
        return cjsj;
    }

    public void setCjsj(Date cjsj) {
        this.cjsj = cjsj;
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
        qjjlEntity that = (qjjlEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(bt, that.bt) &&
                Objects.equals(snt, that.snt) &&
                Objects.equals(wldz, that.wldz)&&
                Objects.equals(gxsj, that.gxsj)&&
                Objects.equals(cjsj, that.cjsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, bt, snt, wldz,gxsj, cjsj);
    }
}
