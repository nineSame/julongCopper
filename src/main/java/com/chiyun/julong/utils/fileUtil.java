package com.chiyun.julong.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class fileUtil {
    public static String fileUpload(MultipartFile file,String name) {

        SimpleDateFormat f = new SimpleDateFormat("yyyyMMddHHmmss");
        // 获取文件名
        String fileName = file.getOriginalFilename();
        System.out.print("上传的文件名为：" + fileName);
        // 获取文件的后缀名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        System.out.print("上传的后缀名为：" + suffixName);
        //获取除后缀名的文件名
        String beforeName = fileName.substring(0,fileName.lastIndexOf("."));
        //拼接文件名
        String fileName1=beforeName+f.format(new Date())+suffixName;
        System.out.print("拼接之后的名字：" + fileName1);
        // 文件上传后的路径
        String filePath = "C:\\upload\\"+name+"\\";
        System.out.print("上传的地址为：" + filePath);
        // 解决中文问题，liunx下中文路径，图片显示问题
        // fileName = UUID.randomUUID() + suffixName;
        File dest = new File(filePath + fileName1);
        // 检测是否存在目录
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest);
            return "/files/"+name+"/"+fileName1;
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static int fileDel(String name){
        int result=0;
        try {
            // Specify the file name and path
            File file = new File("C:\\upload\\"+name);
      /* the delete() method return true if the file
      deleted successfully else it return false
       */
            if (file.delete()) {
                result=1;
            } else {
                result=0;
            }
        } catch (Exception e) {
            result=3;
            System.out.println("Exception occured");
            e.printStackTrace();
        }
        return result;
    }

}
