package com.air.airbackend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
     @Override
     public void addCorsMappings(CorsRegistry registry) {
          registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedOrigins("127.0.0.1:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("Authorization")
                    .allowedHeaders("*")
                    .exposedHeaders("Access-Control-Allow-Origin");

     }
}
