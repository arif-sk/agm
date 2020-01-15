import { Component, OnInit, NgZone  } from '@angular/core';
import { Marker, MouseEvent } from '@agm/core';
import {} from 'googlemaps';
declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  location: ILocation;
  selectedMarker: IMarker;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.location = {
      latitude:  23.78059,
      longitude:  90.407132,
      mapType: 'satelite',
      zoom: 15,
      markers: [ {
        lat:  23.78059 ,
        lng:  90.407032,
        label: this.getAddress(23.78059,  90.407132)
      }
      ]
    };
  }
  addMarker(lat: number, lng: number) {
    this.location.markers.push({
        lat,
        lng,
        label: Date.now().toLocaleString()
    });
}

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude,
      label: Date.now().toLocaleString()
    };
  }
  markerDragEnd($event: MouseEvent) {
    this.location.latitude = $event.coords.lat;
    this.location.longitude = $event.coords.lng;
}

getAddress(lat: number, lng: number): string {
  let address: string;
  const geocoder = new google.maps.Geocoder();
  const latlng = new google.maps.LatLng(lat, lng);
  const request =  google.maps.GeocoderRequest = {
    location: latlng
  };
  geocoder.geocode(request, (results, status) => {
    this.zone.run(() => {
      address = results[0].formatted_address;
    });
  });
  return address;
}

}
interface IMarker {
  lat: number;
  lng: number;
  label: string;
}
interface ILocation {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  markers: Array<IMarker>;
}
