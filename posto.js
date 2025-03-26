class Processo{

   cadastro(){
 //  ---- funcionalidade dos textos digitados ----
   confirmar.addEventListener("click", event =>{

   let cax1 = document.querySelector('#txt');
   let numero = document.querySelector("#num");
   let res = document.querySelector('#res');
   let caixa = cax1.value;
   let num = numero.value;
   let nomes = [];
 
      if(caixa == "gasolina" || caixa == 'Gasolina')
   {
      res.innerHTML = `Olá ${num} Voçê escolheu ${caixa}, prossiga para a bomba por favor!!!`
   }
      else if(caixa == 'alcool' || caixa == 'Alcool')
   {
      res.innerHTML = ` Olá ${num} Voçê escolheu ${caixa}, Prossiga para a bomba por favor!!!`
   }
      else
   {
      window.alert('ERRO... Nada selecionado. ERROR..')
   }

   console.log(caixa);
   console.log( nomes = numero.value)

   document.querySelector('#txt').value = '';
   document.querySelector("#num").value = "";

   
});
}
}
let processo = new Processo;
