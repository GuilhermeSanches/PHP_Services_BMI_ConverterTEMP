var controllerBMI = {
                         
         checkOnSubmit:function(form){
             
             var callback = function(result){                
                        controllerBMI.showResult(result);                                
            };
            
            if(form.weight.value == '' || form.height.value == ''){
                    if(form.weight.value == '')    
                    form.weight.focus();
                    else if(form.height.value == '')
                        form.height.focus();                        
            }
             else if(form.weight.value == 0 || form.height.value == 0){
                    alert("Digite valores diferentes de 0");
                 form.reload();
             }
             else{                 
                 var weight = form.weight.value.replace(",", ".");
                 var height = form.height.value.replace(",", ".");
             serviceBmi.calculateBMI(parseFloat(weight),parseFloat(height), callback);             
             }
            
    
    },
    
    
        showResult: function(result){        
             document.bmiForm.results.value = result.toFixed(2);  
            var results = document.getElementById('results');
            
            if(result < 17)
                        results.innerHTML = 'Muito Abaixo do Peso Ideal!';            
            else if(result > 17 && result < 18.49)
                        results.innerHTML = 'Abaixo do Peso Ideal!';
            else if(result > 18.50 && result < 24.99)
                        results.innerHTML = 'Peso na Faixa Ideal!';
            else if(result > 25 && result < 29.99)
                        results.innerHTML = 'Acima do Peso Ideal!';
            else if(result > 30 && result < 34.99)
                        results.innerHTML = 'Obesidade I!';
            else if(result > 35 && result < 39.99)
                        results.innerHTML = 'Obesidade II(Severa)!';
            else if(result > 40)
                        results.innerHTML = 'Obesidade III(Morbida)!';
                    
                    
                
        }

};