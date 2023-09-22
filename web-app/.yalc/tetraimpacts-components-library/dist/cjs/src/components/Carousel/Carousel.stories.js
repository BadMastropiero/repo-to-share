"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = exports.Blogs = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const Card_stories_1 = require("../Card/Card.stories");
exports.default = {
    title: 'Components/Carousel',
    component: _1.Carousel,
};
const Base = args => ((0, jsx_runtime_1.jsxs)(_1.Carousel, Object.assign({}, args, { children: [(0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your project" }), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your skills" }), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your body" }), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your self" })] })));
exports.Base = Base;
const Blogs = () => ((0, jsx_runtime_1.jsxs)(_1.Carousel, Object.assign({ variant: "blogs", slidesWidth: 380, showControls: true, showPagination: true }, { children: [(0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Blog, {})] })));
exports.Blogs = Blogs;
const Services = () => ((0, jsx_runtime_1.jsxs)(_1.Carousel, Object.assign({ variant: "services", showPagination: true, infinite: true, autoplayDelay: 3000 }, { children: [(0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your project" }), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, {}), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your skills" }), (0, jsx_runtime_1.jsx)(Card_stories_1.Service2, { titleText: "Shape your self" })] })));
exports.Services = Services;
exports.Base.args = {
    disabled: false,
    variant: 'services',
};
exports.Services.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=1119%3A4051',
    },
};
exports.Blogs.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=1030%3A3827',
    },
};
//# sourceMappingURL=Carousel.stories.js.map