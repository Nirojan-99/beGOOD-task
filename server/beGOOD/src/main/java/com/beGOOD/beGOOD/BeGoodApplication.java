package com.beGOOD.beGOOD;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
public class BeGoodApplication {

//	@CrossOrigin(origins = "http://localhost:3000")
	public static void main(String[] args) {
		SpringApplication.run(BeGoodApplication.class, args);
	}

}
