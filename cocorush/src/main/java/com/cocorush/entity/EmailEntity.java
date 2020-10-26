package com.cocorush.entity;

import java.util.Arrays;
import java.util.Map;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class EmailEntity {
	@NotNull(message = "from email cannot be empty")
	@Email(message = "email is not valid")
	private String from;

	@NotNull(message = "from email cannot be empty")
	@Email(message = "email is not valid")
	private String[] to;
	
	@Email(message = "email is not valid")
	private String cc;
	
	@Email(message = "email is not valid")
	private String bcc;
	
	@NotNull(message = "from email cannot be empty")
	private String subject;
	
	@NotNull(message = "from email cannot be empty")
	private String message;
	private boolean isHtml;
	private boolean isTemplate;
	private boolean hasAttachment;
	private String pathToAttachment;
	private String attachmentName;
	private String templateName;
	private String templateLocation;
	private Map<String, Object> parameterMap;
	private Map<String, Object> staticResourceMap;
	private String emailedMessage;
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String[] getTo() {
		return to;
	}
	public void setTo(String[] to) {
		this.to = to;
	}
	public String getCc() {
		return cc;
	}
	public void setCc(String cc) {
		this.cc = cc;
	}
	public String getBcc() {
		return bcc;
	}
	public void setBcc(String bcc) {
		this.bcc = bcc;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isHtml() {
		return isHtml;
	}
	public void setHtml(boolean isHtml) {
		this.isHtml = isHtml;
	}
	public boolean isTemplate() {
		return isTemplate;
	}
	public void setTemplate(boolean isTemplate) {
		this.isTemplate = isTemplate;
	}
	public boolean isHasAttachment() {
		return hasAttachment;
	}
	public void setHasAttachment(boolean hasAttachment) {
		this.hasAttachment = hasAttachment;
	}
	public String getPathToAttachment() {
		return pathToAttachment;
	}
	public void setPathToAttachment(String pathToAttachment) {
		this.pathToAttachment = pathToAttachment;
	}
	public String getAttachmentName() {
		return attachmentName;
	}
	public void setAttachmentName(String attachmentName) {
		this.attachmentName = attachmentName;
	}
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	public String getTemplateLocation() {
		return templateLocation;
	}
	public void setTemplateLocation(String templateLocation) {
		this.templateLocation = templateLocation;
	}
	public Map<String, Object> getParameterMap() {
		return parameterMap;
	}
	public void setParameterMap(Map<String, Object> parameterMap) {
		this.parameterMap = parameterMap;
	}
	public Map<String, Object> getStaticResourceMap() {
		return staticResourceMap;
	}
	public void setStaticResourceMap(Map<String, Object> statiicResourceMap) {
		this.staticResourceMap = statiicResourceMap;
	}
	public String getEmailedMessage() {
		return emailedMessage;
	}
	public void setEmailedMessage(String emailedMessage) {
		this.emailedMessage = emailedMessage;
	}
	@Override
	public String toString() {
		return "Email [from=" + from + ", to=" + Arrays.toString(to) + ", cc=" + cc + ", bcc=" + bcc + ", subject="
				+ subject + ", message=" + message + ", isHtml=" + isHtml + ", isTemplate=" + isTemplate
				+ ", hasAttachment=" + hasAttachment + ", pathToAttachment=" + pathToAttachment + ", attachmentName="
				+ attachmentName + ", templateName=" + templateName + ", templateLocation=" + templateLocation
				+ ", parameterMap=" + parameterMap + ", staticResourceMap=" + staticResourceMap + ", emailedMessage="
				+ emailedMessage + "]";
	}
	
	
	
}
