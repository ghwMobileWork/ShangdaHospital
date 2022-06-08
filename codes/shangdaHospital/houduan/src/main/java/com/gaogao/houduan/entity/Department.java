package com.gaogao.houduan.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@TableName("department")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Department {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    private String department;


}
