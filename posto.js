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
