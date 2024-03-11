# Exemplo para requisição da API

Neste documento, apresentamos exemplos detalhados de consultas e os principais endpoints usados em nossa API. Ele foi criado para ser um guia de referência para ajudar a entender como nossa API funciona e como utilizá-la da melhor maneira possível. Aqui, você encontrará exemplos de como realizar consultas, bem como descrições dos endpoints mais importantes que nossa API oferece.

## Lista dos endpoints


### Manipulação de usuários

#### Obter todos os users
- Rota para obtenção de todos os registros do banco de dados.
```bash
GET localhost:8080/api/v1/user
```

#### Obter um usuário específico 
```bash
GET localhost:8080/api/v1/user/{id}
```

------

#### Cadastrar um user no banco de dados
- Rota para criação de usuário, também um exemplo para o request.

```bash
POST localhost:8080/api/v1/user
```
```json
{
     "email": "joao@mascenaa.com",
     "nome": "João Mascena",
     "passagens_favoritas": [],
     "senha": "*************"
}
```

----

#### Atualizar senha do usuário
```bash
PUT localhost:8080/api/v1/user/password/{id}
```
```json
{
     "senha": "nova_senha"
}
```


