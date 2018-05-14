package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "julong")
public class UserEntity {
    private String id;
    private String xm;//姓名
    private String mm;//密码
    private String zh;//账号
    private int js;//角色
    private int sfyx;//是否有效
    private int xb;//性别
    private String zw;//职务
    private String sfzh;//身份证号
    private String ms;//描述
    private String zp;//照片路径
    private int zwdjpx;//职务登记排序
    private Date gxsj;//更新时间


    public UserEntity(String zh, String mm) {
        this.zh = zh;
        this.mm = mm;
    }

    public UserEntity(String zh, String xm, String zm, int xb, String zp, String ms, String mm, int js, int sfyx, String sfzh, int zwdjpx) {
        this.zh = zh;
        this.zw = zw;
        this.xm = xm;
        this.xb = xb;
        this.zp = zp;
        this.ms = ms;
        this.mm = mm;
        this.js = js;
        this.sfyx = sfyx;
        this.sfzh = sfzh;
        this.zwdjpx = zwdjpx;
    }

    public UserEntity() {
    }

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
    @Column(name = "NAME")
    public String getXm() {
        return xm;
    }

    public void setXm(String xm) {
        this.xm = xm;
    }

    @Basic
    @Column(name = "PASSWORD")
    public String getMm() {
        return mm;
    }

    public void setMm(String mm) {
        this.mm = mm;
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
    public int getJs() {
        return js;
    }

    public void setJs(int js) {
        this.js = js;
    }

    @Basic
    @Column(name = "VALID")
    public int getSfyx() {
        return sfyx;
    }

    public void setSfyx(int sfyx) {
        this.sfyx = sfyx;
    }

    @Basic
    @Column(name = "gender")
    public int getXb() {
        return xb;
    }

    public void setXb(int xb) {
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
    public int getZwdjpx() {
        return zwdjpx;
    }

    public void setZwdjpx(int zwdjpx) {
        this.zwdjpx = zwdjpx;
    }

    @Basic
    @Column(name = "updatetime")
    public Date getGxsj() {
        return gxsj;
    }

    public void setGxsj(Date gxsj) {
        this.gxsj =  gxsj;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(xm, that.xm) &&
                Objects.equals(mm, that.mm) &&
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

        return Objects.hash(id, xm, mm, zh, js, sfyx, xb, zw, sfzh, ms ,zp, zwdjpx,gxsj);
    }
}
