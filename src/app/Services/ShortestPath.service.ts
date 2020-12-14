import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortestPath {

  INFINITY:number = 9999;
    myNodes :any[]=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"A'","B'","C'","D'","E'","F'","G'","H'","I'","J'","K'","L'"
  ]
    graph:number [][] =[

      /*A*/ [0,0.44,1.89,0.10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*B*/ [0,0,0,0,3.45,0,0,2.44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*C*/ [0,0,0,0,0,0.49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*D*/ [0,0,0,0,0,0,0,0,0,0,0,2.34,2.61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*E*/ [0,0,0,0,0,0,0,0,8.09,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*F*/ [0,0,0,0,0,0,0,0,0,0,5.46,3.67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*G*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5.25,0,0,0,0,0,0,0,0,0,0,0,0],
      /*H*/ [0,0,0,0,0,0,3.71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*I*/ [0,0,0,0,0,0,0,0,0,14.78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13.97,0,0,0,0,0,0,0,0,0,0,0,0],
      /*J*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12.34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*K*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*L*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15.23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*M*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*N*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*O*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,5.26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*P*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9.31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*Q*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10.51,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*R*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10.10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9.95],
      /*S*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,6.02,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*T*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,10.43,0,0,0,0,14.22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      /*U*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25.96,21.23,0],//JK
      /*V*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//
      /*W*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10.64,0,36.19,0,0,0,0,0,0,0],//C'E'
      /*X*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19.94,0],//K'
      /*Y*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22.04,0,0,0,0,0,0,0,0,0,31.56,0,0,0,0,0,0,0,0,0,0,0],//A'
      /*Z*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18.91,0,0,0,0,0,0,0,0,0,0,0,0,0],//Y
      /*A'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31.56,0,0,0,0,0,0,0,0,0,0],//B'
      /*B'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23.13,0,0,0,0,0,0,0,0,0],//C'
      /*C'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36.48,0,0,0,0,0,0,0,0],//D'
      /*D'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//D'
      /*E'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41.26,42.07,0,0,0,0,0,0,0],//D'F' Error on table
      /*F'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17.63,0,0,0,0,0],//G'
      /*G'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40.48,0,0,0,0],//H'
      /*H'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//
      /*I'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//
      /*J'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.16,0,0,0,0,0,0,0,0,0,0,0,0,0,17.10,0,0],//V 'I
      /*K'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20.42,28.89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],// V W
      /*L'*/ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23.61,0,0,0,0,0,0,0,0,0,0,0,0,0],//X  Error on table missing 'L as a node
    ];





  nodes: number = 38;
  vertices: number = 0;
  private nodeMax = 38; //max node number
  private shortestPaths:any[]=[];
  private tempObject:any={
    nodeid:'',
    nodePath:[]
  };


constructor() {
  console.log({length:this.graph.length})
}

/**
 *
 * @param G represents a the graph
 * @param n number of nodes
 * @param startnode is a variable that holds the starting node
 */
  dijkstra(G: number[][], n: number, startnode: number) :void{

    let cost: number[][] = new Array(this.nodeMax)
      .fill(0)
      .map(() => new Array(this.nodeMax).fill(0));
    let distance: number[] = [];
    let pred: number[] = [];

    let visited: number[] = [];
    let count: number;
    let mindistance: number;
    let nextnode: number;
    let i: number;
    let j: number;



    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (G[i][j] == 0) {
          cost[i][j] = this.INFINITY;
        } else {
          cost[i][j] = G[i][j];
        }
      }
    }

    for (i = 0; i < n; i++) {
      distance[i] = cost[startnode][i];
      pred[i] = startnode;
      visited[i] = 0;
    }
    distance[startnode] = 0;
    visited[startnode] = 1;
    count = 1;
    while (count < n - 1) {
      mindistance = this.INFINITY;
      for (i = 0; i < n; i++) {
        if (distance[i] < mindistance && !visited[i]) {
          mindistance = distance[i];
          nextnode = i;
        }
      }
      visited[nextnode] = 1;

      for (i = 0; i < n; i++) {
        if (!visited[i])
          if (mindistance + cost[nextnode][i] < distance[i]) {
            distance[i] = mindistance + cost[nextnode][i];
            pred[i] = nextnode;
          }
      }
      count++;
    }


    for (i = 0; i < n; i++) {
      if (i != startnode) {
        // console.log("Distance of node", i, "=", distance[i]);

        // console.log("Path=", i);
        this.tempObject['nodeid'] = i;

        j = i;
        this.tempObject['nodePath'].push(j)
        do {
          j = pred[j];
         // console.log("<-", j);
          this.tempObject['nodePath'].push(j);
        } while (j != startnode);

        this.shortestPaths.push(this.tempObject);
        this.tempObject={
          nodeid:'',
          nodePath:[]
        }

      }
    }

    //console.log(this.shortestPaths)
    this.getShortestPaths();
  }

   /**
     * getShortestPaths()
     * this method returns an array of all the paths
    */
   public getShortestPaths():any[] {
     let paths:any[] = [0];

     this.shortestPaths
     .forEach(temp=>{

      let nodeCharecter = this.myNodes[temp.nodeid];
      let tempPath:any[] =[];
     // console.log({to:nodeCharecter});

        for(let i =0 ; i < temp.nodePath.length ; i++){

          tempPath.push(this.myNodes[temp.nodePath[i]]);


        }
       // console.log(tempPath)

       paths.push({
         node:nodeCharecter,
         path:tempPath.reverse()
       });
        tempPath = [];
      //
     })

     console.log(paths);


    return paths;
  }

  /**
   * getSingleParth
   * gets a single path
   * @Param nodeId used to select node with an id from its array
   */
  public getSingleParth(nodeId:number) {
    return this.shortestPaths[nodeId];
  }


}
