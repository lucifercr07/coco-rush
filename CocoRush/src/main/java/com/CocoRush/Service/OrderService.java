package com.CocoRush.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CocoRush.entity.Order;
import com.CocoRush.repository.OrderRepository;
@Service
public class OrderService {

	@Autowired
	OrderRepository repositorty;
	
	
	public String createOrder(Order order) {
		// TODO Auto-generated method stub
		repositorty.save(order);
		return "created" ;
	}


	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return repositorty.findAll();
	}

}
