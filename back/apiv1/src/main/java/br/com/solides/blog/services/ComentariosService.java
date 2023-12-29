package br.com.solides.blog.services;

import br.com.solides.blog.dto.ComentarioInsertDTO;
import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.model.Comentario;

import java.util.List;

public interface ComentariosService {

    Long registrarComentario(ComentarioInsertDTO dto);
    void excluirComentario(Long comentId);
    List<Comentario> obterComentarios(Long comentId);

}
