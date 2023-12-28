package br.com.solides.blog.services;

import br.com.solides.blog.dto.PostagemDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PostagensService {

    public List<PostagemDTO> getPostagens();
    public Long insertPostagem(String titulo, String texto);
    public void excluirPostagem(Long id);
}
