import React from 'react';
import ToggleSwitch from '../components/ToggleSwitch'
import Camera from '../images/video.png';
import monitor from '../images/monitor.png';
import browser from '../images/copy.png';

const RecordingOptions = ({ allowCamera, setAllowCamera, allowAudio, setAllowAudio, allowBrowser, setAllowBrowser, allowMonitor, setIsScreenShare, isScreenShare }) => {
  return (
    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
        <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex' }}>
          {/* Screen Share Options */}
          <div style={{ alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
            <div onClick={() => setIsScreenShare(!isScreenShare)} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex', cursor: 'pointer' }}>
              <div style={{ width: 32, height: 32, position: 'relative' }}>
                <img src={monitor} alt='home' />
              </div>
              <div style={{ color: '#928FAB', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '500', wordWrap: 'break-word' }}>
                Full screen
              </div>
            </div>
            <div onClick={() => setAllowBrowser(!allowBrowser)} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex', cursor: 'pointer' }}>
              <img src={browser} alt='home' />
              <div style={{ color: '#120B48', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', wordWrap: 'break-word' }}>
                Current Tab
              </div>
            </div>
          </div>
          
          {/* Camera Option */}
          <div style={{ width: 252, paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 12, borderRadius: 12, border: '1px #100A42 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
            <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
              <img src={Camera} alt='home' />
              <div style={{ color: '#100A42', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '500', wordWrap: 'break-word' }}>
                Camera
              </div>
            </div>
            <ToggleSwitch checked={allowCamera} onChange={() => setAllowCamera(!allowCamera)} />
          </div>
          
          {/* Audio Option */}
          <div style={{ width: 252, paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 12, borderRadius: 12, border: '1px #100A42 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 123, display: 'inline-flex' }}>
            <div style={{ flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
              <img src={Camera} alt='home' />
              <div style={{ flex: '1 1 0', height: 20, justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                <div style={{ color: '#100A42', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '500', wordWrap: 'break-word' }}>
                  Audio 
                </div>
                <ToggleSwitch checked={allowAudio} onChange={() => setAllowAudio(!allowAudio)} />
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default RecordingOptions;
