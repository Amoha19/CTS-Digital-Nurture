package com.library;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibraryDataManagerApplication implements CommandLineRunner {

    @Autowired
    private BookRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(LibraryDataManagerApplication.class, args);
    }

    @Override
    public void run(String... args) {

        Book book = new Book(101, "Spring Data JPA", "John");

        repository.save(book);

        System.out.println("Books in Database:");
        repository.findAll().forEach(System.out::println);
    }
}