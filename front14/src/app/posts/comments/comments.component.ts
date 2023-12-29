import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../model/Post';
import { CommentsService } from '../../services/comments.service';
import { Comentario } from '../../model/Comentario';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  providers: [ConfirmationService, MessageService]
})
export class CommentsComponent implements OnInit {

  @Input() currentPost: Post | null = null;
  @Output() onFechar: EventEmitter<string> = new EventEmitter<string>();

  comentario: string = '';
  comentarios: Comentario[] = [];
  visible = false;

  constructor(private service: CommentsService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  async ngOnInit() {
    this.carregarComentarios();
    this.visible = true;
  }

  async carregarComentarios() {
    this.comentarios = await this.service.getCommentsList(this.currentPost?.id as number);
  }

  fecharDialog() {
    this.visible = false;
    this.onFechar.emit('');
  }

  async kp(event: any) {
    if (event.keyCode == 13) {
      await this.service.salvarComentario((this.currentPost as Post).id, this.comentario);
      this.comentario = '';
      await this.carregarComentarios();
    }
  }

  async excluirComentario(item: Comentario) {
    await this.service.excluirComentario(item.id);
    await this.carregarComentarios();
  }

  confirmaExclusaoComentario(item: Comentario) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o comentario?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluirComentario(item);
      },
      reject: () => {

      }
    });
  }

}
