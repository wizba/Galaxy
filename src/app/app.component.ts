import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { GRAPH, PLANET_NAMES } from "./Graph/Graph";
import { ShortestPath } from "./Services/ShortestPath.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mdb-angular-free";
  titleColumn: any = ["name", "symbol", "distnace", "path"];
  planetData: any[] = [];

  selectedPlanet: any = " ";

  headElements = ["ID", "First", "Last", "Handle"];
  imagePath = "../assets/img/Earth.png";
  planetsNames: any[] = PLANET_NAMES;
  graph: number[][] = GRAPH;

  constructor(public shortestPath: ShortestPath, private http: HttpClient) {
    this.shortestPath.dijkstra(GRAPH, GRAPH.length, 0);
    this.shortestPath.setCharecterPath();
    this.shortestPath.getShortestPaths();
  }
  onChange(planet) {
    console.log(planet);
    this.planetData = [];
    this.selectedPlanet = planet.name;

    this.getFolder(planet.name);
    this.populatePlanetData(planet);

    if (planet.path[0] != "A") this.planetData.push(planet.path.reverse());
    else this.planetData.push(planet.path);
  }
  /**
   *
   * @param planet holds a selected planet data
   * the mothod populate the data into planet data array so it can show on the table
   */
  populatePlanetData(planet:any) {
    this.planetData.push(planet.name);
    this.planetData.push(planet.nodeSymbol);
    this.planetData.push(planet.distance);
  }

  /**
   *
   * @param name contains that can be passed to the uri  
   */
  getFolder(name: string) {
    console.log(encodeURI(`../assets/img/${name}.png`));
    this.http
      .get(`../assets/img/${name}.png`, { responseType: "text" })
      .subscribe(
        (_) => (this.imagePath = encodeURI(`../assets/img/${name}.png`)),
        (error) =>
          (this.imagePath = encodeURI(
            "../assets/img/image-placeholder-icon-6.jpg"
          ))
      );
  }
}
