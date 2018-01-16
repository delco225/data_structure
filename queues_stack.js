var algos = algos || {}; 
algos.utils = algos.utils || {};

(function(){
// implementation of stack and queues with Linked List 
algos.Stack = function(){ 
  this.count = 0;
  this.data = null;
}  

algos.Stack.prototype.stack= __addOnTop.call(this); 

}

algos.Stack.prototype.unstack = function(){
	var elementToreturn = null;
	if(this.count>0){
	  var removeResult = algos.utils.linkedList_tools.__removeHead(this.data);
	  this.data = removeResult["lklist"];  
    this.count -- 
    return removeResult["removedHead"]; //
  }

}

algos.Stack.prototype.emptyStack = __clear.call(this)

algos.Queue = function(){ 
  this.count = 0; 
  this.data = null;
}

algos.Queue.prototype.queue = __addOnTop.call(this); 

algos.Queue.prototype.unqueue= function(){
	var tail = algos.utils.linkedList_tools.__removeHead(this.data); 
	this.count --; 
	return tail ;
}

algos.Queue.prototype.emptyqueue = __clear.call(this)

var __clear = function () { 
	var current = this.data; 
	var temdata = null;
	this.data = null; 
	while(current){ 
    if(current.next){ 
     tempdata = current.next;
     current = null; 
     current = tempdata;
     this.count -- ;
    }
	}
}

var __addOnTop = function(data){ 

if (!this.data) { 
    this.data = new algos.LinkedList(data); 
    this.count++; 
	}
	else{ 
   var newStackElemt = new algos.LinkedList(data); 
   newStackElemt.next = this.data; 
   this.data = newStackElemt; 
   this.count++; 
	}

}

})()