document.addEventListener("DOMContentLoaded", function() {
    const inserisciButton = document.querySelector('.inserisci-pasti button');
    const inputText = document.querySelector('.inserisci-pasti input[type="text"]');
    const listaPiatti = document.querySelector('.listaPiatti');

    inserisciButton.addEventListener('click', function() {
        const nuovoPiatto = inputText.value.trim();

        if (nuovoPiatto !== '') {
            const nuovoElemento = document.createElement('div');
            nuovoElemento.textContent = nuovoPiatto;
            nuovoElemento.style.color = "black";
            nuovoElemento.style.fontFamily = "Arial";
            nuovoElemento.style.marginLeft = "2%";
            nuovoElemento.style.marginTop = "3%";
            listaPiatti.appendChild(nuovoElemento);
            inputText.value = '';
        }
    });

    var today = new Date();
    var formattedDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    document.getElementById('localDate').innerHTML = formattedDate;
});