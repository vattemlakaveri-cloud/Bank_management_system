package com.example.bankapplication.exception;

import java.time.LocalDateTime;

public class ErrorResponse {
    private LocalDateTime timestamp;
    private int statusCode;
    private String error;
    private String message;

    // Constructor
    public ErrorResponse(int statusCode, String error, String message) {
        this.timestamp = LocalDateTime.now();
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
    }

    // Getters (Spring needs these to convert the object into JSON)
    public LocalDateTime getTimestamp() { return timestamp; }
    public int getStatusCode() { return statusCode; }
    public String getError() { return error; }
    public String getMessage() { return message; }
}