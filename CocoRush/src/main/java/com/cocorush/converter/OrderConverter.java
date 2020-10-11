package com.cocorush.converter;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.cocorush.entity.Order;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

public class OrderConverter implements Converter<Order, DBObject> {
	final DBObject dbObject = new BasicDBObject();

	@Override
    public DBObject convert(final Order order) {
        final DBObject dbObject = new BasicDBObject();
        dbObject.put("name", order.getName());
        dbObject.put("address", order.getAddress());
        dbObject.removeField("_class");
        return dbObject;
    }
}
