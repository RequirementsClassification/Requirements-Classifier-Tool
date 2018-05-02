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
	constructor(private classifierService: ClassifierService) { }

	ngOnInit() {
	}

	onGoPressed(){
		var an = this.classifierService.getClusters(this.apiKey, this.document)
		.subscribe(data => {
			console.log(data);
		}, err =>{
			alert("Please check your API key or document")
			console.log(err);
		});
	}

}
