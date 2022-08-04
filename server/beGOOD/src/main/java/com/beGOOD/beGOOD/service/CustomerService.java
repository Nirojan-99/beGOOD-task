package com.beGOOD.beGOOD.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.beGOOD.beGOOD.model.Customer;
import com.beGOOD.beGOOD.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	public boolean addCustomerInfo(Customer customer) {

		Customer existingCustomer = customerRepository.findByUserEmail(customer.getUserEmail());

		if (existingCustomer != null) {
			return false;
		} else {
			customerRepository.save(customer);
			return true;
		}

	}

	public String login(String email, String password) {
		Customer customer = customerRepository.findByUserEmail(email);
		
		if (customer != null) {
			if (customer.getPassword().equals(password)) {
				return customer.getId();
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	public Customer findCustomer(String id) {
		Customer customer = customerRepository.findById(id);
		return customer;
	}

	public boolean deleteCustomer(String id) {
		Customer customer = customerRepository.findById(id);
		if (customer != null) {
			customerRepository.delete(customer);
			return true;
		} else {
			return false;
		}
	}

	public boolean updateCustomer(Customer customer) {
		Customer existingCustomer = customerRepository.findById(customer.getId());

		if (existingCustomer != null) {
			customerRepository.save(customer);
			return true;
		} else {
			return false;
		}
	}

}
