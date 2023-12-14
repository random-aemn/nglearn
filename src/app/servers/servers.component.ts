import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css']
})
export class ServersComponent {
	
	allowNewServer = false;
	creationStatus = 'No Server was created!';
	serverName = '';

	
	constructor() {
		setTimeout(() => {
			console.log('changing allowNewServer to ' + this.allowNewServer);
			this.allowNewServer = true;
						console.log('changing allowNewServer to ' + this.allowNewServer);

		}, 2000);
	}

	//use the 'on' naming convention for methods that react to events
	onCreateServer() { 
		this.creationStatus = 'Server was created!';
	}

	onUpdateServerName(event: any) {
		console.log(event.data);
		console.log(event.target.value);
		//console.log(event);
		this.serverName = event.target.value;

	}

}
