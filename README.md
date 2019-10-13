# GraphQL

## Tópicos
Com esse desafio, você aprenderá:

- Realizar requisições utilizando Apollo e GraphQL

## Detalhes

Dentro da pasta src/screens, você encontrará a estrutura básica do teste. Sua missão será instalar as dependencias necessárias e realizar a listagem dos primeiro 20 pokemons.

### Tarefas

1. Deve ser instalado os pacotes `@apollo/react-hooks`, `apollo-boost` e `graphql`  no projeto.
2. App
  - Deve ser configurado o client para o seguinte servico: `https://graphql-pokemon.now.sh/` .
3. Main
  - Deve ser listado os primeiros 20 pokemons.
  - A query deve ser inserida dentro do component `Main`.
  - A query deve conter os seguintes parametros do pokemon: `id`, `number`, `name`, `image`, `types`,
  - Para pegar os dados dos pokemons deve ser usado a função `useQuery` do `@apollo/react-hooks`.
  - Deve conter um `ActivityIndicator` indicando o carregamento dos pokemons.
  - A listagem de pokemons deve conter:
    - a imagem do pokemon que deve conter a classe `pokemon-image`,
    - o número do pokemon concatenado com o nome do mesmo e com a classe `pokemon-name`,
    - os tipos do pokemon que deve conter a classe `pokemon-type` para cada tipo,

### Exemplo
![](https://codenation-challenges.s3-us-west-1.amazonaws.com/react-native-6/react-native-6.webm)

## Rodando a aplicação
Na primeira execução rodar o comando:
```
npm run android
```
Para rodar a aplicação:
```
npm start
```
