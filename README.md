# Desafio Crud-React-TS
    O crud foi construido nos conformes proposto no desafio

### 1. Instalando dependências

Com o node instalado corretamente na sua maquina, prossiga:
 ``` Npm install ```
 em ambas as pastas /client e /server

### 2.Configurando o banco de dados

Inicialmente sera necessário criar um banco de dados local em sua maquina.
Apos criado e selecionado rode o script de criação fornecido na raiz do projeto.

Concluído essas etapas vai ser preciso configurar as variáveis de ambiente
na pasta /server crie um arquivo chamado .env, nesse arquivo deve preencher as informações 
do seu banco de dados dessa forma:
```
    PORT=3306
    DB_HOST="localhost"
    DB_USER="seu usuario"
    DB_PWD="sua senha"
    DB_NAME="nome do banco de dados"
```

### 3. Iniciando a aplicação
Em ambas as pastas /client e /server deve executar

```
    npm run dev
```

Feito isso a aplicação vai estar rodando e vai poder ser acessada
Em um endereço como esse ➜  Local:   http://127.0.0.1:5173/
Vai aparecer no seu console do /client

o server vai rodar no endereço ➜ http://localhost:3000/




