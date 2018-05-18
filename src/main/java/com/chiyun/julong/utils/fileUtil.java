package com.chiyun.julong.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class fileUtil {
    public static String fileUpload(MultipartFile file,String name) {
        // 获取文件名
        String fileName = file.getOriginalFilename();
        System.out.print("上传的文件名为：" + fileName);
        // 获取文件的后缀名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        System.out.print("上传的后缀名为：" + suffixName);
        // 文件上传后的路径
        String filePath = "D:\\upload\\"+name+"\\";
        System.out.print("上传的地址为：" + filePath);
        // 解决中文问题，liunx下中文路径，图片显示问题
        // fileName = UUID.randomUUID() + suffixName;
        File dest = new File(filePath + fileName);
        // 检测是否存在目录
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest);
            return fileName;
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static int fileDel(String fileName,String name){
        String path="D:\\upload\\"+name+"\\";
        int result=0;
        try {
            // Specify the file name and path
            File file = new File(path+fileName);
      /* the delete() method return true if the file
      deleted successfully else it return false
       */
            if (file.delete()) {
                System.out.println(file.getName() + "is deleted");
                result=1;
            } else {
                System.out.println("Delete failed.");
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
