package br.com.solides.blog;


import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.services.UsuarioService;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@SpringBootTest
@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
public class TesteCadastro {

    private Faker faker = new Faker();

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UserDetailsService detailsService;

    @Test
    public void TestCadastroUsuario() {

        var dto = UsuarioInsertRequest.builder()
                .nome(faker.name().fullName())
                .senha("123")
                .email(faker.internet().emailAddress())
                .build();

        var result = usuarioService.criarUsuario(dto);

        Assertions.assertTrue(result > 0, "O usuario precisa receber um id");

    }

    @Test
    public void TestLogin() {

        var dto = UsuarioInsertRequest.builder()
                .nome(faker.name().fullName())
                .senha("123")
                .email(faker.internet().emailAddress())
                .build();
        usuarioService.criarUsuario(dto);

        var result = detailsService.loadUserByUsername(dto.email);

        Assertions.assertTrue(result.getUsername().equals(dto.email), "É preciso poder recuperar o usuario cadastrado pelo email");

    }




}
