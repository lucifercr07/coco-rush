package com.cocorush.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cocorush.entity.Item;
import com.cocorush.repository.ItemRepository;

@Service
public class ItemService {
	private static final String ITEMS_DATABASE_NAME = "items";

	@Autowired
	ItemRepository itemRepository;

	public Item createItem(Item item) {
		itemRepository.save(item);
		return item;
	}

	public List<Item> getItems() {
		return itemRepository.findAll();
	}

	public Optional<Item> findItemById(String id) {
		return itemRepository.findById(id);
	}
}
