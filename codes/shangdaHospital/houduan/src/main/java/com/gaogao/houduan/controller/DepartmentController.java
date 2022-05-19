package com.gaogao.houduan.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.gaogao.houduan.common.Result;
import com.gaogao.houduan.entity.Department;
import com.gaogao.houduan.mapper.DepartmentMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;

@RestController
@RequestMapping("/department")
public class DepartmentController {

    @Resource
    DepartmentMapper departmentMapper;

    /*@PostMapping("/login")
    public Result<?> login(@RequestBody Department department) {
        Department res = departmentMapper.selectOne(Wrappers.<Department>lambdaQuery().eq(Department::getUsername, department.getUsername()).eq(Department::getPassword, department.getPassword()));
        if (res==null){
            return Result.error("-1","用户名或密码错误");
        }
        return Result.success(res);
    }*/

//新增科室
//    @PutMapping
//    public Result<?> update(@RequestBody Department department) {
//        departmentMapper.updateById(department);
//        return Result.success();
//    }
    //删除科室
//    @DeleteMapping("/delete/{id}")
//    public Result<?> delete(@PathVariable Long id) {
//        departmentMapper.deleteById(id);
//        return Result.success();
//    }

    @GetMapping("/loadall")
    public Result<?> loadAll(@RequestParam(defaultValue = "1") Integer pageNum,
                             @RequestParam(defaultValue = "10") Integer pageSize)
    {
        LambdaQueryWrapper<Department> wrapper=Wrappers.<Department>lambdaQuery();
        Page<Department> departmentPage = departmentMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(departmentPage);
    }

    //获取科室列表
    @GetMapping("/getdpt")
    public Result<?> getDepartment()
    {
        LambdaQueryWrapper<Department> wrapper=Wrappers.<Department>lambdaQuery();
        Page<Department> departmentPage = departmentMapper.selectPage(new Page<>(1, 20), wrapper);
        return Result.success(departmentPage);
    }


}
