package com.cocorush.entity;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "files")
public class Files {
	@Id
	private String id;
	
	private String productId;
	
	private String name;
	
	private Binary file;

	public Files(String name, String productId) {
		this.name = name;
		this.productId = productId;
	}

	public String getID() {
		return id;
	}

	public void setID(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Files [ID=" + id + ", name=" + name + ", file=" + file + ", productId=" + productId + "]";
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Binary getFile() {
		return file;
	}

	public void setFile(Binary file) {
		this.file = file;
	}
}
