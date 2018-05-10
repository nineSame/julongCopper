package com.chiyun.julong.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "photo", schema = "julong", catalog = "")
public class photoEntity {
    private String id;
    private String title;
    private String src;
    private String description;
    private String place;

    public photoEntity() {
    }

    public photoEntity(String title, String src, String description, String place) {
        this.title = title;
        this.src = src;
        this.description = description;
        this.place = place;
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
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "src")
    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
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
    @Column(name = "place")
    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        photoEntity that = (photoEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(title, that.title) &&
                Objects.equals(src, that.src) &&
                Objects.equals(description, that.description)&&
                Objects.equals(place, that.place);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, title, src, description ,place);
    }
}

