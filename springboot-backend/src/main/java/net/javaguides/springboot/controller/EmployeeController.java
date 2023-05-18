package net.javaguides.springboot.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
	    Employee employee = employeeRepository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
	    return ResponseEntity.ok(employee);
	}
	
//	@PostMapping("")
//	public Employee createEmployee(@RequestBody Employee employee) {
//	    return employeeRepository.save(employee);
//	}
	
	@PostMapping("")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
	    Employee createdEmployee = employeeRepository.save(employee);
	    return ResponseEntity.ok(createdEmployee);
	}
	
	
	@PatchMapping("/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employeePatched) {
		
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new NoSuchElementException("Cliente não encontrado"));
		
		employee.setFirstName(employeePatched.getFirstName());
		employee.setLastName(employeePatched.getLastName());
		employee.setEmailId(employeePatched.getEmailId());
		
		return employeeRepository.save(employee);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
		employeeRepository.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}

}
