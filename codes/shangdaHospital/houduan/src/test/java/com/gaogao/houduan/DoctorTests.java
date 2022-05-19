package com.gaogao.houduan;

import com.gaogao.houduan.entity.Doctor;
import org.junit.jupiter.api.Test;

public class DoctorTests {
    @Test
    void docloginTest() {

        Doctor doctor = new Doctor();
        doctor.setUsername("admin");
        doctor.setPassword("123");

    }
}
