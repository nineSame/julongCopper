package com.chiyun.julong.common;

import java.io.Serializable;

/**
 * Created by Administrator on 2016/12/7.
 */

public class ApiPageResult<T> extends ApiResult<T> {

    private int resCode = 200;
    private String resMsg = "success";
    private T data;
    private long total;

    public static ApiPageResult<Object> SUCCESS() {
        ApiPageResult<Object> result = new ApiPageResult<>();
        return result;
    }

    public static <W> ApiPageResult<W> SUCCESS(W data,long total) {
        ApiPageResult<W> result = new ApiPageResult<>();
        result.setData(data);
        result.setTotal(total);
        return result;
    }
    public static ApiPageResult<Object> FAILURE() {
        return FAILURE("fail");
    }

    public static ApiPageResult<Object> FAILURE(String msg) {
        ApiPageResult<Object> result = new ApiPageResult<>();
        result.setResCode(-1);
        result.setResMsg(msg);
        return result;
    }

    public static ApiPageResult<Object> UNKNOWN() {
        ApiPageResult<Object> result = new ApiPageResult<>();
        result.setResCode(100);
        result.setResMsg("未登录，请先登录");
        return result;
    }


    public ApiPageResult(int resCode) {
        this.resCode = resCode;
    }

    public ApiPageResult(T data) {
        this.data = data;
    }

    public ApiPageResult() {
    }

    public ApiPageResult(String resMsg) {
        this.resMsg = resMsg;
    }

 public ApiPageResult(long total) {
        this.total = total;
    }

    public ApiPageResult(String resMsg, int resCode) {
        this.resMsg = resMsg;
        this.resCode = resCode;
    }

    public int getResCode() {
        return resCode;
    }

    public void setResCode(int resCode) {
        this.resCode = resCode;
    }

    public String getResMsg() {
        return resMsg;
    }

    public void setResMsg(String resMsg) {
        this.resMsg = resMsg;
    }
    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

   public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

}
