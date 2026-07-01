package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {

		System.out.println("Application Started");

		SpringApplication.run(SpringLearnApplication.class, args);
		displayCountry();
		System.out.println("Application Running Successfully");
	}

		public static void displayCountry() {

			ApplicationContext context =
					new ClassPathXmlApplicationContext("country.xml");

			Country country = context.getBean("country", Country.class);

			System.out.println(country);
		}
}