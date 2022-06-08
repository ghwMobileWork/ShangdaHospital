package com.gaogao.houduan.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.gaogao.houduan.entity.Patient;
import org.apache.ibatis.annotations.Param;


public interface PatientMapper extends BaseMapper<Patient> {

    int changepassword(@Param("id") Integer Id,@Param("newpwd") String newpwd );
}
