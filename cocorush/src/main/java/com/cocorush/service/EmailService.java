package com.cocorush.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.cocorush.DTO.EmailDto;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	
//	public String sendEmail() {
//		SimpleMailMessage msg = new SimpleMailMessage();
//		msg.setTo("nishant.kumarpat1996@gmail.com","prashant1996cr07@gmail.com","naskara97@gmail.com");
//		msg.setSubject("testing Email Service");
//		msg.setText("Hi There \n This Email is sent from Spring boot confirming your order\n Thanks and Regards, \n Entrega ");
//		javaMailSender.send(msg);
//		return "Email Sent";
//		// TODO Auto-generated method stub
//		
//	}
//	public String sendEmails(String name,String email, String orderId) {
//		return "send";
//		
//	}
	public String sendCustomerEmail(String name,String email, String orderId) {
		SimpleMailMessage msg =new SimpleMailMessage();
		msg.setTo(email);
		msg.setSubject("order details");
		String text = String.format("Hi %s \n your order with id : %s has been received \n regards, \n Entrega",name,orderId );
		msg.setText(text);
		javaMailSender.send(msg);
		return "sent";
		// TODO Auto-generated method stub
		
	}
	public String sendAdminEmail(String orderId) {
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo("nishant.kumarpat1996@gmail.com","prashant1996cr07@gmail.com","naskara97@gmail.com");
		msg.setSubject("New Order !!");
		String text=String.format("Hi \n you have a new order with id : %s \n Regards, \n Entrega", orderId);
		msg.setText(text);
		javaMailSender.send(msg);
		return "sent";
		// TODO Auto-generated method stub
		
	}
}
