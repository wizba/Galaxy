import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GRAPH, PLANET_NAMES } from './Graph/Graph';
import { ShortestPath } from './Services/ShortestPath.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';
  titleColumn: any = ['name','symbol','distnace','path'];
  planetData:any[] =[];

  selectedPlanet:any = " ";

  headElements = ['ID', 'First', 'Last', 'Handle'];
  imagePath ='../assets/img/Earth.png';
  planetsNames:any[] =PLANET_NAMES;
  graph:number [][] =GRAPH;

  constructor(
    public shortestPath:ShortestPath,
    private http:HttpClient
    ){
    this.shortestPath.dijkstra(GRAPH,GRAPH.length,0);
    this.shortestPath.setCharecterPath();
    this.shortestPath.getShortestPaths();
  }
  onChange(newValue) {
    console.log(newValue);
    this.planetData = [];
    this.selectedPlanet = newValue.name;

    this.getFolder(newValue.name)


    this.planetData.push(newValue.name);
    this.planetData.push(newValue.nodeSymbol);
    this.planetData.push(newValue.distance);
    
      if(newValue.path[0] != 'A')
        this.planetData.push(newValue.path.reverse());
      else
        this.planetData.push(newValue.path);




}

getFolder(name: string) {

  console.log(encodeURI(`../assets/img/${name}.png`))
    this.http.get(`../assets/img/${name}.png`,{ responseType: 'text' })
    .subscribe(_=>this.imagePath=encodeURI(`../assets/img/${name}.png`),
    error=>this.imagePath=encodeURI('../assets/img/image-placeholder-icon-6.jpg'))
}
}
