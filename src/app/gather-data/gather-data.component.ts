import { Component, OnInit } from '@angular/core';
import { ClassifierService } from '../services/classifier.service';

@Component({
	selector: 'app-gather-data',
	templateUrl: './gather-data.component.html',
	styleUrls: ['./gather-data.component.css']
})

export class GatherDataComponent implements OnInit {
	apiKey: String;
	document: String;
	classified: any;
	constructor(private classifierService: ClassifierService) { }

	ngOnInit() {
	}

	onClassifyPressed(){
		this.classifierService.getClusters(this.apiKey, this.document)
		.subscribe(data => {
			this.classified = data;
		}, err =>{
			alert("Please check your API key or document")
			console.log(err);
		});
	}

}
