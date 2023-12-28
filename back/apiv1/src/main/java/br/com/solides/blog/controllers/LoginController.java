package br.com.solides.blog.controllers;

import br.com.solides.blog.dto.UsuarioAuthRequest;
import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.services.AuthService;
import br.com.solides.blog.services.UsuarioService;
import br.com.solides.blog.shared.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.function.Supplier;

@CrossOrigin
@RestController()
public class LoginController extends BaseController{

    @Autowired
    private AuthService authService;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/api/public/login")
    public ResponseEntity<ApiResponse<Object>> executarAutenticacao(@RequestBody UsuarioAuthRequest dto) {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                var res = authService.authenticateUser(dto.getEmail(), dto.getSenha());
                return res;
            }
        });
    }


    @PostMapping("/api/public/register")
    public ResponseEntity<ApiResponse<Object>> insertUsuario(@RequestBody UsuarioInsertRequest dto) {

        return createResponse(new Supplier() {
            @Override
            public Object get() {

                var res = usuarioService.criarUsuario(dto);
                return res;
            }
        });
    }


}
