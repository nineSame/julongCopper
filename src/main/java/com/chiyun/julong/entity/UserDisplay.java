package com.chiyun.julong.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_display", schema = "julong")
public class UserDisplay {
    private String id;
    private String xm;//姓名
    private String zh;//账号
    private Integer js;//角色
    private Integer sfyx;//是否有效
    private Integer xb;//性别
    private String zw;//职务
    private String sfzh;//身份证号
    private String ms;//描述
    private String zp;//照片路径
    private Integer zwdjpx;//职务登记排序
    private String gxsj;//更新时间

    @Id
    @Column(name = "ID")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "NAME")
    public String getXm() {
        return xm;
    }

    public void setXm(String xm) {
        this.xm = xm;
    }

    @Basic
    @Column(name = "ACCOUNT")
    public String getZh() {
        return zh;
    }

    public void setZh(String zh) {
        this.zh = zh;
    }

    @Basic
    @Column(name = "ROLE")
    public Integer getJs() {
        return js;
    }

    public void setJs(Integer js) {
        this.js = js;
    }

    @Basic
    @Column(name = "VALID")
    public Integer getSfyx() {
        return sfyx;
    }

    public void setSfyx(Integer sfyx) {
        this.sfyx = sfyx;
    }

    @Basic
    @Column(name = "gender")
    public Integer getXb() {
        return xb;
    }

    public void setXb(Integer xb) {
        this.xb = xb;
    }

    @Basic
    @Column(name = "jobtitle")
    public String getZw() {
        return zw;
    }

    public void setZw(String zw) {
        this.zw = zw;
    }

    @Basic
    @Column(name = "idcard")
    public String getSfzh() {
        return sfzh;
    }

    public void setSfzh(String sfzh) {
        this.sfzh = sfzh;
    }

    @Basic
    @Column(name = "description")
    public String getMs() {
        return ms;
    }

    public void setMs(String ms) {
        this.ms = ms;
    }

    @Basic
    @Column(name = "photo")
    public String getZp() {
        return zp;
    }

    public void setZp(String zp) {
        this.zp = zp;
    }

    @Basic
    @Column(name = "jobtitlenum")
    public Integer getZwdjpx() {
        return zwdjpx;
    }

    public void setZwdjpx(Integer zwdjpx) {
        this.zwdjpx = zwdjpx;
    }

    @Basic
    @Column(name = "updatetime")
    public String getGxsj() {
        return gxsj;
    }

    public void setGxsj(String gxsj) {
        this.gxsj =  gxsj;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDisplay that = (UserDisplay) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(xm, that.xm) &&
                Objects.equals(zh, that.zh) &&
                Objects.equals(js, that.js) &&
                Objects.equals(xb, that.xb) &&
                Objects.equals(zw, that.zw) &&
                Objects.equals(sfzh, that.sfzh) &&
                Objects.equals(ms, that.ms)&&
                Objects.equals(zp, that.zp)&&
                Objects.equals(zwdjpx, that.zwdjpx)&&
                Objects.equals(gxsj, that.gxsj);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, xm, zh, js, sfyx, xb, zw, sfzh, ms ,zp, zwdjpx,gxsj);
    }
}
