package br.com.solides.usuarios;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@SpringBootTest
@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
public class TesteCadastro {

    @Test
    public void TestCadastroUsuario() {

    }

}
