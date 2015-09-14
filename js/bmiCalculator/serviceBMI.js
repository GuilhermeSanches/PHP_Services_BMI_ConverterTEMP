var serviceBmi = {
    
    calculateBMI:function(weight, height, callback){
        
        $.ajax({
		  url: './php/bmiServer/bmiServerAction.php',
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {		  	
		  }
		});
        
    
    }


};