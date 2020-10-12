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

import com.cocorush.service.ItemService;
import com.cocorush.entity.Item;
import com.cocorush.exception.OrderNotFoundException;

@RestController
public class ItemController {

	@Autowired
	ItemService itemService;

	@PostMapping("/item")
	public Item createItem(@RequestBody Item item) {
		Item response = itemService.createItem(item);
		return response;
	}

	@GetMapping("/item")
	public List<Item> getItems() {
		return itemService.getItems();
	}

	@GetMapping(value = "/item/{id}")
	public ResponseEntity<?> getItem(@PathVariable String id) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Item item = itemService.findItemById(id).orElseThrow(() -> new OrderNotFoundException());
		return ResponseEntity.ok(item);
	}

	@PutMapping(value = "item/{id}")
	public ResponseEntity<?> updateOrder(@PathVariable String id, @RequestBody Item updatedItem) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Item item = itemService.findItemById(id).orElseThrow(() -> new OrderNotFoundException());
		Item response = itemService.createItem(updatedItem);
		return ResponseEntity.ok(response);
	}
}
