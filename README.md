<p align="center">
  <img src="https://camo.githubusercontent.com/0a35fb0a0add717a1556200218530580cca84bfd7a0e8c3f5c28fc72e02cd3fb/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732d6e65772e706e67" alt="Logo" height="120" />
  <h3 align="center">NodeJS Concepts</h3>
  <p align="center">GoStack Challenge at Rocketseat :rocket:</p>
<p align="center">

## :rocket: Sobre o Desafio

Aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações..<br>
<a href="https://github.com/rocketseat-education/bootcamp-gostack-desafios">Repositório oficial dos desafios</a>

## 📌 Rotas

-   `POST /transactions`: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas).

    | field | example              |
    | ----- | -------------------- |
    | title | Curso de programação |
    | value | 400                  |
    | type  | outcome              |

-   `GET /transactions`: Retorna uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito.
    Exemplo:
    ```json
    {
        "transactions": [
            {
                "id": "uuid",
                "title": "Salário",
                "value": 4000,
                "type": "income"
            },
            {
                "id": "uuid",
                "title": "Freela",
                "value": 2000,
                "type": "income"
            },
            {
                "id": "uuid",
                "title": "Pagamento da fatura",
                "value": 4000,
                "type": "outcome"
            },
            {
                "id": "uuid",
                "title": "Cadeira Gamer",
                "value": 1200,
                "type": "outcome"
            }
        ],
        "balance": {
            "income": 6000,
            "outcome": 5200,
            "total": 800
        }
    }
    ```

## :dart: Testes

`should be able to create a new transaction:` Aplicação permite que uma transação seja criada, e retorna um json com a transação criada.

`should be able to list the transactions:` Aplicação retorna um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

`should not be able to create outcome transaction without a valid balance:` Aplicação não permite que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro.

<!-- CONTACT -->

## Contato

:boy: Carlos Kauãn - [https://twitter.com/carlaodamassaa](https://twitter.com/carlaodamassaa) - carloskauanmoreiradesousa@gmail.com

<p align="center">Feito com 💚 por Carlos Kauãn</p>
