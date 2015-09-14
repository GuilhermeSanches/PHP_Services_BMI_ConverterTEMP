var serviceMain = {
    init:function(){
        serviceMain.setForm();
                        
    },
    
    setForm:function(){
        var formConverter = document.getElementById('convForm');
                
        formConverter.addEventListener('submit',  function(event){              
              
               controllerTemp.checkOnSubmit(formConverter);
                event.preventDefault();
            });
        
        var formBmi = document.getElementById('formBmi');
                
        formBmi.addEventListener('submit',  function(event){              
              
               controllerBMI.checkOnSubmit(formBmi);
                event.preventDefault();
            });
        
    
    }       
};

window.onload = serviceMain.init();