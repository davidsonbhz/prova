package br.com.solides.blog.controllers;

import br.com.solides.blog.dto.PostagemInsertDTO;
import br.com.solides.blog.services.PostagensService;
import br.com.solides.blog.shared.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.function.Supplier;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class PostagensController extends BaseController {

    @Autowired
    private PostagensService postagensService;

    @GetMapping("/api/public/postagens/list")
    public ResponseEntity<ApiResponse<Object>> getListaUsuarios() {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                return postagensService.getPostagens();
            }
        });
    }

    @PostMapping("/api/private/postagens")
    public ResponseEntity<ApiResponse<Object>> inserirPostagem(@RequestBody PostagemInsertDTO dto) {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                return postagensService.insertPostagem(dto.getTitulo(), dto.getTexto());
            }
        });
    }
}
