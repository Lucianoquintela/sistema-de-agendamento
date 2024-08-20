
document.getElementById('add-button').addEventListener('click', function () {
    // Obtém o contêiner de formulário
    const formContainer = document.getElementById('form-container');

    // Cria um novo div para inputs
    const newDiv = document.createElement('div');
    newDiv.classList.add('inputs');

    // Adiciona o conteúdo HTML ao novo div
    newDiv.innerHTML = `
        <div class="divName">
            <label>Nome</label><br>
            <input class="input-nome" type="text" placeholder="Nome">
        </div>

        <div class="containerNumeroEquantiPc">
            <div>
                <label>N°</label><br>
                <input class="input-numero" type="number" placeholder="N°">
            </div>

            <div>
                <label>Quantidade de PCs pegos</label><br>
                <input class="input-Quant-pc" type="number" placeholder="PCs pegos">
            </div>
        </div>

        <div class="container-data">
            <label>Data</label><br>
            <input class="input-data" type="date">
        </div>
        
    `;

    // Adiciona o novo div ao final do contêiner de formulário
    formContainer.insertAdjacentElement('afterend', newDiv);
});
 