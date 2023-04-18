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
 
      if(caixa == "gas" || caixa == 'Gas')
   {
      res.innerHTML = `Hello ${num} You have Chosen ${caixa}, Proceed To The Pumb Please!!!`
   }
      else if(caixa == 'alcool' || caixa == 'Alcool')
   {
      res.innerHTML = ` Hello ${num} You have Chosen ${caixa}, Proceed To The Pumb Please!!!`
   }
      else
   {
      window.alert('ERROR... You haven`t chosen nothing. ERROR..')
   }

   console.log(caixa);
   console.log( nomes = numero.value)

   document.querySelector('#txt').value = '';
   document.querySelector("#num").value = "";

   
});
}
}
let processo = new Processo;
