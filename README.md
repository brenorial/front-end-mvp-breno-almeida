# Gerenciamento de Processos

## MVP - FrontEnd

Este repositório, desenvolvido por mim, Breno Almeida, contém o front-end do MVP solicitado para o curso de pós graduação em Full-Stack pela PUC-RIO.
A idéia para este projeto surge de uma dor real da empresa em que trabalho. A equipe jurídica analisa diversos processos durante o dia, e a maneira que eles encontraram para documentar esses processos é através de uma planilha de excel. Portanto, consolidei os pontos mais importantes para a equipe em uma aplicação web, de forma que seja possível cadastrar o processo, listar, editar e excluir.

Como solicitado pelos professores, não há qualquer referência ao backend neste repositório, porém criei um outro, a parte, com o front conversando com o back.

## Funcionalidades

- **Cadastro de Processos:** Permite adicionar novos processos informando número, descrição, data de início e data de fim.
- **Edição de Processos:** É possível editar um processo já cadastrado.
- **Exclusão de Processos:** O usuário pode deletar um processo.
- **Visualização de Processos:** Exibe os processos registrados, com navegação entre eles.
- **Busca de Processos:** O sistema permite buscar um processo pelo número.

## Como usar

1. Ao carregar a página, de início aparecerá a interface para cadastro de processos.
2. Preencha os campos de número, descrição, data de início e data de fim do processo.
3. Clique em "Cadastrar" para salvar o processo.
4. Para editar um processo, vá para o box "Listar Processos" clique em "Editar" ao visualizar o processo desejado e faça as alterações.
5. Para excluir um processo, ainda em "Listar Processos", clique em "Deletar" ao visualizar o processo desejado.
6. Utilize os botões de navegação para visualizar os processos cadastrados.

## Estrutura de Dados

Cada processo possui os seguintes atributos:

- **Número:** Identificador único do processo.
- **Descrição:** Detalhes do processo.
- **Data Início:** Data de início do processo.
- **Data Fim:** Data de término do processo.
- **Data Inserção:** Data em que o processo foi inserido no sistema.

## Tecnologias Utilizadas

- **HTML5:** Para a estruturação da página.
- **CSS:** Para a estilização da interface.
- **JavaScript:** Para a lógica de manipulação dos dados e interações com o usuário.
- **localStorage:** Para persistência dos dados no navegador.
