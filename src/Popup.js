// src/Popup.js
import React, { useState, useEffect } from 'react';

function Popup() {
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    const port = chrome.runtime.connect({ name: 'popup' });

    const toggleRecording = () => {
      port.postMessage({ action: recording ? 'stop' : 'start' });
      setRecording(!recording);
    };

    document.getElementById('record-button').addEventListener('click', toggleRecording);

    return () => {
      port.disconnect();
    };
  }, [recording]);

  return (
    <div>
      <h2>Screen Recorder</h2>
      <button id="record-button">
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
}

export default Popup;
