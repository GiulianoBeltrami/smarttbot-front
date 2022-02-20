# Tecnologias utilizadas
Desenvolvimento : React, redux e bootstrap<br />
Testes: testing-library(jest)<br />
Deploy: netlify<br />
Api: https://api-front-test.k8s.smarttbot.com/api-docs/ <br />
# Como executar
Baixar o código fonte no github, navergar até a pasta do aplicativo e digitar no cmd: npm start

# Como o código está estruturado
src<br />
 |<br />
  --> /app/ -> essa pasta possui o store usado pelo redux<br />
  --> /components/ -> contém todos os componentes .JSX usados para renderizar a página<br />
  --> /helpers/ -> possui funções responsáveis pela validação e formatação dos dados<br />
  --> /assets/ -> pasta que contém imagens<br />
  --> /services/ -> possui toda a lógica responsável por chamar a api utilizando redux<br />
  --> /tests/ -> pasta que possui todos os testes do programa<br />

# Endpoints utilizados

/api/v1/robot/overview <br />
/api/v1/strategy <br />
/api/v1/robot <br />