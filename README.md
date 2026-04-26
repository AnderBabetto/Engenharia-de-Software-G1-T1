# Engenharia-de-Software-G1-T1

### 1. Objetivo do Trabalho (ODS)

O presente projeto visa abordar o Objetivo de Desenvolvimento Sustentável 7 (ODS 7) - Energia Limpa e Acessível. O foco principal é promover a eficiência energética e o consumo consciente, alinhando-se à meta de aumentar a taxa de melhoria da eficiência energética global por meio da conscientização tecnológica.

### 2. Definição do Problema

O desperdício de energia em residências e pequenas empresas é frequentemente causado pela falta de visibilidade sobre quais aparelhos consomem mais e em quais horários. Sem dados concretos, os usuários têm dificuldade em mudar hábitos ou identificar falhas em seus equipamentos, resultando em contas elevadas e pressão desnecessária sobre a rede elétrica.

### 3. Tipo de Solução

A solução desenvolvida será um Sistema Web Fullstack.

    Backend: API REST para processamento de dados de consumo e cálculos de eficiência.

    Frontend: Dashboard interativo para visualização de métricas e gestão de dispositivos.

    Justificativa: A escolha por um sistema web permite a centralização dos dados (backend) e uma visualização rica em gráficos (frontend), essencial para a interpretação de dados energéticos.


### 4. Requisitos da Aplicação
Requisitos Funcionais (RF)
#### 
| ID | Descrição | Prioridade |
|:---|:---|:---|
| RF-01 | O sistema deve permitir o cadastro de dispositivos elétricos (nome, potência). | Alta |
| RF-02 | O sistema deve calcular o gasto mensal estimado em R$ com base na tarifa local. | Alta |
| RF-03 | O sistema deve apresentar um histórico de consumo em formato de gráfico. | Média |
| RF-04 | O sistema deve permitir que o usuário defina uma meta de consumo mensal. | Média |
| RF-05 | O sistema deve emitir um alerta visual quando a meta for atingida. | Baixa |

Requisitos Não Funcionais (RNF)
####
| ID | Descrição | 
|:---|:---|
| RNF-01 | O sistema deve persistir os dados em um banco de dados relacional. | 
| RNF-02 | A interface deve ser responsiva para acesso via dispositivos móveis. | 
| RNF-03 | O backend deve ser desenvolvido utilizando arquitetura que separe as responsabilidades. | 
| RNF-04 | O tempo de carregamento dos gráficos não deve ultrapassar 3 segundos. | 

### 5. Caso de uso

<img width="1246" height="650" alt="image" src="https://github.com/user-attachments/assets/a22143a5-094e-4c69-9aa9-e7a98da5bcd7" />






### 6. Arquitetura do Projeto
A arquitetura foi refinada para um modelo de serviços desacoplados (Poliglota), separando a interface web da lógica de processamento pesado de dados.

1. Modelo C4
   
Representação da comunicação entre o Frontend (React), Backend (Node.js) e o Data Engine (Python).
<img width="1024" height="737" alt="image" src="https://github.com/user-attachments/assets/625adb89-d838-411b-8e15-4fa244bd0867" />



2. Justificativa Técnica

Optou-se por separar a interface (HTML/JS/React) e a orquestração (Node.js) do motor de análise (Python/Pandas). Isso garante que o processamento dos dados da PNS e dos históricos de consumo não bloqueie a experiência do usuário, atendendo aos princípios de Separação de Preocupações da Engenharia de Software. Essa abordagem poliglota permite que cada serviço utilize a linguagem mais eficiente para sua tarefa específica.

