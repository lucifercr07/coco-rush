package com.MongoImage.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Order")
public class Order {
	@Id
	private String ID;
	
	private String name;
	private Address address;
	private List<OrderList> orderList;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public List<OrderList> getOrderList() {
		return orderList;
	}
	public void setOrderList(List<OrderList> orderList) {
		this.orderList = orderList;
	}
	@Override
	public String toString() {
		return "Order [ID=" + ID + ", name=" + name + ", address=" + address + ", orderList=" + orderList + "]";
	}
	

}
