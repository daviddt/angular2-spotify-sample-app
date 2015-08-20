/// <reference path="../../../typings/_custom.d.ts" />

import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { Spotify } from '../../services/spotify';
import { status, json } from '../../utils/fetch'

@Component({
	selector: 'search',
	viewInjector: [Spotify]
})
@View({
	directives: [NgFor, RouterLink],
	template: `
		<label for="search-string">Search for an artist</label>
		<input #searchvalue (keyup)="searchArtist($event, searchvalue.value)"/>
		<h2>Results</h2>
		<ul>
			<li *ng-for="#artist of artists">
				<h3>{{artist.name}}</h3>
				<a [router-link]="['/artist', {id: artist.id}]">Read more about this artist</a>
			</li>
		</ul>
	`
})

export class Search {
	timeoutId: number;
	artists: Object;
	service: Spotify;
	constructor(service: Spotify) {
		this.service = service;
	}
	searchArtist($event, value) {
		if (!value) {
			return;
		}
		if (this.timeoutId) clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(() => {
			this.service.searchArtist(value)
				.then(status)
				.then(json)
				.then((response) => {
					this.setResults(response.artists.items);
				})
		}, 250);
	}
	setResults(artists: Array<Object>) {
		this.artists = artists;
	}
}