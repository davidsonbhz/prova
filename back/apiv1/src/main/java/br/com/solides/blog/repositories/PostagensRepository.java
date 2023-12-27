package br.com.solides.blog.repositories;

import br.com.solides.blog.model.Postagem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostagensRepository extends JpaRepository<Postagem, Long> {

    public List<Postagem> findAllByOrderByDataPostagemDesc();


}
