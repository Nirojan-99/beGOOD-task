package com.beGOOD.beGOOD.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Customer {

	@Id
	private String id;
	private String userName;
	private String userEmail;
	private int contactNo;
	private String password;
	private String nic;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNic() {
		return nic;
	}

	public void setNic(String nic) {
		this.nic = nic;
	}

	public Customer(String id, String userName, String userEmail, int contactNo, String password, String nic) {
		super();
		this.id = id;
		this.userName = userName;
		this.userEmail = userEmail;
		this.contactNo = contactNo;
		this.password = password;
		this.nic = nic;
	}

	public Customer() {
		super();

	}

}
