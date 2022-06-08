package com.gaogao.houduan;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.gaogao.houduan.entity.Doctor;
import com.gaogao.houduan.mapper.DoctorMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
public class PatientTests {
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

}
