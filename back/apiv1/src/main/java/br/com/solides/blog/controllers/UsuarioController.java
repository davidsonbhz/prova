package br.com.solides.blog.controllers;

import br.com.solides.blog.dto.UsuarioInsertRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/usuario")
public class UsuarioController {


    @PostMapping()
    public ResponseEntity<String> insertUsuario(UsuarioInsertRequest dto) {



        return ResponseEntity.ok("ok");
    }

}
