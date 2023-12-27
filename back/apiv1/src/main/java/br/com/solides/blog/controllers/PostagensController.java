package br.com.solides.blog.controllers;

import br.com.solides.blog.services.PostagensService;
import br.com.solides.blog.shared.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.function.Supplier;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class PostagensController extends BaseController {

    @Autowired
    private PostagensService postagensService;

    @GetMapping("list")
    public ResponseEntity<ApiResponse<Object>> getListaUsuarios() {

        return createResponse(new Supplier() {
            @Override
            public Object get() {
                return postagensService.();
            }
        });
    }

}
