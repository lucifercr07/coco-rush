package com.cocorush.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cocorush.entity.Order;
import com.cocorush.service.OrderServiceImpl;

@RestController
public class OrderController {

	private static final Logger logger = LoggerFactory.getLogger(OrderController.class);

	@Autowired
	OrderServiceImpl service;
	
	@PostMapping("/orders")
	public String createOrder(Order order) {
		logger.info("Creating order");
		Order response = service.create(order);
		return "created";
	}

	@GetMapping("/orders")
	public List<Order> getAllOrders() {
		return null;
	}
	
}
