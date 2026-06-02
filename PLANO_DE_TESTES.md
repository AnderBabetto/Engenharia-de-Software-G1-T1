# Plano de Testes de Software: EcoTrack Energy

Este documento descreve os casos de teste para a validação das funcionalidades desenvolvidas no sprint atual.

## Caso de Uso 1: Gerenciar Dispositivos Elétricos
**Objetivo:** Permitir que o usuário cadastre eletrodomésticos.
* **CT01.1 (Caminho Feliz):** Inserir "Ar Condicionado" e "1200W". **Resultado Esperado:** Dispositivo salvo com sucesso e exibido no dashboard.
* **CT01.2 (Validação de Erro):** Tentar salvar deixando o campo Nome em branco. **Resultado Esperado:** Sistema bloqueia o cadastro e exibe erro "Nome obrigatório".
* **CT01.3 (Validação de Limite):** Inserir potência "-50". **Resultado Esperado:** Sistema exibe alerta informando que a potência deve ser um número positivo.

## Caso de Uso 2: Consultar Estimativa de Gasto e Histórico
**Objetivo:** Verificar o cálculo financeiro e os gráficos.
* **CT02.1 (Cálculo Correto):** Cadastrar dispositivo de 1000W usado 2h/dia com tarifa de R$ 0,80. **Resultado Esperado:** O painel deve calcular e exibir exatamente o gasto de R$ 48,00 no mês.
* **CT02.2 (Tempo de Carregamento):** Acessar a tela de histórico. **Resultado Esperado:** O gráfico de barras deve carregar completamente em menos de 3 segundos (RNF-04).
* **CT02.3 (Responsividade):** Acessar o dashboard via simulação de celular. **Resultado Esperado:** O gráfico deve se adaptar à tela sem quebrar o layout.

## Caso de Uso 3: Configurar e Monitorar Metas de Consumo
**Objetivo:** Estabelecer limite financeiro e testar alertas.
* **CT03.1 (Definição de Meta):** Inserir o valor numérico "200" no campo de meta mensal. **Resultado Esperado:** Sistema salva a meta de R$ 200,00 e atualiza a barra de progresso.
* **CT03.2 (Meta Segura):** Consumo atual em R$ 150 com meta de R$ 200. **Resultado Esperado:** A barra de progresso deve ficar verde/azul, sem alertas.
* **CT03.3 (Meta Excedida):** Adicionar dispositivo que eleva o consumo para R$ 205 (meta R$ 200). **Resultado Esperado:** O indicador fica vermelho e dispara o alerta visual na tela.
