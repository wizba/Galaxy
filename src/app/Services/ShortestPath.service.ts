import { Injectable } from "@angular/core";
import { GRAPH, PLANET_NAMES } from "../Graph/Graph";

@Injectable({
  providedIn: "root",
})
export class ShortestPath {
  private INFINITY: number = 9999;
  private myNodes: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A'",
    "B'",
    "C'",
    "D'",
    "E'",
    "F'",
    "G'",
    "H'",
    "I'",
    "J'",
    "K'",
    "L'",
  ];

  private planetsNames: any[] = PLANET_NAMES;
  private nodeMax = 38; //max node number
  private shortestPaths: any[] = [];
  private tempObject: any = {
    nodeid: "",
    nodePath: [],
    distance: 0,
  };
  private paths: any[];

  constructor() {}

  /**
   *
   * @param G represents a the graph
   * @param n number of nodes
   * @param startnode is a variable that holds the starting node
   */
  dijkstra(G: number[][], n: number, startnode: number): void {
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
        //  console.log("Distance of node", i, "=", distance[i]);

        //  console.log("Path=", i);
        this.tempObject["nodeid"] = i;
        this.tempObject["distance"] = distance[i];
        j = i;
        this.tempObject["nodePath"].push(j);
        do {
          j = pred[j];
          //console.log("<-", j);
          this.tempObject["nodePath"].push(j);
        } while (j != startnode);

        this.shortestPaths.push(this.tempObject);
        this.tempObject = {
          nodeid: "",
          nodePath: [],
          distance: 0,
        };
      }
    }
  }

  /**
   * getShortestPaths()
   * this method returns an array of all the paths
   */

  public getShortestPaths(): any[] {
    // console.log(this.planetsNames);
    return this.planetsNames;
  }

  setCharecterPath() {
    this.paths = [];
    this.shortestPaths.forEach((temp, index) => {
      let nodeCharecter = this.myNodes[temp.nodeid];
      let distance = temp.distance;
      let tempPath: any[] = [];

      for (let i = 0; i < temp.nodePath.length; i++) {
        tempPath.push(this.myNodes[temp.nodePath[i]]);
      }

      this.planetsNames[index]["path"] = tempPath.reverse();
      this.planetsNames[index]["distance"] = distance;

      this.paths.push({
        node: nodeCharecter,
        path: tempPath.reverse(),
        distance: distance,
      });

      tempPath = [];
    });
  }
}
