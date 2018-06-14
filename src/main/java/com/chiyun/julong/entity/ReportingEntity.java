package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

/**
 * 举报平台
 * Created by Administrator on 2018/6/12.
 */
@Entity
@Table(name = "zhaobiaoxitong", schema = "julong")
public class ReportingEntity {
    @Id
    @Column(name = "ID")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @GeneratedValue(generator = "system-uuid")
    private String id;

    @Basic
    @Column(name = "jubaoren")
    private String jbr;//举报人

    @Basic
    @Column(name = "jubaorendianhua")
    private String jbrdh;//举报人电话

    @Basic
    @Column(name = "jubaorenyouxiang")
    private String jbryx;//举报人邮箱

    @Basic
    @Column(name = "jubaoshuoming")
    private String jbsm;//举报说明

    @Basic
    @Column(name = "chuangjianshijian")
    private Date cjsj;//创建时间

    @Basic
    @Column(name = "xiugaishijian")
    private Date xgsj;//修改时间

    public ReportingEntity() {
    }

    public ReportingEntity(String jbr, String jbrdh, String jbryx, String jbsm, Date cjsj, Date xgsj) {
        this.jbr = jbr;
        this.jbrdh = jbrdh;
        this.jbryx = jbryx;
        this.jbsm = jbsm;
        this.cjsj = cjsj;
        this.xgsj = xgsj;
    }

    public String getId() {
        return id;
    }

    public void setId(String  id) {
        this.id = id;
    }

    public String getJbr() {
        return jbr;
    }

    public void setJbr(String jbr) {
        this.jbr = jbr;
    }

    public String getJbrdh() {
        return jbrdh;
    }

    public void setJbrdh(String jbrdh) {
        this.jbrdh = jbrdh;
    }

    public String getJbryx() {
        return jbryx;
    }

    public void setJbryx(String jbryx) {
        this.jbryx = jbryx;
    }

    public String getJbsm() {
        return jbsm;
    }

    public void setJbsm(String jbsm) {
        this.jbsm = jbsm;
    }

    public Date getCjsj() {
        return cjsj;
    }

    public void setCjsj(Date cjsj) {
        this.cjsj = cjsj;
    }

    public Date getXgsj() {
        return xgsj;
    }

    public void setXgsj(Date xgsj) {
        this.xgsj = xgsj;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReportingEntity that = (ReportingEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (jbr != null ? !jbr.equals(that.jbr) : that.jbr != null) return false;
        if (jbrdh != null ? !jbrdh.equals(that.jbrdh) : that.jbrdh != null) return false;
        if (jbryx != null ? !jbryx.equals(that.jbryx) : that.jbryx != null) return false;
        if (jbsm != null ? !jbsm.equals(that.jbsm) : that.jbsm != null) return false;
        if (cjsj != null ? !cjsj.equals(that.cjsj) : that.cjsj != null) return false;
        return xgsj != null ? xgsj.equals(that.xgsj) : that.xgsj == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (jbr != null ? jbr.hashCode() : 0);
        result = 31 * result + (jbrdh != null ? jbrdh.hashCode() : 0);
        result = 31 * result + (jbryx != null ? jbryx.hashCode() : 0);
        result = 31 * result + (jbsm != null ? jbsm.hashCode() : 0);
        result = 31 * result + (cjsj != null ? cjsj.hashCode() : 0);
        result = 31 * result + (xgsj != null ? xgsj.hashCode() : 0);
        return result;
    }
}
