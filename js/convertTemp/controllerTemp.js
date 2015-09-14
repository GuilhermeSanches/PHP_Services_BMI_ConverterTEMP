var controllerTemp = {
     checkOnSubmit: function(form){
         
          var callback = function(result, type){
                if(type=='C')
                        controllerTemp.showResult(result, 'C');
                else if(type=='F')
                    controllerTemp.showResult(result, 'F');
         };
         
            if(form.celsiusInput.value == '' && form.fahInput.value == ''){
                form.celsiusInput.focus();
                form.celsiusInput.placeholder = 'Preencha campo Cº';
                form.fahInput.placeholder = 'ou Preencha campo Fº';                
            }
            else if(form.celsiusInput.value == ''){
                serviceTemp.calculateTempC(parseFloat(form.fahInput.value), callback);            
                
            }
            else if(form.fahInput.value == ''){
                 serviceTemp.calculateTempF(parseFloat(form.celsiusInput.value), callback);
           
            }
            else{
                alert("Preencha apenas um dos campos");
                form.reset();
            }                        
    },
    
    showResult: function(result, type){
            if(type=='C'){
                var field = document.converterForm.celsiusInput.value =result.toFixed(2);                  
            }
            if(type=='F'){
                var field = document.converterForm.fahInput.value = result.toFixed(2);                      
            }    
    }    
};