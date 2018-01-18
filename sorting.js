var algos = algos || {};

(function (){ 
  algos.Sorting = function(data_toSort){
   	// must be an array of numbers 
    this.data = data_toSort; 
   }; 

  algos.Sorting.prototype.triSelection = function { 
  	var min = 0;
  	for(var i = 0;i < this.data.length; i++){ 
  		min = this.data[i];
      for (var j = i+1; j< this.data.length;j++){ 
         
        if (min> this.data[j] ) this.table = __swap(i,j, this.table)
      }
  	}
    return this.table; 
   };
   /* repeatedly swapping the adjacent elements if they are in wrong order
   *  [4,3,46,57,23,69] -> [3,4,46,57,23,69 ] -> [3,4,46,57,23,69 ] ....
   **/
  algos.Sorting.prototype.bubleSort = function(){
  	if(this.data.length == 1) return this.data;
  	// sorted flag 
  	var sorted = false
  	var i = 0;   
  	while(!sorted){ 
  		sorted = true;
      for(var i = 1; i< this.data.length, i++){ 
        if(this.data[i-1]>this.data[i]) { 
        	this.data = __swap(i-1,i,this.data);
          sorted = false;
        } 
      } 
  	} 
  	return this.data;
  };

  algos.Sorting.prototype.resc_bubleSort = function(sorted){ 
     if(!sorted){ 
      sorted = true;
      for(var i = 1; i< this.data.length, i++){ 
        if(this.data[i-1]>this.data[i]) { 
        	this.data = __swap(i-1,i,this.data);
          sorted = false;
        } 
       
     } 
     return this.resc_bubleSort(sorted);
  } else { 
      return this.data; 
    }
}

  algos.Sorting.prototype.mergeSort = function(){ 


  }

  algos.Sorting.prototype.binarySearch = function(value){ 
    

  };





  var __swap = function(i,j,table){ 
     var temp = table[i]; 
     table[i] = table[j];
     table[j] = temp; 
     return table;       
   }   

} )();
