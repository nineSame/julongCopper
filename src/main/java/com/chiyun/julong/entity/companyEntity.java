package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

public class companyEntity {
    private String id;
    private String gsmz;//公司名字
    private String gstb;//公司图标
    private String gsdz;//公司地址
    private String gsyb;//公司邮编
    private String gsdh;//公司电话
    private String gslxr;//公司联系人

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
    @Column(name = "name")
    public String getGsmz() {
        return gsmz;
    }

    public void setGsmz(String gsmz) {
        this.gsmz = gsmz;
    }

    @Basic
    @Column(name = "icon")
    public String getGstb() {
        return gstb;
    }

    public void setGstb(String gstb) {
        this.gstb = gstb;
    }

    @Basic
    @Column(name = "address")
    public String getGsdz() {
        return gsdz;
    }

    public void setGsdz(String gsdz) {
        this.gsdz = gsdz;
    }

    @Basic
    @Column(name = "emailcode")
    public String getGsyb() {
        return gsyb;
    }

    public void setGsyb(String gsyb) {
        this.gsyb = gsyb;
    }

    @Basic
    @Column(name = "phone")
    public String getGsdh() {
        return gsdh;
    }

    public void setGsdh(String gsdh) {
        this.gsdh = gsdh;
    }

    @Basic
    @Column(name = "contactman")
    public String getGslxr() {
        return gslxr;
    }

    public void setGslxr(String gslxr) {
        this.gslxr = gslxr;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        companyEntity that = (companyEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(gsmz, that.gsmz) &&
                Objects.equals(gstb, that.gstb)&&
                Objects.equals(gsdz, that.gsdz) &&
                Objects.equals(gsyb, that.gsyb) &&
                Objects.equals(gsdh, that.gsdh) &&
                Objects.equals(gslxr, that.gslxr);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, gsmz, gstb, gsdz, gsyb, gsdh, gslxr);
    }

}
