package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication   {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

//	@Autowired
//	private EmployeeRepository employeeRepository;
	
//	@Override
//	public void run(String... args) throws Exception {
//		
//		Employee employee = new Employee();
//		employee.setFirstName("Anderson");
//		employee.setLastName("Viana");
//		employee.setEmailId("anderson@gmail.com");
//		employeeRepository.save(employee);
//		
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Francisco");
//		employee1.setLastName("Viana");
//		employee1.setEmailId("francisco@gmail.com");
//		employeeRepository.save(employee1);
//		
//	}

}
