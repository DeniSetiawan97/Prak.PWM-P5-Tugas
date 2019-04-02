self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//Proses install service worker
		
		self.skipWaiting();
		//	TODO	3.4:	Skip	waiting
});
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
		//Proses aktivasi service worker
});

self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
		//Proses fetching pada service worker dengan request url
});