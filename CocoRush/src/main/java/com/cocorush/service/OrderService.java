package com.cocorush.service;

import java.util.List;


import com.cocorush.entity.Order;

public interface OrderService {
    public Order create(Order Order);
    
    public void update(Order Order);
 
    public void delete(Order Order);
 
    public void deleteAll();
 
    public Order find(Order Order);
 
    public List < Order > findAll();
}
