

        var numero = "";
        var tela = "";
        var resultado = "";

       function NumeroP(x)
       {
          numero = numero.concat(x);
          console.log(x);
          MostrarTela(x);
       };
      

       function MostrarTela(y)
       {

          tela = tela.concat(y);
          var telaS = document.getElementById("telaP"); 
          telaS.value = tela;

       };

       function Igual()
       {
          tela = "";
          resultado = eval(numero);
          MostrarTela(resultado);
       }

       function Limpar()
       {
         tela = "";
         numero = "";
         resultado = "";
         MostrarTela("");
       }

       function Mb()
       {
         MostrarTela("MB =) porfavor");
       }
eval()