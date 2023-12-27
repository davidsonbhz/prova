package br.com.solides.blog.repositories;

import br.com.solides.blog.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {

    public Optional<Usuario> findUsuarioByEmail(String email);
    public long countUsuarioByEmail(String email);

}
