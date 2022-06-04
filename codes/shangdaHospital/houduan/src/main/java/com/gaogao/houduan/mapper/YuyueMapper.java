package com.gaogao.houduan.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.gaogao.houduan.entity.Yuyue;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;

public interface YuyueMapper extends BaseMapper<Yuyue> {
    //    //一对多查询，查询该医生的预约
    Page<Yuyue> findselfPage(Page<Yuyue> page,@Param("doctorId") Integer doctorId);
    //    //一对多查询，查询该病人的预约
    ArrayList<Yuyue> findselfYuyue(@Param("patientId") Integer patientId);
//    //查询所有预约
    Page<Yuyue> findallPage(Page<Yuyue> page);
    //按患者名查询
    Page<Yuyue> findBypatientname(Page<Yuyue> page,@Param("patientName") String patientName);

}
