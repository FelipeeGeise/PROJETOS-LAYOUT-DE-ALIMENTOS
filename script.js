const list = document.querySelector("ul");
const primeiroButton = document.querySelector(".primeiro-button");
const segundoButton = document.querySelector(".segundo-button");
const terceiroButton=document.querySelector(".terceiro-button")
const quartoButton = document.querySelector(".quarto-button")
let myli = "";



function formatarMoedas(value){
const newvalue=value.toLocaleString('pt-br',{
  style:'currency',
  currency:'BRL',
})
return newvalue

}

function buttonUM(productArray) {
  myli= ''
  productArray.forEach((product) => {
    myli += `
            <li>
                    <img src=${product.src} />
                    <p>${product.name}</p>
                    <p class="paragrafo-preço"> ${formatarMoedas(product.price)}</p>
            </li>
            `;
  });
  list.innerHTML = myli;
}

function buttonDois() {
  const newPrince = menuOptions.map((product) => ({
   name: product.name,
    price: product.price * 0.9, // ou dar 10% de desconto
     vegan:product.vegan, 
     src:product.src 
  }));

  buttonUM(newPrince)

}
function buttonTres(){
 const totalValor = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

 list.innerHTML= `
  <li>
      <p>O Valor total do produto é ${formatarMoedas(totalValor)}</p>
  </li>`
}

function buttonQuatro(){
const filtrarVeganos = menuOptions.filter((product) => product.vegan)

buttonUM(filtrarVeganos)

}

primeiroButton.addEventListener("click", ()=> buttonUM(menuOptions));
segundoButton.addEventListener("click", buttonDois);
terceiroButton.addEventListener("click",buttonTres)
quartoButton.addEventListener("click",buttonQuatro)