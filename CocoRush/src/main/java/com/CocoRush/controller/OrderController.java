package com.CocoRush.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CocoRush.Service.OrderService;
import com.CocoRush.entity.Order;

@RestController
public class OrderController {

	@Autowired
	OrderService service;
	
	@PostMapping("/orders/add")
	public String createOrder(@RequestBody Order order) {
		String response = service.createOrder(order);
		return "created";
	}
	@GetMapping("/orders/getAll")
	public List<Order> getAllOrders() {
		return service.getAllOrders();
	}
	
	// @GetMapping("/orders/{id}")
	
}
