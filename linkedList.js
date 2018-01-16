var algos = algos || {}; 
algos.utils = algos.utils || {}; 

(function() {

algos.LinkedList = function(firstElemt){ 
  this.next = null; 
  this.value = firstElemt;
}

algos.LinkedList.prototype.addNext = function(node){ 
   this.next = node;
}

algos.LinkedList.prototype.addEnd = function(node){ 
  if(node == null ) return;
  var current = this; 
  while(current.next){ 
     current = current.next;
  }
  current.next = node;
}

algos.LinkedList.prototype.getLength = function(){ 
  if (this.next == null) return 1 ;
  else return 1 + this.next.getLength(); 
}  

var __removeHead = function (head){ 
  var current = head.next;
  head.next = null;
  return {  
    lklist: current, 
    removedHead: head  
  };
}

var __removeTail = function(head){ 
  var current = head;
  var prev = null; 
  while( current.next){ 
    prev = current; 
    curent = current.next; 
  } 
  prev.next = null;
  // return the removed tail
  return {
    head: head,
    tail: current
    };
} 

var __removeInMidle = function (lklist, node){
	if(!lklist || !node) throw new Error ("Illegal call  remove in midle one or more arguments is null");
	if(lklist == node) return __removeHead(lklist);
    var current = lklist;
    var prev = current.next;
    while(current.next != node ){ 
    	if (current.next == null) return false;
     prev = current;
     current = current.next;
    }
    prev.next = current.next;
    delete current;
    return lklist;
} 
// this function will be used to get the midle of the list 
var __getMidleOfTheList = function(lklist){ 
    if(lklist == null || lklist.next == null) return lklist; 
    var fastPointer = lklist;
    var slowPointer = lklist;  

    while (fastPointer != null ){ 
        fastPointer = fastPointer.next.next;
        slowPointer = fastPointer.next;
    }
    return slowPointer; 
}

var __getKthElemt = function (head, k){ 

    if(!head) return new Error("the provided LinkedList is Empty");
    var current = head; 
    var kth = null;
    var i = 1; 
    while(i != k || current == null){ 
        current = current.next;
        i++;
    }

    if(current == null) return null;
    else{        
        while(current){ 
        	kth = current; 
            current = current.next;
        }

    }
    return kth; 
}

var __cycleDetection = function(node){ 
  if(node == null || node.next == null) return false;
  var fastpointor = node.next.next; 
  var slowPointor = node.next; 
  while(fastpointor.next || (slowPointor != fastpointor) ){ 
    fastpointor = fastpointor.next.next;
    slowPointor = slowPointor.next;
  }
  if( fastpointor.next == null) return false; 
  else return true; 
}  

// we assuming that the 2 nodes have a common jonction 

var __jonctionDetection = function(node1, node2){ 
	var nod1_len = node1.getLength();
  var nod2_len = node2.getLength();
  var stepToJonction = Math.abs(nod1_len - nod2_len); 
  var jonctNode = (nod1_len>nod2_len )?node1:node2; 
  for (var i =0; i< stepToJonction; i++){ 
     jonctNode = jonctNode.next;
  }
  return jonctNode; 
}

var __testBuild = function(valuesList){
    var head = new algos.LinkedList(valuesList[0]); 
    var tempnode = head;
    for(var i = 1; i< valuesList.length; i++){ 
      tempnode.next = new algos.LinkedList(valuesList[i]);
      tempnode = tempnode.next;
    } 
    return head;
}

algos.utils.linkedList_tools = { 
  __removeHead: __removeHead,
  __removeInMidle:  __removeInMidle,
  __getMidleOfTheList:__getMidleOfTheList,
  __getKthElemt: __getKthElemt,
  __cycleDetection: __cycleDetection,
  __jonctionDetection: __jonctionDetection,
  __testBuild:  __testBuild,
  __removeTail: __removeTail
  }; 

})();  


