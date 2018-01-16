var algos = algos || {}; 
algos.utils = algos.utils || {}; 

(function(){ 
	algos.BinaryTree = function(nodevalue){ 
    this.value = nodevalue;
    this.right = null; 
    this.left = null;
	} 
	
	algos.BinaryTree.prototype.visit = function(){ 
     console.log(" visited node ===> "  + this.value + "\n"); 
	}

	algos.BinaryTree.prototype.addNode = function(value){ 


	}
	
	algos.BinaryTree.prototype.findElement = function(value){ 

	}  

	algos.BinaryTree.prototype.removeElement = function(value){ 

	}  

  var __getLinkedListLevel = function(tree){ 

  }

  var __rebalanceTree = function(tree){ 

  }

  var __pivotRight = function(node) { 


  }
  
  var __pivotLeft = function(node){ 


  } 

	var __getTreeLength = function(node){ 
		  if(node == null) return 0; 
		  return 1 + Math.max(__getTreeLength(node.right), __getTreeLength(node.left)); 
	    
	}
	// order
	var __order = function(tree){ 
	    __order(tree.left); 
	    tree.visit();
	    __order(tree.right); 
	} 

	var __postorder = function(tree){ 
	  __postorder(tree.left); 
	  __postorder(tree.right); 
	  tree.visit();
	} 
	var __pretorder = function(tree){ 
	  tree.visit();
	  __pretorder(tree.left); 
	  __pretorder(tree.right); 
	  
	} 

	var __BFS = function(){ 

	}

	var __DFS = function(){ 

	}


})()