package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "julong", catalog = "")
public class UserEntity {
    private String id;
    private String name;
    private String password;
    private String account;
    private int role;
    private Integer valid;
    private String gender;
    private String jobtitle;
    private String idcard;
    private String birthdate;
    private String description;
    private String photo;
    private int jobtitlenum;

    public UserEntity() {
    }


    public UserEntity(String account, String password) {
        this.account = account;
        this.password = password;
    }


    public UserEntity(String account, String jobtitle, String name, String gender, String photo, String description) {
        this.account = account;
        this.jobtitle = jobtitle;
        this.name = name;
        this.gender = gender;
        this.photo = photo;
        this.description = description;
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
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "PASSWORD")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
    public int getRole() {
        return role;
    }

    public void setRole(int role) {
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
    @Column(name = "birthdate")
    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
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

    public void setPhoto(String photo) {
        this.photo = photo;
    }
    @Basic
    @Column(name = "jobtitlenum")
    public int getJobtitlenum() {
        return jobtitlenum;
    }

    public void setJobtitlenum(int jobtitlenum) {
        this.jobtitlenum = jobtitlenum;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(password, that.password) &&
                Objects.equals(account, that.account) &&
                Objects.equals(role, that.role) &&
                Objects.equals(gender, that.gender) &&
                Objects.equals(jobtitle, that.jobtitle) &&
                Objects.equals(idcard, that.idcard) &&
                Objects.equals(birthdate, that.birthdate) &&
                Objects.equals(description, that.description)&&
                Objects.equals(photo, that.photo)&&
                Objects.equals(jobtitlenum, that.jobtitlenum);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, password, account, role, valid, gender, jobtitle, idcard, birthdate, description ,photo, jobtitlenum);
    }
}
