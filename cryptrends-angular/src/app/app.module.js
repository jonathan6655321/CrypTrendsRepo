"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var google_trends_component_1 = require("./google-trends/google-trends.component");
var google_trends_service_1 = require("./google-trends/google-trends.service");
var bitcoin_price_component_1 = require("./bitcoin-price/bitcoin-price.component");
var bitcoin_price_service_1 = require("./bitcoin-price/bitcoin-price.service");
var cryptrends_score_component_1 = require("./cryptrends-score/cryptrends-score.component");
var cryptrends_score_service_1 = require("./cryptrends-score/cryptrends-score.service");
var indicator_component_1 = require("./indicator/indicator.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            indicator_component_1.IndicatorComponent,
            google_trends_component_1.GoogleTrendsComponent,
            bitcoin_price_component_1.BitcoinPriceComponent,
            cryptrends_score_component_1.CryptrendsScoreComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
        ],
        providers: [
            google_trends_service_1.GoogleTrendsService,
            bitcoin_price_service_1.BitcoinPriceService,
            cryptrends_score_service_1.CryptrendsScoreService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map