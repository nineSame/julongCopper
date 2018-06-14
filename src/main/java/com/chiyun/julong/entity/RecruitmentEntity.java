package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * 人才招聘
 * Created by Administrator on 2018/6/12.
 */
@Entity
@Table(name = "rencaizhaopin", schema = "julong")
public class RecruitmentEntity {
    @Id
    @Column(name = "id")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @GeneratedValue(generator = "system-uuid")
    private String id;

    @Basic
    @Column(name = "zhaopinrenshu")
    private Integer zprs;//招聘人数

    @Basic
    @Column(name = "xinzidaiyu")
    private String xzdy;//薪资待遇

    @Basic
    @Column(name = "xueliyaoqiu")
    private String xlyq;//学历要求

    @Basic
    @Column(name = "gongzuojingyan")
    private String gzjy;//工作经验

    @Basic
    @Column(name = "zhaopinfujian")
    private String zpfj;//招聘附件

    public RecruitmentEntity() {
    }

    public RecruitmentEntity(Integer zprs, String xzdy, String xlyq, String gzjy, String zpfj) {
        this.zprs = zprs;
        this.xzdy = xzdy;
        this.xlyq = xlyq;
        this.gzjy = gzjy;
        this.zpfj = zpfj;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getZprs() {
        return zprs;
    }

    public void setZprs(Integer zprs) {
        this.zprs = zprs;
    }

    public String getXzdy() {
        return xzdy;
    }

    public void setXzdy(String xzdy) {
        this.xzdy = xzdy;
    }

    public String getXlyq() {
        return xlyq;
    }

    public void setXlyq(String xlyq) {
        this.xlyq = xlyq;
    }

    public String getGzjy() {
        return gzjy;
    }

    public void setGzjy(String gzjy) {
        this.gzjy = gzjy;
    }

    public String getZpfj() {
        return zpfj;
    }

    public void setZpfj(String zpfj) {
        this.zpfj = zpfj;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RecruitmentEntity that = (RecruitmentEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (zprs != null ? !zprs.equals(that.zprs) : that.zprs != null) return false;
        if (xzdy != null ? !xzdy.equals(that.xzdy) : that.xzdy != null) return false;
        if (xlyq != null ? !xlyq.equals(that.xlyq) : that.xlyq != null) return false;
        if (gzjy != null ? !gzjy.equals(that.gzjy) : that.gzjy != null) return false;
        return zpfj != null ? zpfj.equals(that.zpfj) : that.zpfj == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (zprs != null ? zprs.hashCode() : 0);
        result = 31 * result + (xzdy != null ? xzdy.hashCode() : 0);
        result = 31 * result + (xlyq != null ? xlyq.hashCode() : 0);
        result = 31 * result + (gzjy != null ? gzjy.hashCode() : 0);
        result = 31 * result + (zpfj != null ? zpfj.hashCode() : 0);
        return result;
    }
}
