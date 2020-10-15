const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {

    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fade");
    
        setTimeout(() => {
            event.target.parentNode.remove();
        }, 500);
    }    
});