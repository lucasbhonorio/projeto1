function validarForm(){
    var seletor= document.getElementById("seletor").value;
         if(seletor =="selecione"){   
            divseletor.innerHTML = "Selecione uma opção";
        }
        else{
            divseletor.innerHTML = "";
            console.log("validação ok")
        }  
    
    var name= document.getElementById("name").value;
        if(name == ""){
            divname.innerHTML = "Preencha esta campo";
        }
        else{
            divname.innerHTML = "";
            console.log("validação ok");
        }
    var valor= document.getElementById("valor").value;
        if(valor == ""){
            divvalor.innerHTML = "Preencha esta campo";
        }
        else{
            divvalor.innerHTML = "";
            console.log("validação ok");
        }      
    }
