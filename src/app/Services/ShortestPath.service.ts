import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortestPath {

  INFINITY:number = 9999;
  graph: number[][] = [
    [0, 2, 6, 0, 0, 0, 0],
    [2, 0, 0, 5, 0, 0, 0],
    [6, 0, 0, 8, 0, 0, 0],
    [0, 5, 8, 0, 10, 15, 0],
    [0, 0, 0, 10, 0, 6, 2],
    [0, 0, 0, 15, 6, 0, 6],
    [0, 0, 0, 0, 2, 6, 0],
  ];



    graph2:number [][] =[

      [0,0.44,1.89,0.10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,3.45,0,0,2.44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    ];





  nodes: number = 7;
  vertices: number = 0;
  nodeMax = 7; //max node number
  minimizedGraph:any[]=[];
  tempObject:any={
    nodeid:'',
    nodePath:[]
  };


constructor() {}

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
        console.log("Distance of node", i, "=", distance[i]);

        console.log("Path=", i);
        this.tempObject['nodeid'] = i;

        j = i;
        this.tempObject['nodePath'].push(j)
        do {
          j = pred[j];
          console.log("<-", j);
          this.tempObject['nodePath'].push(j);
        } while (j != startnode);

        this.minimizedGraph.push(this.tempObject);
        this.tempObject={
          nodeid:'',
          nodePath:[]
        }

      }
    }

    console.log(this.minimizedGraph)
  }




}
