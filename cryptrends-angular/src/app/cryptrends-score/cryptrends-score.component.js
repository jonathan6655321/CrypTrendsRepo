"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var indicator_component_1 = require("../indicator/indicator.component");
var cryptrends_score_service_1 = require("./cryptrends-score.service");
var CryptrendsScoreComponent = (function (_super) {
    __extends(CryptrendsScoreComponent, _super);
    function CryptrendsScoreComponent(cryptendsScoreService) {
        var _this = _super.call(this) || this;
        _this.cryptendsScoreService = cryptendsScoreService;
        _this.iconPath = '../../assets/img/cryptrends-icon.svg';
        return _this;
    }
    CryptrendsScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cryptendsScoreService.getCryptrendsScore()
            .then(function (data) { return _this.score = data.toString(); });
    };
    return CryptrendsScoreComponent;
}(indicator_component_1.IndicatorComponent));
CryptrendsScoreComponent = __decorate([
    core_1.Component({
        selector: 'cryptrends-score',
        templateUrl: './app/indicator/indicator.component.html',
        styleUrls: ['./assets/css/indicators.css']
    }),
    __metadata("design:paramtypes", [cryptrends_score_service_1.CryptrendsScoreService])
], CryptrendsScoreComponent);
exports.CryptrendsScoreComponent = CryptrendsScoreComponent;
//# sourceMappingURL=cryptrends-score.component.js.map