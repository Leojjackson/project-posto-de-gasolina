
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
 let cax1 = document.querySelector('#txt');
 let numero = document.querySelector("#num");
 let res = document.querySelector('#res');
 let caixa = cax1.value;
 let num = numero.value;
 function clicou(){
  if(caixa == "gasolina"){
     res.innerHTML = caixa;
 }else if(caixa == 'alcool' || caixa == ''){
  res.innerHTML = caixa;
 }
 }
