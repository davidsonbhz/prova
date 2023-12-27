package br.com.solides.blog.config;

import br.com.solides.blog.model.Usuario;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Component
public class JwtUtil {

    private static String SECRET = "abracadabramysteriesdancecharmsflytimedefy";
    private static final String issuer = "BlogSolides";
    private static final long EXPIRATION_TIME = 864_000_000; // 10 days
    private static final String CLAIM_USERID = "userId";
    private static final String CLAIM_USERNAME = "userName";
    private static final String CLAIM_ROLES = "userRoles";
    public String generateToken(Usuario usuario) {

        String jwtToken = JWT.create()
                .withIssuer(issuer)
                .withSubject("User data")
                .withClaim(CLAIM_USERID, usuario.getId().toString())
                .withClaim(CLAIM_USERNAME, usuario.getEmail())
                .withClaim(CLAIM_ROLES, usuario.getIsAdmin() ? List.of("USER", "ADMIN") : List.of("USER"))
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + 3600000L))
                .withJWTId(UUID.randomUUID().toString())
                // .withNotBefore(new Date(System.currentTimeMillis() + 3600000L))
                .sign(Algorithm.HMAC256(SECRET));


        return jwtToken;
    }

    public static String verifyToken(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET))
                    .withIssuer(issuer)
                    .build();

            DecodedJWT decodedJWT = verifier.verify(token);
            var claim = decodedJWT.getClaim(CLAIM_USERNAME);
            return claim.asString();

        } catch (JWTVerificationException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public String getUserName(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET))
                    .withIssuer(issuer)
                    .build();

            DecodedJWT decodedJWT = verifier.verify(token);
            var claim = decodedJWT.getClaim(CLAIM_USERNAME);
            return claim.asString();

        } catch (JWTVerificationException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public String getUserId(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET))
                    .withIssuer(issuer)
                    .build();

            DecodedJWT decodedJWT = verifier.verify(token);
            var claim = decodedJWT.getClaim(CLAIM_USERID);
            return claim.asString();

        } catch (JWTVerificationException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public UserDetails getUserCred(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET))
                    .withIssuer(issuer)
                    .build();

            DecodedJWT decodedJWT = verifier.verify(token);
            var id = decodedJWT.getClaim(CLAIM_USERID);
            var username = decodedJWT.getClaim(CLAIM_USERNAME);
            var roles = decodedJWT.getClaim(CLAIM_ROLES);

            var cred = new LoggedUser(Usuario.builder()
                    .email(username.asString())
                    .id(id.asLong())
                    .build());

            return cred;

        } catch (JWTVerificationException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}
