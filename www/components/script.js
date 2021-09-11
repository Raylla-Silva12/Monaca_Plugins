window.onload = function(){

  document.querySelector("#alerta1").addEventListener("click", function(){
    function retorno(){
    };
    navigator.notification.alert("alerta de teste", retorno, "titulo do alerta", "SIM");
  });

   document.querySelector("#alerta1").addEventListener("click", function(){
     function verifica(buttonIndex){
       if(buttonIndex == 1){
         navigator.notification.alert("Escolheu A");
       }
       else{
         navigator.notification.alert("Escolheu B");
       }
     }

     navigator.notification.confirm(
       "Escolha A ou B",
       verifica,
       "opções de Escolha",
       ['A','B']
     );
   });

   document.querySelector("#alerta3").addEventListener("click", function(){
     navigator.notification.beep(1);
   });
}