"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dots = exports.CarouselControls = exports.CarouselWrapper = exports.DeckCarousel = exports.CarouselBase = exports.Carousel = void 0;
const Carousel_1 = __importDefault(require("./Carousel"));
exports.Carousel = Carousel_1.default;
const CarouselBase_1 = __importDefault(require("./CarouselBase"));
exports.CarouselBase = CarouselBase_1.default;
const DeckCarousel_1 = __importDefault(require("./DeckCarousel/DeckCarousel"));
exports.DeckCarousel = DeckCarousel_1.default;
const Carousel_styles_1 = require("./Carousel.styles");
Object.defineProperty(exports, "CarouselWrapper", { enumerable: true, get: function () { return Carousel_styles_1.CarouselWrapper; } });
Object.defineProperty(exports, "CarouselControls", { enumerable: true, get: function () { return Carousel_styles_1.CarouselControls; } });
const Dots_1 = __importDefault(require("./Dots/Dots"));
exports.Dots = Dots_1.default;
exports.default = Carousel_1.default;
//# sourceMappingURL=index.js.map