import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { UserinfoComponent } from './home/userinfo/userinfo.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { BloglistComponent } from './home/bloglist/bloglist.component';
import { AuthInterceptor } from './util/interceptors/authInterceptor';


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    HomeComponent,
    TopbarComponent,
    UserinfoComponent,
    RegisterComponent,
    PostsComponent,
    BloglistComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    EditorModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule
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
