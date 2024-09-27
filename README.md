## relogioDigital
Atividade voltada a criação de um relógio digital em tempo real usando JavaScript

- A função `atualizarRelogio` usa `new Date()` para obter a hora atual e `getHours()`, `getMinutes()` e `getSeconds()` para extrair as horas, minutos e segundos.
- O método `padStart(2, '0')` garante que os valores fiquem sempre com dois dígitos (por exemplo, `09` em vez de `9`).
- O `setInterval` chama a função `atualizandoHora` a cada 1000 milissegundos (1 segundo), atualizando o relógio em tempo real.

