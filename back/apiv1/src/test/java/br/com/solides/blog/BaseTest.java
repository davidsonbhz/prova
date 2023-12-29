package br.com.solides.blog;

import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.model.Usuario;
import br.com.solides.blog.repositories.UsuarioRepositorio;
import com.github.javafaker.Faker;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
@NoArgsConstructor
public abstract class BaseTest {

    @Autowired
    protected UsuarioRepositorio usuarioRepositorio;
    protected Faker faker = new Faker();

    public Usuario criarUsuarioParaTeste() {
        var usuario = Usuario.builder()
                .nome(faker.name().fullName())
                .email(faker.internet().emailAddress())
                .password("123")
                .build();

        usuarioRepositorio.save(usuario);
        return usuario;
    }

    public Usuario criarUsuarioAutenticadoParaTeste() {
        var usuario = Usuario.builder()
                .nome(faker.name().fullName())
                .email(faker.internet().emailAddress())
                .password("123")
                .build();

        usuarioRepositorio.save(usuario);



        return usuario;
    }


}
