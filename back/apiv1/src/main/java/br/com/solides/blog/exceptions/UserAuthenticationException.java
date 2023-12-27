package br.com.solides.blog.exceptions;

public class UserAuthenticationException extends RuntimeException {

    public UserAuthenticationException() {
        super("AUTHENTICATION_PROBLEM");
    }

}
