package com.MongoImage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MongoImage.Service.OrderService;
import com.MongoImage.entity.Order;

@RestController
public class OrderController {

	@Autowired
	OrderService service;
	
	@PostMapping("/orders/add")
	public String createOrder(Order order) {
		String response = service.createOrder(order);
		return "created";
	}
	@GetMapping("/orders/getAll")
	public List<Order> getAllOrders() {
		return service.getAllOrders();
	}
	
}
