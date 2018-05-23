package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "announcement", schema = "julong")
public class announcementEntity {
    private String id;
    private String ggbt;//公告标题
    private String ggdz;//公告地址
    private Date cjsj;//创建时间
    private Date gxsj;//更新时间
    private int lx;//类型

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
    public String getGgbt() {
        return ggbt;
    }

    public void setGgbt(String ggbt) {
        this.ggbt = ggbt;
    }

    @Basic
    @Column(name = "path")
    public String getGgdz() {
        return ggdz;
    }

    public void setGgdz(String ggdz) {
        this.ggdz = ggdz;
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


    @Basic
    @Column(name = "style")
    public int getLx() {
        return lx;
    }

    public void setLx(int lx) {
        this.lx = lx;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        announcementEntity that = (announcementEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(ggbt, that.ggbt) &&
                Objects.equals(ggdz, that.ggdz) &&
                Objects.equals(lx, that.lx)&&
                Objects.equals(gxsj, that.gxsj)&&
                Objects.equals(cjsj, that.cjsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, ggbt, ggdz, lx,gxsj, cjsj);
    }

}
