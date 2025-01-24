import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import SouqWaqifIcon from '../assets/SouqWaqifPin.svg';
import MIAIcon from '../assets/MIAPin.svg';
import MsheirebIcon from '../assets/MshierebPin.png';
import HIAIcon from "../assets/HIAPin.png";
import KharsaahPin from "../assets/KharsaahPin.png";
import PearlPin from "../assets/PearlPin.png";
import OldPortPin from "../assets/OldPortPin.png";
import LusailPin from "../assets/LusailPin.png";
import ZubaraCastlePin from "../assets/ZubaraCastlePin.png";
import NationalMuseumPin from "../assets/NationalMuseumPin.png";
import KataraPin from"../assets/KataraPin.png";
import QNLPin from '../assets/QNLPin.png';
import DukhanPin from '../assets/DukhanPin.png';

const MapBox = ({ 
  onSouqMarkerClick, 
  onMIAMarkerClick, 
  onMsheirebMarkerClick,
  onHIAMarkerClick,
  onKharsaahMarkerClick,
  onPearlMarkerClick,
  onDohaPortMarkerClick,
  onLusailMarkerClick,
  onZubaraMarkerClick,
  onNationalMuseumMarkerClick,
  onKataraMarkerClick,
  onQNLMarkerClick,
  onDukhanMarkerClick 
}) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [infoBoxVisible, setInfoBoxVisible] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25vd3ljcmVzdCIsImEiOiJjbTYyMWN3dm8wOTNyMmtzZWFxbzA2Nnc3In0.a625wHZknlMIk2TFinGzEw';

    try {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/snowycrest/cm4tepntm001z01qyhyumhv4n',
        center: [51.52076, 25.32034],
        zoom: 12.04,
        bearing: -17.84,
        pitch: 22.83,
        maxZoom: 22 // increase to allow for more detail
      });

      const bounds = [
        [50.60207, 24.92516], // southwest coords
        [51.88836, 26.13390] // northeast coords
      ];

      //markers with custom icons
      const markers = [
        { 
          coordinates: [51.53221, 25.28802], 
          title: 'Souq Waqif',
          icon: SouqWaqifIcon,
          onClick: onSouqMarkerClick
        },
        { 
          coordinates: [51.52615, 25.28593], 
          title: 'Msheireb',
          icon: MsheirebIcon,
          onClick: onMsheirebMarkerClick
        },
        { 
          coordinates: [51.53941, 25.29551], 
          title: 'Museum of Islamic Art',
          icon: MIAIcon,
          onClick: onMIAMarkerClick
        },
        { 
          coordinates: [51.60902, 25.27288], 
          title: 'Hamad International Airport',
          icon: HIAIcon,
          onClick: onHIAMarkerClick
        },
        { 
          coordinates: [51.54935, 25.28706], 
          title: 'Qatar National Museum',
          icon: NationalMuseumPin,
          onClick: onNationalMuseumMarkerClick
        },
        { 
          coordinates: [51.55263, 25.29992], 
          title: 'Port Of Doha',
          icon: OldPortPin,
          onClick: onDohaPortMarkerClick
        },
        { 
          coordinates: [51.52601, 25.35937], 
          title: 'Katara Cultural Village',
          icon: KataraPin,
          onClick: onKataraMarkerClick
        },
        { 
          coordinates: [51.55114, 25.37058], 
          title: 'The Pearl',
          icon: PearlPin,
          onClick: onPearlMarkerClick
        },
        { 
          coordinates: [51.52520, 25.38746], 
          title: 'Lusail Marina',
          icon: LusailPin,
          onClick: onLusailMarkerClick
        },
        { 
          coordinates: [51.04505, 25.97656], 
          title: 'Al Zubara Fort',
          icon: ZubaraCastlePin,
          onClick: onZubaraMarkerClick
        },
        { 
          coordinates: [51.014820, 25.238419], 
          title: 'Al Kharsaah Solar Farm',
          icon: KharsaahPin,
          onClick: onKharsaahMarkerClick
        },
        { 
          coordinates: [51.44164, 25.31802], 
          title: 'Qatar National Library',
          icon: QNLPin,
          onClick: onQNLMarkerClick
        },
        { 
          coordinates: [50.78434, 25.42226], 
          title: 'Dukhan Oil Rig',
          icon: DukhanPin,
          onClick: onDukhanMarkerClick
        },
      ];

      mapRef.current.on('load', () => {
        mapRef.current.setMaxBounds(bounds);
        mapRef.current.setConfigProperty('basemap', 'lightPreset', 'dawn');

        //markers with custom icons
        markers.forEach((marker) => {
          const el = document.createElement('div');
          el.className = 'marker';

          el.style.width = '50px';
          el.style.height = '60px';
          
          el.style.backgroundImage = `url(${marker.icon})`;
          el.style.backgroundSize = '100% 100%';
          el.style.backgroundRepeat = 'no-repeat';
          el.style.backgroundPosition = 'center';

          el.addEventListener('click', (e) => {
            e.stopPropagation();
            marker.onClick();
          });

          const popup = new mapboxgl.Popup({ 
            offset: 25,
            closeButton: false,
            closeOnClick: false
          })
            .setHTML(`<h3>${marker.title}</h3>`);

          new mapboxgl.Marker({
            element: el,
            anchor: 'bottom',
            offset: [0, 0]
          })
            .setLngLat(marker.coordinates)
            .setPopup(popup)
            .addTo(mapRef.current);
        });

        // adjust the 3D buildings layer
        const layers = mapRef.current.getStyle().layers;
        const labelLayerId = layers.find(
          (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;

        mapRef.current.addLayer(
          {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 2, // lower this value to show buildings from further away
            'paint': {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                15.05, ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                15.05, ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
          },
          labelLayerId
        );
      });

      mapRef.current.on('error', (e) => { 
        console.error('Mapbox GL Error:', e);
      });
  
      mapRef.current.on('style.load', () => {
        console.log('style loaded successfully');
      });
    } catch (error) {
      console.error('error initializing map:', error);
    }

    return () => mapRef.current?.remove();
  }, [
    onSouqMarkerClick, 
    onMIAMarkerClick, 
    onMsheirebMarkerClick,
    onHIAMarkerClick,
    onKharsaahMarkerClick,
    onPearlMarkerClick,
    onDohaPortMarkerClick,
    onLusailMarkerClick,
    onZubaraMarkerClick,
    onNationalMuseumMarkerClick,
    onKataraMarkerClick,
    onQNLMarkerClick,
    onDukhanMarkerClick // Add this dependency
  ]);

  return <div id="map" ref={mapContainerRef} style={{ height: '100%' }}></div>;
}

export default MapBox;