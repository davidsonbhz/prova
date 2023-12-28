package br.com.solides.blog.controllers;

import br.com.solides.blog.shared.ApiResponse;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.function.Function;
import java.util.function.Supplier;

public abstract class BaseController {

    public ResponseEntity<ApiResponse<Object>> createResponse(Supplier fc) {
        var resp = new ApiResponse<Object>();
        long start = System.currentTimeMillis();
        try {
            resp.setData(fc.get());
            resp.setSuccess(true);
            resp.setRequestTime(System.currentTimeMillis() - start);
            return ResponseEntity.ok(resp);
        } catch (Exception e) {
            resp.setMessage(e.getMessage());
            resp.setSuccess(false);
            resp.setRequestTime(System.currentTimeMillis() - start);
            return ResponseEntity.badRequest().body(resp);
        }

    }

    protected String getLoggedUser() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return username;
    }

}
