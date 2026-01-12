## CINETEC 🍿 – Sistema de Gerenciamento Ágil

# Sobre o Projeto
O Cinetec é um sistema de gerenciamento desenvolvido para a TechFlow Solutions. O projeto simula um cenário real de engenharia de software para uma startup de logística que necessita monitorar fluxos de trabalho e desempenho de equipe em tempo real.   

Este repositório faz parte da avaliação da disciplina de Engenharia de Software da UniFECAF.   

# Escopo e Funcionalidades
- A aplicação consiste em um CRUD completo para gestão de tarefas (representadas aqui pelo cadastro de filmes, atores e diretores):   
- Autenticação: Sistema de Login e Cadastro de usuários.   
- Gestão de Conteúdo: Create, Read, Update e Delete de Atores e Diretores.   
- Visualização: Dashboard principal com listagem de itens cadastrados.

# 🛠 Stack Utilizada
Front-end: React, Bootstrap.   
Back-end: Node.js, Express.js.   
Banco de Dados: MySQL.


# Testes: Jest para validação de entradas e lógica.   

# Metodologia Ágil e Gestão
Adotamos o Kanban como metodologia principal para garantir a transparência do fluxo de trabalho.   

# Quadro Kanban
Localizado na aba Projects do GitHub, contendo as colunas: A Fazer, Em Progresso e Concluído.   

# Gestão de Mudanças 
Durante o desenvolvimento, houve uma alteração de escopo para incluir a funcionalidade de login. Essa mudança foi documentada e priorizada no Kanban para refletir as necessidades do cliente.   

# Controle de Qualidade (CI/CD)
Para garantir a confiabilidade do software, implementei um pipeline de Integração Contínua (CI) via GitHub Actions.   

# Testes Automatizados: 
O pipeline executa testes unitários a cada push ou pull request na branch main.   

# Validação: 
O workflow garante que novas alterações não quebrem as funcionalidades de CRUD e login já existentes.