package br.com.solides.blog.repositories;

import br.com.solides.blog.model.Comentario;
import br.com.solides.blog.model.Postagem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComentariosRepository extends JpaRepository<Comentario, Long> {

    public List<Comentario> findAllByPostidOrderByDatapostagemDesc(Long postId);
}
