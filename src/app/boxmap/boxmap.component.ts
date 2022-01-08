import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';
@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.css']
})
export class BoxmapComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef


  constructor() { }

  ngAfterViewInit(): void {
     
    const map = new Map({
      container: this.mapDivElement.nativeElement,// container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [ 105.7659227, 21.0208023], // starting position [lng, lat]
      zoom: 15,
      });

  }

}
