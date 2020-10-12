package com.cocorush;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cocorush.repository.OrderRepository;

@SpringBootApplication
public class CocoRushApplication {
	
	@Autowired
	OrderRepository orderRepository;

	public static void main(String[] args) {
		SpringApplication.run(CocoRushApplication.class, args);
	}

	public void run(String... args) throws Exception {
		
	}
}