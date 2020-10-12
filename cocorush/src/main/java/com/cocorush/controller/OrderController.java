package com.cocorush.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cocorush.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.cocorush.entity.Order;
import com.cocorush.exception.OrderNotFoundException;

@RestController
public class OrderController {
	
	private final static Logger logger = LoggerFactory.getLogger(OrderController.class);

	@Autowired
	OrderService orderService;

	@PostMapping("/order")
	public Order createOrder(@RequestBody Order order) {
		logger.info("Order is: " + order.toString());
		Order response = orderService.createOrder(order);
		return response;
	}

	@GetMapping("/order")
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}

	@GetMapping(value = "/order/{id}")
	public ResponseEntity<?> getOrder(@PathVariable String id) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Order order = orderService.findOrderById(id).orElseThrow(() -> new OrderNotFoundException());
		return ResponseEntity.ok(order);
	}

	@PutMapping(value = "/order/{id}")
	public ResponseEntity<?> updateOrder(@PathVariable String id, @RequestBody Order updatedOrder) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Order order = orderService.findOrderById(id).orElseThrow(() -> new OrderNotFoundException());
		Order response = orderService.createOrder(order);
		return ResponseEntity.ok(response);
	}
}
