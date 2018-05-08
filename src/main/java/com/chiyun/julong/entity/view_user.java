package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

    @Entity
    @Table(name = "view_user", schema = "julong", catalog = "")
    public class view_user {
        private String id;
        private String name;
        private String account;
        private int role;
        private Integer valid;
        private String gender;
        private String jobtitle;
        private String idcard;
        private String birthdate;
        private String description;

        public view_user() {
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

    }

