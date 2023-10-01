/* eslint-disable no-undef */
var recorder = null;
function onAccessApproved(stream) {
	recorder = new MediaRecorder(stream);
	recorder.start();

	recorder.onstop = function () {
		stream.getTracks().forEach(function (track) {
			if (track.readyState === 'live') {
				track.stop();
			}
		});
	};

	recorder.ondataavailable = function (event) {
		let recordedBlob = event.data;
		let url = URL.createObjectURL(recordedBlob);
        console.log(url);
		let a = document.createElement('a');

		a.style.display = 'none';
		a.href = url;
		a.download = 'screen-recording.webm';

		document.body.appendChild(a);
		a.click();

		document.body.removeChild(a);

		URL.revokeObjectURL(url);
	};
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === 'request_recording') {
		console.log('requesting recording');
		sendResponse(`processed: ${message.action}`);

		navigator.mediaDevices
			.getDisplayMedia({
				audio: true,
				video: {
					width: 9999999999,
					height: 9999999999,
				},
			})
			.then((stream) => {
				onAccessApproved(stream);
			});
	}

	if (message.action === 'stop_recording') {
		console.log('stopping recording');
		sendResponse(`stopping: ${message.action}`);
		if (!recorder) return console.log('no recorder');
		recorder.stop();
	}
});

<div className="grid grid-cols-2 grid-rows-4 gap-8 grid-flow-row">
<div className="w-[300px] h-[200px] row-span-2 bg-red-500"></div>

<div class="w-[300px]  h-[200px] bg-red-500"></div>
<div class="w-[300px]  h-[200px] bg-red-500"></div>
</div>