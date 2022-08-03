package com.beGOOD.beGOOD.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beGOOD.beGOOD.model.Customer;
import com.beGOOD.beGOOD.response.ResponseModel;
import com.beGOOD.beGOOD.service.CustomerService;
import com.beGOOD.beGOOD.status.ResponseCode;

@RestController
@RequestMapping("/users")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@PostMapping("")
	public ResponseModel registerUser(@org.springframework.web.bind.annotation.RequestBody Customer customer) {

		boolean res = customerService.addCustomerInfo(customer);

		if (res) {
			ResponseModel response = new ResponseModel(ResponseCode.OK, null, "Successfully Customer added", null);
			return response;
		} else {
			ResponseModel response = new ResponseModel(ResponseCode.ALREADY_EXIST, null, null, "Email Already Exists");
			return response;
		}

	}

	@GetMapping("")
	public ResponseModel getCustomers() {
		ResponseModel response = new ResponseModel(ResponseCode.OK, customerService.getAllCustomers(), null, null);
		return response;
	}
}
