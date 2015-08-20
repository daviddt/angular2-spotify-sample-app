/// <reference path="../../../typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var spotify_1 = require('../../services/spotify');
var fetch_1 = require('../../utils/fetch');
var Artist = (function () {
    function Artist(service, routeParam) {
        this.service = service;
        this.routeParam = routeParam;
        this.getArtist();
    }
    Artist.prototype.getArtist = function () {
        var _this = this;
        this.service.getArtistById(this.routeParam.params.id)
            .then(fetch_1.status)
            .then(fetch_1.json)
            .then(function (response) {
            _this.artist = response;
            _this.image = response.images[0].url;
        });
    };
    Artist = __decorate([
        angular2_1.Component({
            selector: 'artist',
            viewInjector: [spotify_1.Spotify]
        }),
        angular2_1.View({
            directives: [angular2_1.coreDirectives, angular2_1.NgIf],
            template: "\n\t\t<section *ng-if=artist>\n\t\t\t<h3>{{artist.name}}</h3>\n\t\t\t<img src=\"{{image}}\">\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [spotify_1.Spotify, router_1.RouteParams])
    ], Artist);
    return Artist;
})();
exports.Artist = Artist;
