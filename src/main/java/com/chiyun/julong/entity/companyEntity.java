package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "company", schema = "julong")
public class companyEntity {
    private String id;
    private String gsmz;//公司名字
    private String gstb;//公司图标
    private String gsdz;//公司地址
    private String gsyb;//公司邮编
    private String gsdh;//公司电话
    private String gslxr;//公司联系人
    private String jjbt;//简介标题
    private String gszz;//公司主旨
    private String gsjstp;//公司介绍图片
    private String gsjs;//公司介绍
    private String rlzpyx;//人力招聘邮箱
    private String rllxr;//人力联系人
    private String rllxdh;//人力联系电话
    private String xyx;//x邮箱
    private String yyx;//y邮箱
    private String zyx;//z邮箱
    private String zbdh;//招标电话
    private String zbdz;//招标地址
    private String jsdh;//技术电话

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

    @Basic
    @Column(name = "introtitle")
    public String  getJjbt() {
        return jjbt;
    }

    public void setJjbt(String jjbt) {
        this.jjbt = jjbt;
    }

    @Basic
    @Column(name = "purpose")
    public String getGszz() {
        return gszz;
    }

    public void setGszz(String gszz) {
        this.gszz = gszz;
    }

    @Basic
    @Column(name = "photo")
    public String getGsjstp() {
        return gsjstp;
    }

    public void setGsjstp(String gsjstp) {
        this.gsjstp = gsjstp;
    }

    @Basic
    @Column(name = "introduction")
    public String getGsjs() {
        return gsjs;
    }

    public void setGsjs(String gsjs) {
        this.gsjs = gsjs;
    }

    @Basic
    @Column(name = "hremail")
    public String getRlzpyx() {
        return rlzpyx;
    }

    public void setRlzpyx(String rlzpyx) {
        this.rlzpyx = rlzpyx;
    }

    @Basic
    @Column(name = "hrname")
    public String getRllxr() {
        return rllxr;
    }

    public void setRllxr(String rllxr) {
        this.rllxr = rllxr;
    }

    @Basic
    @Column(name = "hrphone")
    public String getRllxdh() {
        return rllxdh;
    }

    public void setRllxdh(String rllxdh) {
        this.rllxdh = rllxdh;
    }

    @Basic
    @Column(name = "xemail")
    public String getXyx() {
        return xyx;
    }

    public void setXyx(String xyx) {
        this.xyx = xyx;
    }

    @Basic
    @Column(name = "yemail")
    public String getYyx() {
        return yyx;
    }

    public void setYyx(String yyx) {
        this.yyx = yyx;
    }

    @Basic
    @Column(name = "zemail")
    public String getZyx() {
        return zyx;
    }

    public void setZyx(String zyx) {
        this.zyx = zyx;
    }

    @Basic
    @Column(name = "tenderphone")
    public String getZbdh() {
        return zbdh;
    }

    public void setZbdh(String zbdh) {
        this.zbdh = zbdh;
    }

    @Basic
    @Column(name = "tenderaddress")
    public String getZbdz() {
        return zbdz;
    }

    public void setZbdz(String zbdz) {
        this.zbdz = zbdz;
    }

    @Basic
    @Column(name = "technologycall")
    public String getJsdh() {
        return jsdh;
    }

    public void setJsdh(String jsdh) {
        this.jsdh = jsdh;
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
                Objects.equals(gslxr, that.gslxr)&&
                Objects.equals(jjbt, that.jjbt)&&
                Objects.equals(gszz, that.gszz) &&
                Objects.equals(gsjstp, that.gsjstp) &&
                Objects.equals(gsjs, that.gsjs) &&
                Objects.equals(rlzpyx, that.rlzpyx)&&
                Objects.equals(rllxr, that.rllxr)&&
                Objects.equals(rllxdh, that.rllxdh) &&
                Objects.equals(xyx, that.xyx) &&
                Objects.equals(yyx, that.yyx) &&
                Objects.equals(zyx, that.zyx)&&
                Objects.equals(zbdh, that.zbdh) &&
                Objects.equals(zbdz, that.zbdz) &&
                Objects.equals(jsdh, that.jsdh);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, gsmz, gstb, gsdz, gsyb, gsdh, gslxr, jjbt, gszz, gsjstp, gsjs, rlzpyx, rllxr, rllxdh, xyx, yyx, zyx, zbdh, zbdz, jsdh);
    }

}
