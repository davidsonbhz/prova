package br.com.solides.blog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "postagens")
public class Postagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "usuarioid")
    private Usuario autor;
    @Column(name = "titulo")
    private String titulo;
    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String texto;
    @Column(name = "tipo")
    private String tipo;
    @Column(name = "datapostagem")
    private Date datapostagem;

    @OneToMany(mappedBy = "postid", fetch = FetchType.LAZY)
    private Set<Comentario> comentarios;

}
