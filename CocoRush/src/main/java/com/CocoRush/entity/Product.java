package com.CocoRush.entity;

import java.util.List;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Product")
public class Product {

	
	@Id
	private String ProductId;
	private String name;
	private List<String> categoryName;
	private boolean featured;
	private int price;
	private String description;
	private int quantity;
	private List<Binary> image;
	public String getProductId() {
		return ProductId;
	}
	public void setProductId(String productId) {
		ProductId = productId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public List<String> getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(List<String> categoryName) {
		this.categoryName = categoryName;
	}
	public Boolean getFeatured() {
		return featured;
	}
	public void setFeatured(boolean featured) {
		this.featured = featured;
	}
	public List<Binary> getImage() {
		return image;
	}
	public void setImage(List<Binary> image) {
		this.image = image;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ProductId == null) ? 0 : ProductId.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		if (ProductId == null) {
			if (other.ProductId != null)
				return false;
		} else if (!ProductId.equals(other.ProductId))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Product [ProductId=" + ProductId + ", name=" + name + ", categoryName=" + categoryName + ", featured="
				+ featured + ", price=" + price + ", description=" + description + ", quantity=" + quantity + ", image="
				+ image + "]";
	}
	
	

}
	
	
	




