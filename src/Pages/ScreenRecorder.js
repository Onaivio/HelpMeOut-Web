import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import RecordingOptions from '../components/RecordingOptions';
import RecordingControls from '../components/RecordingControls';

const ScreenRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [isScreenShare, setIsScreenShare] = useState(false);
  const [allowCamera, setAllowCamera] = useState(false);
  const [allowAudio, setAllowAudio] = useState(false);
  const [allowBrowser, setAllowBrowser] = useState(false);
  const [allowMonitor, setAllowMonitor] = useState(false);
  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const [videoURL, setVideoURL] = useState(null);

  const startRecording = async () => {
    let displayMediaOptions = {
      video: {
        cursor: "always"
      },
      audio: true
    };

    if (isScreenShare) {
      if (allowMonitor) {
        displayMediaOptions.video.displaySurface = 'monitor';
      } else if (allowBrowser) {
        displayMediaOptions.video.displaySurface = 'browser';
      } else {
        displayMediaOptions.video.displaySurface = 'window';
      }
    } else {
      displayMediaOptions = false;
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
        chunks.current = [];
      };

      mediaRecorder.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing screen: ", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };

  return (
    <div style={{ minWidth: '20rem', height: '100%', paddingTop: 24, paddingBottom: 32, paddingLeft: 24, paddingRight: 24, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.10)', borderRadius: 24, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 32, display: 'inline-flex' }}>

      <div style={{ minWidth: '20rem', height: '100%', paddingTop: 24, paddingBottom: 32, paddingLeft: 24, paddingRight: 24, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.10)', borderRadius: 24, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 32, display: 'inline-flex' }}>
        <Header />
        <RecordingOptions
          allowCamera={allowCamera}
          setAllowCamera={setAllowCamera}
          allowAudio={allowAudio}
          setAllowAudio={setAllowAudio}
          allowBrowser={allowBrowser}
          setAllowBrowser={setAllowBrowser}
          allowMonitor={allowMonitor}
          setIsScreenShare={setIsScreenShare}
        />
        <RecordingControls
          recording={recording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          videoURL={videoURL}
        />
      </div>

    </div>

  );
};

export default ScreenRecorder;
