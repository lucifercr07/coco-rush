package com.cocorush.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cocorush.entity.Order;
import com.cocorush.repository.OrderRepository;

@Service
public class OrderService {
	private static final String ORDER_DATABASE_NAME = "orders";

	@Autowired
	EmailService emailService;
	
	@Autowired
	OrderRepository orderRepository;

	public Order createOrder(Order order) {
		order.setOrderTimeStamp(System.currentTimeMillis());
		orderRepository.save(order);
		String orderId = order.getId();
		String email = order.getEmailAddress();
		String name = order.getFirstName();
		String customerEmailResponse = emailService.sendCustomerEmail(name,email, orderId);
		String adminEmailResponse = emailService.sendAdminEmail(orderId);
		return order;
	}

	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	public Optional<Order> findOrderById(String id) {
		return orderRepository.findById(id);
	}
}
