
 let botao = document.querySelector('#bot');
 let inicio = document.querySelector('#ini');
 let pa = document.querySelector('#pag');
 let sobre = document.querySelector('#sob');
 let contato = document.querySelector('#con');
 function clicar(){
 
   inicio.innerHTML = 'Inicio'
   pa.innerHTML = 'Página'
   sobre.innerHTML = 'Sobre'
   contato.innerHTML = 'Contato'
 }
 function sair(){
    inicio.innerHTML = ''
    pa.innerHTML = ''
    sobre.innerHTML = ''
    contato.innerHTML = ''
 }

 //  ---- funcionalidade dos textos digitados ----
 function clicou()
 {
   let cax1 = document.querySelector('#txt');
   let numero = document.querySelector("#num");
   let res = document.querySelector('#res');
   let caixa = cax1.value;
   let num = numero.value;
 
      if(caixa == "gasolina" || caixa == 'Gasolina')
   {
      res.innerHTML = `Olá ${num} Você escolheu ${caixa}, prossiga para a bomba por favor!!!`
   }
      else if(caixa == 'alcool' || caixa == 'Alcool')
   {
      res.innerHTML = ` Olá ${num} Você escolheu ${caixa}, prossiga para a bomba por favor!!!`
   }
      else
   {
      window.alert('ERROR...as caixas ou uma delas ficaram vazias. ERROR..')
   }
 };
