import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { DockModule } from 'primeng/dock';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { UserinfoComponent } from './home/userinfo/userinfo.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { BloglistComponent } from './home/bloglist/bloglist.component';
import { AuthInterceptor } from './util/interceptors/authInterceptor';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { PostagemTextoComponent } from './posts/postagem-texto/postagem-texto.component';
import { PostagemAlbumComponent } from './posts/postagem-album/postagem-album.component';
import { GaleriaComponent } from './posts/postagem-album/galeria/galeria.component';
import { CommentsComponent } from './posts/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopbarComponent,
    UserinfoComponent,
    RegisterComponent,
    PostsComponent,
    BloglistComponent,
    ListPostsComponent,
    PostagemTextoComponent,
    PostagemAlbumComponent,
    GaleriaComponent,
    CommentsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DataViewModule,
    DialogModule,
    DockModule,
    EditorModule,
    FileUploadModule,
    FormsModule,
    GalleriaModule,
    HttpClientModule,
    InputTextModule,
    ImageModule,
    PanelModule,
    PasswordModule,
    ReactiveFormsModule,
    SpeedDialModule,
    ToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
