package com.example.bankapplication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // This method intercepts any RuntimeException thrown by our Service/Controller layer
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException ex) {

        // 1. Create our clean error response object
        ErrorResponse errorDetails = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),       // Status Code: 400
                "Bad Request / Transaction Failed",  // Generic Error Type
                ex.getMessage()                      // The actual message from your code
        );

        // 2. Return it as a neat JSON response
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }
}