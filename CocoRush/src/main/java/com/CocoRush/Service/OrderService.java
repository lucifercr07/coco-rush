package com.cocorush.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cocorush.entity.Order;
import com.cocorush.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository repository;
	
	
	public String createOrder(Order order) {
		// TODO Auto-generated method stub
		repository.save(order);
		return "created" ;
	}


	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

}
