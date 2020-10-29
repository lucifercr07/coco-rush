package com.cocorush.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
	private JavaMailSender javaMailSender;

	public String sendCustomerEmail(String name, String email, String orderId) {
		SimpleMailMessage msg =new SimpleMailMessage();
		msg.setTo(email);
		msg.setSubject("Cococrush Order Details");
		String text = String.format("Hi %s \n your order with id : %s has been received \n Regards, \n Entrega", name, orderId);
		msg.setText(text);
		javaMailSender.send(msg);
		return "Sent";
	}

	public String sendAdminEmail(String orderId) {
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo("nishant.kumarpat1996@gmail.com","prashant1996cr07@gmail.com","naskara97@gmail.com");
		msg.setSubject("New Order !!");
		String text=String.format("Hi \n you have a new order with id : %s \n Regards, \n Entrega", orderId);
		msg.setText(text);
		javaMailSender.send(msg);
		return "Sent";
	}
}
