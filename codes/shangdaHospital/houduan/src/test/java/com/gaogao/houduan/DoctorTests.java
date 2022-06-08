package com.gaogao.houduan;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.gaogao.houduan.common.Result;
import com.gaogao.houduan.entity.Doctor;
import com.gaogao.houduan.mapper.DoctorMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
@SpringBootTest
public class DoctorTests {
    @Resource
    DoctorMapper doctorMapper;


    @Test
    public void loginTest() {
        Doctor doctor1=new Doctor();
        doctor1.setUsername("lihua");
        doctor1.setPassword("123");

        Doctor res = doctorMapper.selectOne(Wrappers.<Doctor>lambdaQuery().eq(Doctor::getUsername, doctor1.getUsername()).eq(Doctor::getPassword, doctor1.getPassword()));
        if (res==null){
            System.out.println("用户名或密码错误");
        }
        System.out.println(res);
    }
    @Test
    public void loadAllTest()
    {
        LambdaQueryWrapper<Doctor> wrapper=Wrappers.<Doctor>lambdaQuery();
        Page<Doctor> doctorPage = doctorMapper.selectPage(new Page<>(1, 10), wrapper);
        System.out.println(doctorPage);
    }



}
