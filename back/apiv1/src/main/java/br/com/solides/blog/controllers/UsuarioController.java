package br.com.solides.blog.controllers;

import br.com.solides.blog.dto.UsuarioAuthRequest;
import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.services.UsuarioServiceImpl;
import br.com.solides.blog.shared.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.function.Supplier;


@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/private/usuarios")
public class UsuarioController extends BaseController {

    @Autowired
    private UsuarioServiceImpl usuarioService;



    @GetMapping("/info")
    public ResponseEntity<ApiResponse<Object>> getUsuarioInfo() {

        return createResponse(new Supplier() {
            @Override
            public Object get() {

                return "INFO xxxx";
            }
        });
    }

    @GetMapping("/hello")
    public ResponseEntity<ApiResponse<Object>> getHello() {

        return createResponse(new Supplier() {
            @Override
            public Object get() {

                return "Hello world";
            }
        });
    }
}
