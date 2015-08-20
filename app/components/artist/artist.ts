/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View, NgIf } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { Spotify } from '../../services/spotify';
import { status, json } from '../../utils/fetch'

@Component({
	selector: 'artist',
	viewInjector: [Spotify]
})
@View({
	directives: [NgIf],
	template: `
		<section *ng-if=artist>
			<h3>{{artist.name}}</h3>
			<img src="{{image}}">
		</section>
	`
})

export class Artist {
	artist: Object;
	service: Spotify;
	routeParam: RouteParams;
	image: string;
	constructor(service: Spotify, routeParam: RouteParams) {
		this.service = service;
		this.routeParam = routeParam;
		this.getArtist();
	}
	getArtist() {
		this.service.getArtistById(this.routeParam.params.id)
			.then(status)
			.then(json)
			.then((response) => {
				this.artist = response;
				this.image = response.images[0].url;
			})
	}
}