package kafka_producer.utility;

import java.util.HashMap;
import java.util.List;

public class responseCreator {
	public static String response(String msg, List<Object> data, HashMap<String, Object> validate, int code) {
		MyObject o = new MyObject();
		o.setMessage(msg);
		o.setData(data);
		o.setValidate(validate);
		o.setCode(code);
		return ObjToJSON.Obj2JSON(o);

	}

	public static String response2(String msg, Object data, HashMap<String, String> validate, int code) {
		singleObject o1 = new singleObject();
		o1.setMessage(msg);
		o1.setData(data);
		o1.setValidate(validate);
		o1.setCode(code);
		// System.out.println("Obj : " + ObjToJSON.Obj2JSON(o1));
		return ObjToJSON.Obj2JSON(o1);

	}

	public static String response3(String msg, List<HashMap<String, Object>> hash_map, HashMap<String, Object> validate,
			int code) {
		HashObj o = new HashObj();
		o.setMessage(msg);
		o.setData(hash_map);
		o.setValidate(validate);
		o.setCode(code);
		return ObjToJSON.Obj2JSON(o);
	}
}
