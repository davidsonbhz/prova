package br.com.solides.blog.config;

import br.com.solides.blog.model.Usuario;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class LoggedUser implements UserDetails {

    private Usuario wrappedUser;

    public LoggedUser(Usuario usuario) {
        this.wrappedUser = usuario;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
    }

    @Override
    public String getPassword() {
        return this.wrappedUser.getPassword();
    }

    @Override
    public String getUsername() {
        return this.wrappedUser.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}
