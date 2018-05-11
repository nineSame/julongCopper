package com.chiyun.julong.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "user_display", schema = "julong", catalog = "")
public class UserDisplay {
    private String name;
    private String account;
    private Integer role;
    private Integer valid;
    private String gender;
    private String jobtitle;
    private String idcard;
    private String description;
    private String photo;
    private Integer jobtitlenum;
    private String id;
    private String updatetime;

    @Basic
    @Column(name = "NAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "ACCOUNT")
    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    @Basic
    @Column(name = "ROLE")
    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    @Basic
    @Column(name = "VALID")
    public Integer getValid() {
        return valid;
    }

    public void setValid(Integer valid) {
        this.valid = valid;
    }

    @Basic
    @Column(name = "gender")
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Basic
    @Column(name = "jobtitle")
    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    @Basic
    @Column(name = "idcard")
    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String phone) {
        this.photo = photo;
    }

    @Basic
    @Column(name = "jobtitlenum")
    public Integer getJobtitlenum() {
        return jobtitlenum;
    }

    public void setJobtitlenum(Integer jobtitlenum) {
        this.jobtitlenum = jobtitlenum;
    }

    @Id
    @Column(name = "ID")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "updatetime")
    public String getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(String updatetime) {
        this.updatetime =  updatetime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDisplay that = (UserDisplay) o;
        return Objects.equals(name, that.name) &&
                Objects.equals(account, that.account) &&
                Objects.equals(role, that.role) &&
                Objects.equals(valid, that.valid) &&
                Objects.equals(gender, that.gender) &&
                Objects.equals(jobtitle, that.jobtitle) &&
                Objects.equals(idcard, that.idcard) &&
                Objects.equals(description, that.description) &&
                Objects.equals(photo, that.photo) &&
                Objects.equals(jobtitlenum, that.jobtitlenum) &&
                Objects.equals(id, that.id)&&
                Objects.equals(updatetime, that.updatetime);
    }

    @Override
    public int hashCode() {

        return Objects.hash(name, account, role, valid, gender, jobtitle, idcard, description, photo, jobtitlenum, id,updatetime);
    }
}
