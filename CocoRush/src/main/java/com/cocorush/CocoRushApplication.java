package com.cocorush;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;

import com.cocorush.config.MongoConfig;


@SpringBootApplication
public class CocoRushApplication {
	public static void main(String[] args) {
		SpringApplication.run(CocoRushApplication.class, args);
	}

	public void run(String... args) throws Exception {
		
	}
}