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
var bitcoin_price_service_1 = require("./bitcoin-price.service");
var BitcoinPriceComponent = (function (_super) {
    __extends(BitcoinPriceComponent, _super);
    function BitcoinPriceComponent(bitCoinPriceService) {
        var _this = _super.call(this) || this;
        _this.bitCoinPriceService = bitCoinPriceService;
        _this.iconPath = '../../assets/img/bitcoin-icon.svg';
        return _this;
    }
    BitcoinPriceComponent.prototype.ngOnInit = function () {
        this.score = '$ ' + this.bitCoinPriceService.getBitcoinPrice().toString();
    };
    return BitcoinPriceComponent;
}(indicator_component_1.IndicatorComponent));
BitcoinPriceComponent = __decorate([
    core_1.Component({
        selector: 'bitcoin-price',
        templateUrl: './app/indicator/indicator.component.html',
        styleUrls: ['../../assets/css/indicators.css']
    }),
    __metadata("design:paramtypes", [bitcoin_price_service_1.BitcoinPriceService])
], BitcoinPriceComponent);
exports.BitcoinPriceComponent = BitcoinPriceComponent;
//# sourceMappingURL=bitcoin-price.component.js.map