package com.cocorush.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class Order {
	@Id
	private String id;
	private String firstName;
	private String lastName;
	private Address address;
	private List<Item> itemList;
	private Long orderTimeStamp;
	private String comment;
	private String phoneNumber;
	private String emailAddress;

	public String getId() {
		return id;
	}

	public void setID(String id) {
		this.id = id;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Item> getItemList() {
		return itemList;
	}

	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}

	@Override
	public String toString() {
		return "Order [ID=" + id + ", name=" + firstName + ", address=" + address + ", orderList=" + itemList + "]";
	}

	public Long getOrderTimeStamp() {
		return orderTimeStamp;
	}

	public void setOrderTimeStamp(Long orderTimeStamp) {
		this.orderTimeStamp = orderTimeStamp;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
