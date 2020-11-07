package com.cocorush.entity;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "promocodes")
public class PromoCode {
	@Id
	private String id;

	@NotNull
	@NotBlank(message = "Promo code value is mandatory")
	private String code;

	@NotNull
	private double discountPercent;
	private int usageCount;
	private String description;
	@NotNull
	private int totalUsageAllowance;

	public int getUsageCount() {
		return usageCount;
	}

	public void setUsageCount(int usageCount) {
		this.usageCount = usageCount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getTotalUsageAllowance() {
		return totalUsageAllowance;
	}

	public void setTotalUsageAllowance(int totalUsageAllowance) {
		this.totalUsageAllowance = totalUsageAllowance;
	}
	
	public String getCode() {
		return code;
	}
	
	public void setCode(String code) {
		this.code = code;
	}
	
	@Override
	public String toString() {
		return "PromoCode [name=" + code + ", description=" + description + ", discountPercent=" + discountPercent + "]";
	}
}
