import React from 'react';

const RecordingControls = ({ recording, startRecording, stopRecording, videoURL }) => {
    return (
        <div style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
            <button style={{ alignSelf: 'stretch', width: 252, padding: 16, background: '#120B48', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex', color: '#FAFDFF', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '500', wordWrap: 'break-word' }} onClick={recording ? stopRecording : startRecording}>
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {videoURL && (
                <div>
                    <a href={videoURL} download="recording.webm">
                        <button>Download Recording</button>
                    </a>
                </div>
            )}
        </div>

  );
};

export default RecordingControls;
