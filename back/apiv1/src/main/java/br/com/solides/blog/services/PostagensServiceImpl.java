package br.com.solides.blog.services;

import br.com.solides.blog.dto.PostagemDTO;
import br.com.solides.blog.dto.UsuarioBlog;
import br.com.solides.blog.exceptions.DeleteRecordException;
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
        var result = list.stream().map(x -> PostagemDTO.fromModel(x)).collect(Collectors.toList());
        var currentuser = getLoggedUser();
        result.forEach(r -> {
            r.setPodeExcluir(r.getAutoremail().equals(currentuser));
        });
        return result;
    }

    @Override
    public Long insertPostagem(String titulo, String texto, String tipo) {
        var user = usuarioRepositorio.findUsuarioByEmail(getLoggedUser()).get();
        var post = Postagem.builder()
                .autor(user)
                .texto(texto)
                .tipo(tipo)
                .titulo(titulo)
                .datapostagem(new Date())
                .build();

        post = repository.save(post);

        return post.getId();
    }

    @Override
    public void excluirPostagem(Long id) {
        var post = this.repository.findById(id);
        if(post.isPresent() && post.get().getAutor().getEmail().equals(getLoggedUser())) {
            this.repository.deleteById(id);
        } else {
            throw new DeleteRecordException();
        }
    }


}
