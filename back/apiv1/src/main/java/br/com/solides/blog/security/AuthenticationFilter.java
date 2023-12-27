package br.com.solides.blog.security;

import br.com.solides.blog.config.JwtUtil;
import br.com.solides.blog.config.LoggedUser;
import br.com.solides.blog.dto.UsuarioAuthResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@AllArgsConstructor
@Order(1)
public class AuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authheader = request.getHeader("Authorization");

        if(authheader != null && authheader.startsWith("Bearer")) {
            var token = authheader.substring(7);
            var login = getUserLogin(token);

            var detail = userDetailsService.loadUserByUsername(login);

            UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(login, detail.getPassword(), detail.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authToken);
        }

        filterChain.doFilter(request, response);
    }

    private UserDetails getUserCredentials(String token) {
        var cred = jwtUtil.getUserCred(token);
        return cred;
    }

    private String getUserLogin(String token) {
        var data = jwtUtil.getUserName(token);
        return data;
    }
}
