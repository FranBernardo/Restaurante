function enviar(){
    var pedido = document.getElementById('pedido').value;
    var res = document.getElementById('res');
    switch (pedido){
        case "Cachorro quente":
            res.innerHTML=`Seu pedido foi ${pedido} e vai pagar <strong> R$ 1,70 </strong>`
        break;
        case "Bauru Simples":
            res.innerHTML=`Seu pedido foi ${pedido} e vai pagar <strong> R$ 2,30 </strong>`
        break;
        case "Bauru com ovo":
            res.innerHTML=`Seu pedido foi ${pedido} e vai pagar <strong> R$ 2,60 </strong>`
        break;
        case "  Hamburguer":
            res.innerHTML=`Seu pedido foi ${pedido} e vai pagar <strong> R$ 2,40</strong>`
        break;
        case "Cheeseburguer":
            res.innerHTML=`Seu pedido foi ${pedido} e vai pagar <strong> R$ 2,50 </strong>`
        break;
        case "Refrigerante":
            res.innerHTML=`Seu pedido foi ${pedido} e vai pagar <strong> R$ 1,00 </strong>`
        break;
        default:
            res.innerHTML=` Esse pedido não se encontra no nosso cardápio, verifique a opção que vc colocou.`
        break;
            
    }
      
}