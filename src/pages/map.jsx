import React, { useState, useCallback } from 'react';
import MapBox from '../components/mapbox';
import SouqWaqifInfo from '../components/SouqWaqifInfo';
import MIAInfo from '../components/MIAInfo';
import MsheirebInfo from '../components/MsheirebInfo';
import HIAInfo from '../components/HIAInfo';
import KharsaahInfo from '../components/KharsaahInfo';
import KataraInfo from '../components/KataraInfo';
import DohaPortInfo from '../components/DohaPortInfo';
import NationalMuseumInfo from '../components/NationalMuseumInfo';
import PearlInfo from '../components/PearlInfo';
import LusailInfo from '../components/LusailInfo';
import ZubaraInfo from '../components/ZubaraInfo';
import QNLInfo from '../components/QNLInfo';
import DukhanInfo from '../components/DukhanInfo';
import WeatherWidget from '../components/WeatherWidget';

const Map = ({ onBackClick }) => {
  const [showSouqInfo, setShowSouqInfo] = useState(false);
  const [showMIAInfo, setShowMIAInfo] = useState(false);
  const [showMsheirebInfo, setShowMsheirebInfo] = useState(false);
  const [showHIAInfo, setShowHIAInfo] = useState(false);
  const [showKharsaahInfo, setShowKharsaahInfo] = useState(false);
  const [showKataraInfo, setShowKataraInfo] = useState(false);
  const [showDohaPortInfo, setShowDohaPortInfo] = useState(false);
  const [showNationalMuseumInfo, setShowNationalMuseumInfo] = useState(false);
  const [showPearlInfo, setShowPearlInfo] = useState(false);
  const [showLusailInfo, setShowLusailInfo] = useState(false);
  const [showZubaraInfo, setShowZubaraInfo] = useState(false);
  const [showQNLInfo, setShowQNLInfo] = useState(false);
  const [showDukhanInfo, setShowDukhanInfo] = useState(false); 

  const handleBack = (e) => {
    e.preventDefault();
    onBackClick();
  };

  const handleSouqMarkerClick = useCallback(() => {
    setShowSouqInfo(true);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleMIAMarkerClick = useCallback(() => {
    setShowMIAInfo(true);
    setShowSouqInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleMsheirebMarkerClick = useCallback(() => {
    setShowMsheirebInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleHIAMarkerClick = useCallback(() => {
    setShowHIAInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleKharsaahMarkerClick = useCallback(() => {
    setShowKharsaahInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleKataraMarkerClick = useCallback(() => {
    setShowKataraInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleDohaPortMarkerClick = useCallback(() => {
    setShowDohaPortInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleNationalMuseumMarkerClick = useCallback(() => {
    setShowNationalMuseumInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handlePearlMarkerClick = useCallback(() => {
    setShowPearlInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleLusailMarkerClick = useCallback(() => {
    setShowLusailInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleZubaraMarkerClick = useCallback(() => {
    setShowZubaraInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleQNLMarkerClick = useCallback(() => {
    setShowQNLInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleDukhanMarkerClick = useCallback(() => {
    setShowDukhanInfo(true);
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
  }, []);

  const handleInfoClose = useCallback(() => {
    setShowSouqInfo(false);
    setShowMIAInfo(false);
    setShowMsheirebInfo(false);
    setShowHIAInfo(false);
    setShowKharsaahInfo(false);
    setShowKataraInfo(false);
    setShowDohaPortInfo(false);
    setShowNationalMuseumInfo(false);
    setShowPearlInfo(false);
    setShowLusailInfo(false);
    setShowZubaraInfo(false);
    setShowQNLInfo(false);
    setShowDukhanInfo(false);
  }, []);

  const handleMapClick = useCallback((e) => {
    if (!e.target.closest('.location-info') && !e.target.closest('.marker')) {
      handleInfoClose();
    }
  }, [handleInfoClose]);

  return (
    <div className="page-container map-container" onClick={handleMapClick}>
      <WeatherWidget />
      <MapBox 
        onSouqMarkerClick={handleSouqMarkerClick} 
        onMIAMarkerClick={handleMIAMarkerClick}
        onMsheirebMarkerClick={handleMsheirebMarkerClick}
        onHIAMarkerClick={handleHIAMarkerClick}
        onKharsaahMarkerClick={handleKharsaahMarkerClick}
        onPearlMarkerClick={handlePearlMarkerClick}
        onDohaPortMarkerClick={handleDohaPortMarkerClick}
        onLusailMarkerClick={handleLusailMarkerClick}
        onZubaraMarkerClick={handleZubaraMarkerClick}
        onNationalMuseumMarkerClick={handleNationalMuseumMarkerClick}
        onKataraMarkerClick={handleKataraMarkerClick}
        onQNLMarkerClick={handleQNLMarkerClick}
        onDukhanMarkerClick={handleDukhanMarkerClick}
      />
      <div className="map-overlay">
        <nav className="map-nav">
          <a href="#" onClick={handleBack} className="back-button">← Back to Home</a>
        </nav>
        <SouqWaqifInfo isVisible={showSouqInfo} onClose={handleInfoClose} />
        <MIAInfo isVisible={showMIAInfo} onClose={handleInfoClose} />
        <MsheirebInfo isVisible={showMsheirebInfo} onClose={handleInfoClose} />
        <HIAInfo isVisible={showHIAInfo} onClose={handleInfoClose} />
        <KharsaahInfo isVisible={showKharsaahInfo} onClose={handleInfoClose} />
        <KataraInfo isVisible={showKataraInfo} onClose={handleInfoClose} />
        <DohaPortInfo isVisible={showDohaPortInfo} onClose={handleInfoClose} />
        <NationalMuseumInfo isVisible={showNationalMuseumInfo} onClose={handleInfoClose} />
        <PearlInfo isVisible={showPearlInfo} onClose={handleInfoClose} />
        <LusailInfo isVisible={showLusailInfo} onClose={handleInfoClose} />
        <ZubaraInfo isVisible={showZubaraInfo} onClose={handleInfoClose} />
        <QNLInfo isVisible={showQNLInfo} onClose={handleInfoClose} />
        <DukhanInfo isVisible={showDukhanInfo} onClose={handleInfoClose} />
      </div>
    </div>
  );
};

export default Map;
