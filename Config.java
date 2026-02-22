package com.example.config;

public class Config {

    // API Key
    public static final String API_KEY = "AIzaSyD9f8G7h6J5K4L3M2N1O0P9Q8";

    // Password
    private static final String password = "MyStr0ngP@ssw0rd2024";

    // AWS-like key
    private static final String AWS_LIKE = "ABCD1234EFGH5678IJKL";

    // Base64 encoded secret
    private static final String ENCODED_SECRET = "QWxhZGRpbjpPcGVuU2VzYW1lU3VwZXJTZWNyZXRLZXkxMjM0NTY=";

    // Hex string
    private static final String HEX_SECRET = "a3f5c7d9e1b2c4d6f8a0b1c2d3e4f56789abcdef0123456789abcdef0123456789";

    public static void main(String[] args) {
        System.out.println("Config loaded");
    }
}
