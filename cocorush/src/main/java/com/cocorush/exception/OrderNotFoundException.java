package com.cocorush.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Order Not found")
public class OrderNotFoundException extends RuntimeException {

}
