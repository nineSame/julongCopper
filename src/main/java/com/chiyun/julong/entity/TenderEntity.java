package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

/**
 * 招标系统
 * Created by Administrator on 2018/6/12.
 */
@Entity
@Table(name = "zhaobiaoxitong", schema = "julong")
public class TenderEntity {
    @Id
    @Column(name = "ID")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @GeneratedValue(generator = "system-uuid")
    private String id;

    @Basic
    @Column(name = "gongyingshanglianxiren")
    private String gyslxr;//供应商联系人

    @Basic
    @Column(name = "gongyingshanglianxidianhua")
    private String gyslxdh;//供应商联系电话

    @Basic
    @Column(name = "gongyingshangliuyan")
    private String gysly;//供应商留言

    @Basic
    @Column(name = "chuangjianshijian")
    private Date cjsj;//创建时间

    @Basic
    @Column(name="xiugaishijian")
    private Date xgsj;//修改时间

    public TenderEntity() {
    }

    public TenderEntity(String id, String gyslxr, String gyslxdh, String gysly, Date cjsj, Date xgsj) {
        this.id = id;
        this.gyslxr = gyslxr;
        this.gyslxdh = gyslxdh;
        this.gysly = gysly;
        this.cjsj = cjsj;
        this.xgsj = xgsj;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGyslxr() {
        return gyslxr;
    }

    public void setGyslxr(String gyslxr) {
        this.gyslxr = gyslxr;
    }

    public String getGyslxdh() {
        return gyslxdh;
    }

    public void setGyslxdh(String gyslxdh) {
        this.gyslxdh = gyslxdh;
    }

    public String getGysly() {
        return gysly;
    }

    public void setGysly(String gysly) {
        this.gysly = gysly;
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

        TenderEntity that = (TenderEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (gyslxr != null ? !gyslxr.equals(that.gyslxr) : that.gyslxr != null) return false;
        if (gyslxdh != null ? !gyslxdh.equals(that.gyslxdh) : that.gyslxdh != null) return false;
        if (gysly != null ? !gysly.equals(that.gysly) : that.gysly != null) return false;
        if (cjsj != null ? !cjsj.equals(that.cjsj) : that.cjsj != null) return false;
        return xgsj != null ? xgsj.equals(that.xgsj) : that.xgsj == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (gyslxr != null ? gyslxr.hashCode() : 0);
        result = 31 * result + (gyslxdh != null ? gyslxdh.hashCode() : 0);
        result = 31 * result + (gysly != null ? gysly.hashCode() : 0);
        result = 31 * result + (cjsj != null ? cjsj.hashCode() : 0);
        result = 31 * result + (xgsj != null ? xgsj.hashCode() : 0);
        return result;
    }
}
