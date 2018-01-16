var algos = {}; 

/**
* Graph structure represented 
* with node N and vertex V   
**/
algos.Node = function(value) { 
   this.value = value;
   this.visited = false 
   this.children = []; 
   this.origineLength = 0;   
   this.previousnode = null; 
 } 

algos.Node.prototype.addChildren(node){

 	if (node!=null && node.value){ 
     this.children.push(node); 
 	}
}

algos.Node.prototype.removeChildren(node){
	var indoexofChild = this.children.indexOf(node);
	if (indoexofChild>-1){ 
		this.children.splice(indoexofChild);
	}  
}
algos.Vertex = function(node1, node2,weight ){
   if(node1 && node2){
   this.__right = node1; 
   this.__left = node2;
   this.__weight = weight; 
   } else { 
   	throw new Error("illegal Vertex isntanciation node1 and node2 should not be null");
   } 
} 

algos.Vertex.prototype.updateWeigth = function(weight) {
	this.__weight += weight; 
}

algos.Vertex.prototype.getWeigth = function() {
	return this.__weight; 
}

algos.Graph = function(nodeTable,vertexTable){ 
	if(node && vertex){ 
      this.__node = nodeTable;
      this.__vertex = vertexTable;   
  	}
  	else{ 
      this.__node = []; 
      this.__vertex = [];
  	}
} 

algos.Graph.prototype.DFS = function(startingNode) {
	// set all the node as visited 
	for(var i = 0; i < this.nodeTable.length; i++){ 
        this.nodeTable[i].visited = false;
	}
	this.visit(startingNode);
     
}
algos.Graph.prototype.visit = function(node){
	if (node.visited ==false) { 
      console.log(node.value); 
      for( var i = 0; i< node.children.length; i++){ 
        this.visit(node.children[i]);
      }
	}
	node.visited = true ;
} 

algos.Graph.prototype.BFS = function(node){
    var queue = [];
    var current = null ;  
    for(var i = 0; i < this.nodeTable.length; i++){ 
        this.nodeTable[i].visited = false;
	}
	console.log(node.value);
	queue.unshift(node); 
	while (queue.length > 0) { 
        current = queue.pop();
        for(var i=0; i<current.children.lenght; i++){
            if (!current.children[i].visited){
            	console.log(current.children[i].value);
            	queue.unshift(current.children[i]);
            }
        current.visited = true 

        }


	}
}

algos.Graph.prototype.initGraph = function (starting_node){ 
	this.nodeTable.forEach(function(elemt){
          if (elemt != starting_node){ 
               elemt.origineLength = Infinity;
               elemt.previousnode = null;
          }

	} ) 

	starting_node.origineLength = 0 ; 

}

algos.Graph.prototype.relaxing = function (node1, node2,vertex ){
    if(node1.origineLength + vertex.__weight < node2.origineLength ){ 
       node2.previousnode = node1;
       node2.origineLength = node1.origineLength + vertex.__weight;
    } 
      
}

algos.Graph.prototype.bellmanford = function (starting_node){
	this.initGraph(starting_node);  
 	for (var j = 0; j < (this.vertexTable.length -1) ; i++ ){ 
 		for (i =0; i<this.vertexTable.length ; i++ ) {
        	this.relaxing(vertexTable[i].__right ,vertexTable[i].__left,vertexTable[i]); 
        }
 	}

 	for (i =0; i<this.vertexTable.length ; i++ ) {
        	if (vertexTable[i].__left.origineLength > vertexTable[i].__right.origineLength + vertexTable[i].weight ){ 
                return false ; 
        	}
        }

    return true ; 
}

algos.Graph.prototype.dijkstra = function(starting_node){ 
	this.initGraph(starting_node); 
	var minQueue = []; 
	var pathset = [];
	var current = null;  

	minQueue.push(starting_node);
	while(minQueue.length > 0 ){ 
        current = this.extractMind(minQueue);
        pathset.push(current); 
        for (var i = 0 ; i< current.children.length ; i++){ 
        	
        }  

	}  
}

algos.Graph.prototype.extractMind = function (tab){ 

}

algos.Graph.prototype.a_star = function(starting_node){ 

}






