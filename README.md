# Projeto de Frontend

Para executar o front:

    Verificar o arquivo environment.ts e verificar se a apiUrl está apontando para o host que vai rodar o backend

    Foi utilizado o node na versão 18.13. Após instação via nvm:
    - nvm use 18.13
    - ng serve

    Foi utilizado a biblioteca PrimeNG (https://primeng.org/) no projeto.

    Obs: A url de salvamento das imagens é um servidor temporário feito para este projeto: https://backupmyfiles.duckdns.org/davidson/upload.php. 
    


Para executar o backend

    Verificar se as configurações de conexão com o banco estão corretas. Ex:
        spring.datasource.url=jdbc:postgresql://localhost:5432/blogsolides?defaultAutoCommit=false
        spring.datasource.username=blogsolides
        spring.datasource.password=123


