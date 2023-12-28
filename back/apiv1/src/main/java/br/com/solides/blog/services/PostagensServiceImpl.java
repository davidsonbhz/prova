package br.com.solides.blog.services;

import br.com.solides.blog.dto.PostagemDTO;
import br.com.solides.blog.dto.UsuarioBlog;
import br.com.solides.blog.model.Postagem;
import br.com.solides.blog.repositories.PostagensRepository;
import br.com.solides.blog.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostagensServiceImpl extends BaseService implements PostagensService {

    @Autowired
    private PostagensRepository repository;
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Override
    public List<PostagemDTO> getPostagens() {
        var list = repository.findAllByOrderByDatapostagemDesc();
        return list.stream().map(x -> PostagemDTO.fromModel(x)).collect(Collectors.toList());
    }

    @Override
    public Long insertPostagem(String titulo, String texto) {
        var user = usuarioRepositorio.findUsuarioByEmail(getLoggedUser()).get();
        var post = Postagem.builder()
                .autor(user)
                .texto(texto)
                .titulo(titulo)
                .datapostagem(new Date())
                .build();

        post = repository.save(post);

        return post.getId();
    }


}
