import { Component } from '@angular/core';
import { ShortestPath } from './Services/ShortestPath.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';
  constructor(private shortestPath:ShortestPath){
    this.shortestPath.dijkstra(this.shortestPath.graph,this.shortestPath.nodes,0);
  }
}
