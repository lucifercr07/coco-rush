package com.cocorush.entity;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
	@Id
	private String id;
	
	@NotNull
	@NotBlank(message = "Product name is mandatory")
	private String name;
	
	private List<String> categoryName;
	
	@NotNull
	private int unitPrice;
	private int inventoryQuantity;
	private double discount;
	private String dimension;
	private List<String> productImageIds;
	private boolean featured;
	
	public String getId() {
		return id;
	}

	public void setID(String id) {
		this.id = id;
	}

	public int getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(List<String> categoryName) {
		this.categoryName = categoryName;
	}

	public String getDimension() {
		return dimension;
	}

	public void setDimension(String dimension) {
		this.dimension = dimension;
	}

	public int getInventoryQuantity() {
		return inventoryQuantity;
	}

	public void setInventoryQuantity(int inventoryQuantity) {
		this.inventoryQuantity = inventoryQuantity;
	}

	public List<String> getProductImageIds() {
		return productImageIds;
	}

	public void setProductImageIds(List<String> productImageIds) {
		this.productImageIds = productImageIds;
	}

	public boolean getFeatured() {
		return featured;
	}

	public void setFeatured(boolean featured) {
		this.featured = featured;
	}
	
	@Override
	public String toString() {
		return "Product [name=" + name + ", isFeatured=" + featured + ", unitPrice=" + unitPrice + "]";
	}
}
