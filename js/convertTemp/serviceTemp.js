var serviceTemp = {
   calculateTempC: function(value, callback){
         
		$.ajax({
		  url: './php/converterTempServer/converterServerAction.php',
		  data: {'temp': value, 'type': 'C'},
		  success: function(result) {
		  	callback(parseFloat(result), 'C');
		  },
		  error: function() {		  	
		  }
		});
	},
	
    
    calculateTempF: function(value, callback){
        
        $.ajax({
		  url: './php/converterTempServer/converterServerAction.php',
		  data: {'temp': value, 'type': 'F'},
		  success: function(result) {
		  	callback(parseFloat(result), 'F');
		  },
		  error: function() {		  	
		  }
		});
        
        
    }
    


};