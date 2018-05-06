import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-display-data',
	templateUrl: './display-data.component.html',
	styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
	@Input()	classifiedData: any;
	objectKeys = Object.keys;
	constructor() { }

	ngOnInit() {
		this.classifiedData = this.classifiedData.results.clusters;
		console.log(this.classifiedData);
	}

	getHash(string){
		var h = 0, l = string.length, i = 0;
		if ( l > 0 ){
			while (i < l){
				h = (h << 5) - h + string.charCodeAt(i++) | 0;
			}
		}
		return h;
	}


}
