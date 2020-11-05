package com.cocorush.entity;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class Order {
	@Id
	private String id;

	@NotNull
	@NotBlank(message = "First name is mandatory")
	@Size(min = 2, max = 30)
	private String firstName;

	@NotNull
	@NotBlank(message = "Last name is mandatory")
	@Size(min = 2, max = 30)
	private String lastName;

	private Address address;

	@NotNull
	private List<Product> itemList;

	private Long orderTimeStamp;

	@Size(min = 0, max = 120)
	private String comment;

	@NotNull
	@NotBlank(message = "Phonenumber is mandatory")
	@Size(min = 10, max = 10)
	private String phoneNumber;

	@NotNull
	@NotBlank(message = "Email address is mandatory")
	@Email
	private String emailAddress;
	
	private String promoCode;
	
	private String description;

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

	public List<Product> getItemList() {
		return itemList;
	}

	public void setItemList(List<Product> itemList) {
		this.itemList = itemList;
	}

	@Override
	public String toString() {
		return "Order [name=" + firstName + ", address=" + address + ", orderList=" + itemList + "]";
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

	public String getPromoCode() {
		return promoCode;
	}

	public void setPromoCode(String promoCode) {
		this.promoCode = promoCode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
