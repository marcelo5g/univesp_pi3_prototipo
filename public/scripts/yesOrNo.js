// select yes or no
function toggleSelect(event) {
    
    // retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // get clicked button
    const button = event.currentTarget

    //colocar a class .active no botão clicado
    button.classList.add('active')
    

    // Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="hidratacao"]')

    // Verificar se Sim ou Não
    input.value = button.dataset.value 
}



