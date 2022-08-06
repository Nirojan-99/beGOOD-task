package com.beGOOD.beGOOD.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beGOOD.beGOOD.model.Customer;
import com.beGOOD.beGOOD.response.ResponseModel;
import com.beGOOD.beGOOD.service.CustomerService;
import com.beGOOD.beGOOD.status.ResponseCode;

@CrossOrigin(origins = "http://localhost:3000")
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

	@PostMapping("/auth")
	public String login(@RequestBody Customer customer) {

		String res = customerService.login(customer.getUserEmail(), customer.getPassword());

		if (res != null) {
			return res;
		} else {
			return null;
		}

	}

	@PutMapping("")
	public ResponseModel updateUser(@RequestBody Customer customer) {
		boolean res = customerService.updateCustomer(customer);
		if (res) {
			return new ResponseModel(ResponseCode.OK, null, "Customer details updated", null);
		} else {
			return new ResponseModel(ResponseCode.NOT_FOUND, null, null, "Unable to update Customer details");
		}
	}

	@DeleteMapping("")
	public ResponseModel deleteUser(@RequestBody String id) {
		boolean res = customerService.deleteCustomer(id);
		if (res) {
			return new ResponseModel(ResponseCode.OK, null, "Customer deleted", null);
		} else {
			return new ResponseModel(ResponseCode.NO_CONTENT, null, null, "Unable to delete customer");
		}
	}

}
