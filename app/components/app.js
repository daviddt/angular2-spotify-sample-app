/// <reference path="../../typings/_custom.d.ts" />
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
var search_1 = require('../components/search/search');
var artist_1 = require('../components/artist/artist');
var App = (function () {
    function App() {
        this.title = 'App title';
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink, router_1.RouterOutlet],
            template: "\n\t\t<header>\n\t\t\t<nav>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [router-link]=\"['/search']\">Search</a>\n\t\t\t\t\t</li>\t\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t\t\n\t\t<main>\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<router-outlet></router-outlet>\n\t\t</main>\n\t"
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/search' },
            { path: '/search', as: 'search', component: search_1.Search },
            { path: '/artist/:id', as: 'artist', component: artist_1.Artist }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
