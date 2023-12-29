package br.com.solides.blog.controllers;

import br.com.solides.blog.dto.ComentarioInsertDTO;
import br.com.solides.blog.dto.PostagemInsertDTO;
import br.com.solides.blog.services.ComentariosService;
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
public class ComentariosController extends BaseController {

    @Autowired
    private ComentariosService service;

    @GetMapping("/api/private/comentarios/list/{postId}")
    public ResponseEntity<ApiResponse<Object>> getListaUsuarios(@PathVariable Long postId) {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                return service.obterComentarios(postId);
            }
        });
    }

    @PostMapping("/api/private/comentarios")
    public ResponseEntity<ApiResponse<Object>> inserirComentario(@RequestBody ComentarioInsertDTO dto) {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                return service.registrarComentario(dto);
            }
        });
    }

    @DeleteMapping("/api/private/comentarios/{id}")
    public ResponseEntity<ApiResponse<Object>> excluirPostagem(@PathVariable Long id) {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                service.excluirComentario(id);
                return "";
            }
        });
    }
}
