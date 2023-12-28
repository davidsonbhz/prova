package br.com.solides.blog.services;

import org.springframework.security.core.context.SecurityContextHolder;

public abstract class BaseService {

    protected String getLoggedUser() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return username;
    }
}
