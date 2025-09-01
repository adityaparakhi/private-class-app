package com.classwebsite.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;
import java.sql.Connection;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    // Check DB connection at startup
    @Bean
    public CommandLineRunner checkDatabaseConnection(DataSource dataSource) {
        return args -> {
            try (Connection connection = dataSource.getConnection()) {
                if (connection.isValid(2)) {
                    System.out.println("✅ Database connected successfully!");
                } else {
                    System.out.println("❌ Database connection failed!");
                }
            } catch (Exception e) {
                System.out.println("❌ Error while connecting to database: " + e.getMessage());
            }
        };
    }
}
