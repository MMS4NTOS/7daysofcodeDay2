function testar() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome == "" || idade == "" || mensagem == "") {
    alert("Parece que você esqueceu de preencher algum dos campos, não é?");
  } else {
    let resultado =
      "Obrigado pela consultoria. Seu nome é " +
      nome +
      ". Mas você talvez não tenha contado a verdade aqui. Se for o caso, fica tranquilo, nunca vou descobrir isso mesmo. <br> Você tem " +
      idade +
      " anos. <br> Minha mensagem motivacional para você é: " +
      mensagem +
      ". Espero que seja de ajuda. <br> Se você viu todo esse texto, é um sinal de que cumprimos o desafio (ou não). Agora, vamos ao desafio seguinte: Você gostou de como cumpri o desafio? Responda 'sim' para 'sim' e 'não' para 'não' <br><br> <input type='text' id='feedback' placeholder='Sua resposta aqui'> <br><br> <button type='submit' onClick='retorno()'> Enviar feedback </button> <br><br>";

    let recadoFinal = document.getElementById("resultado");
    recadoFinal.innerHTML = resultado;
  }
}

function retorno() {
  let feedback = document.getElementById("feedback").value;
  let verFeedback = document.getElementById("feedbackFinal");
  if (feedback == "sim") {
    verFeedback.innerHTML =
      "Fico feliz com isso! Agradeço a colaboração. Muito obrigado, e até a próxima!";
  } else if (feedback == "não") {
    verFeedback.innerHTML =
      "É, não dá pra agradar todo mundo. O que posso melhorar? De qualquer forma, agradeço a colaboração. Muito obrigado, e até a próxima! ";
  } else {
    alert("Tem certeza que você respondeu exatamente 'sim' ou 'não'?");
  }
}

// Agradeço a colaboração. Muito obrigado, e até a próxima!";