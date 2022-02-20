# Tecnologias utilizadas
Desenvolvimento : React, redux e bootstrap
Testes: testing-library(jest)
Deploy: netlify
# Como executar
Baixar o código fonte no github, navergar até a pasta do aplicativo e digitar no cmd: npm start

# Como o código está estruturado
src
 |
  --> /app/ -> essa pasta possui o store usado pelo redux
  --> /components/ -> contém todos os componentes .JSX usados para renderizar a página
  --> /helpers/ -> possui funções responsáveis pela validação e formatação dos dados
  --> /assets/ -> pasta que contém imagens
  --> /services/ -> possui toda a lógica responsável por chamar a api utilizando redux
  --> /tests/ -> pasta que possui todos os testes do programa
