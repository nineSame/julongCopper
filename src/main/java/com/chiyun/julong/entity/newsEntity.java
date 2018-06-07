package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "news", schema = "julong")
public class newsEntity {
    private String id;
    private String xwbt;//新闻标题
    private String xwtp;//新闻图片
    private String xwnr;//新闻内容
    private String xwlx;//新闻类型
    private Date cjsj;//创建时间
    private Date gxsj;//更新时间

    public newsEntity() {
    }

/*    public newsEntity(String xwbt, String xwtp, String xwnr) {
        this.xwbt = xwbt;
        this.xwtp = xwtp;
        this.xwnr = xwnr;
    }*/


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
    public String getXwbt() {
        return xwbt;
    }

    public void setXwbt(String xwbt) {
        this.xwbt = xwbt;
    }

    @Basic
    @Column(name = "photosrc")
    public String getXwtp() {
        return xwtp;
    }

    public void setXwtp(String xwtp) {
        this.xwtp = xwtp;
    }

    @Basic
    @Column(name = "content")
    public String getXwnr() {
        return xwnr;
    }

    public void setXwnr(String xwnr) {
        this.xwnr = xwnr;
    }

    @Basic
    @Column(name = "type")
    public String getXwlx() {
        return xwlx;
    }

    public void setXwlx(String xwlx) {
        this.xwlx = xwlx;
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
        newsEntity that = (newsEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(xwbt, that.xwbt) &&
                Objects.equals(xwtp, that.xwtp) &&
                Objects.equals(xwnr, that.xwnr)&&
                Objects.equals(gxsj, that.gxsj)&&
                Objects.equals(cjsj, that.cjsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, xwbt, xwtp, xwnr,gxsj, cjsj);
    }
}

