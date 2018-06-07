package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "business", schema = "julong")
public class businessEntity {
    private String id;
    private String ywbt;//业务标题
    private String ywtp;//业务图片
    private String ywms;//业务描述
    private int ywlx;//业务类型
    private Date cjsj;//创建时间

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
    public String getYwbt() {
        return ywbt;
    }

    public void setYwbt(String ywbt) {
        this.ywbt = ywbt;
    }

    @Basic
    @Column(name = "photosrc")
    public String getYwtp() {
        return ywtp;
    }

    public void setYwtp(String ywtp) {
        this.ywtp = ywtp;
    }

    @Basic
    @Column(name = "description")
    public String getYwms() {
        return ywms;
    }

    public void setYwms(String ywms) {
        this.ywms = ywms;
    }

    @Basic
    @Column(name = "type")
    public int getYwlx() {
        return ywlx;
    }

    public void setYwlx(int ywlx) {
        this.ywlx = ywlx;
    }

    @Basic
    @Column(name = "createtime")
    public Date getCjsj() {
        return cjsj;
    }

    public void setCjsj(Date cjsj) {
        this.cjsj = cjsj;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        businessEntity that = (businessEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(ywbt, that.ywbt) &&
                Objects.equals(ywtp, that.ywtp) &&
                Objects.equals(ywms, that.ywms)&&
                Objects.equals(ywlx, that.ywlx)&&
                Objects.equals(cjsj, that.cjsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, ywbt, ywtp, ywms,ywlx,cjsj);
    }
}
