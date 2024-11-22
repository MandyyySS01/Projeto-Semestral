let contador = 0;

function adicionarAoCarrinho() {
    contador++;
    document.getElementById("contador").innerText = contador;

    // Exibir a notificação
    const notificacao = document.getElementById("notificacao");
    notificacao.classList.add("show");

    // Ocultar a notificação após 2 segundos
    setTimeout(() => {
        notificacao.classList.remove("show");
    }, 2000);
}