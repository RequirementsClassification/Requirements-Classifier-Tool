import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassifierService {

	constructor(private http: Http) { }

	getClusters(apiKey, document){
		
		var jsonData = {
			type: "chunk",
			text: document
		}

		let headers = new Headers();
		headers.append("Content-Type", "application/json");
		headers.append("X-Mashape-Key", apiKey);
		headers.append("Accept", "application/json");
		return this.http.post("https://rxnlp-core.p.mashape.com/generateClusters", jsonData, {headers: headers})
		.map(res => res.json(), err => err.json());
	}

}
