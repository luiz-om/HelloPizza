const QTD_CARNE_ADULTO = 0.4;
const QTD_CARNE_CRIANCA = 0.2;
const QTD_BEBIDA_ADULTO = 5; //latas
let qtdCarneAdulto
let qtdCarneCriancas
let radioGramas = document.getElementsByName("medida");
let painel= document.getElementById('panel')

painel.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    calcular()
  }
})

const calcular = () => {
  
if(criancas.value ==='' && adultos.value==='' )
{
  alert('Preencha um dos campos para continuar')
}
else{
 //1 ler n de adultos
 let adultos = document.querySelector("#adultos").value;
 //2 ler n de criancas
 let criancas = document.querySelector("#criancas").value;
 //3 calcular qtd carne p/adultos
 qtdCarneAdulto = (+adultos * QTD_CARNE_ADULTO).toFixed(2);
 //4 calcular qtd carne para criancas
 qtdCarneCriancas = (+criancas * 0.2).toFixed(2);
 //5 calcular qtd de bebidas p/adultos
 let qtdCerveja = QTD_BEBIDA_ADULTO * +adultos
 //mostrar resultado
 //alert(radioGramas.value)
 for (var i = 0; i < radioGramas.length; i++) {
   // radioButton 
   if (radioGramas[i].checked) {
     if (radioGramas[i].value == 'kilogramas') {
       document.getElementById("resultado").innerHTML = `

         <ul>
         <li>Quantidade de carne para adultos: ${qtdCarneAdulto} kg</li>
         <li>Quantidade de carne para criancas: ${qtdCarneCriancas} kg</li>
         <li>Quantidade de cerveja para adultos: ${qtdCerveja} latas de 350ml</li>
         </ul>
       `
     } else if (radioGramas[i].value == 'gramas') {
       document.getElementById("resultado").innerHTML = `

       <ul>
       <li>Quantidade de carne para adultos: ${qtdCarneAdulto * 1000} gramas</li>
       <li>Quantidade de carne para criancas: ${qtdCarneCriancas * 1000} gramas</li>
       <li>Quantidade de cerveja para adultos: ${qtdCerveja} latas de 350ml</li>
       </ul>
     `
     }
   
   }
  
 }  
}
 

  //Usar para modificar. modo mais facil de interar 
  radioGramas.forEach(element => {
  if(element.checked)
  console.log(element.value);
  });

};
