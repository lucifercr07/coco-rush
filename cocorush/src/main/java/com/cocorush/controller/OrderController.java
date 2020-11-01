package com.cocorush.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
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

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/order")
	public Order createOrder(@Valid @RequestBody Order order) {
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
	public ResponseEntity<?> updateOrder(@PathVariable String id, @Valid @RequestBody Order updatedOrder) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Order order = orderService.findOrderById(id).orElseThrow(() -> new OrderNotFoundException());
		Order response = orderService.createOrder(order);
		return ResponseEntity.ok(response);
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
