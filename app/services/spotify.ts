/// <reference path="../../typings/_custom.d.ts" />

import { Injectable } from 'angular2/angular2';

@Injectable()
export class Spotify {
	url: string;
	constructor() {
		this.url = 'https://api.spotify.com/v1/';
	}
	
	public searchArtist (value) {
		return window.fetch(this.url + 'search?type=artist&q=' + value);
	}
	
	public getArtistById (id) {
		return window.fetch(this.url + 'artists/' + id);
	}
}