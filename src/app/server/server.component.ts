import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export class ServerComponent {
	serverId = 10;
	serverStatus = 'offline'
	serverTime = new Date();
	
	getServerMs() {
		let d = new Date();
		console.log (d);
		return d.getMilliseconds();
	}
	
}