/* eslint-disable no-undef */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete' && /^http/.test(tab?.url)) {
		{
			chrome.scripting
				.executeScript({
					target: { tabId },
					files: ['./content.js'],
				})
				.then(() =>
					console.log('Successfully Injected Script on Line 6')
				)
				.catch((err) => console.log(err));
		}
	}
});