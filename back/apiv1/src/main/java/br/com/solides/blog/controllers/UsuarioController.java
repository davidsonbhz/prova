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

    @GetMapping("list")
    public ResponseEntity<ApiResponse<Object>> getListaUsuarios() {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                return usuarioService.getListaUsuarios();
            }
        });
    }


}
