import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Carousel } from '.';
import { Blog, Service2 } from '../Card/Card.stories';
export default {
    title: 'Components/Carousel',
    component: Carousel,
};
export const Base = args => (_jsxs(Carousel, Object.assign({}, args, { children: [_jsx(Service2, { titleText: "Shape your project" }), _jsx(Service2, {}), _jsx(Service2, { titleText: "Shape your skills" }), _jsx(Service2, { titleText: "Shape your body" }), _jsx(Service2, { titleText: "Shape your self" })] })));
export const Blogs = () => (_jsxs(Carousel, Object.assign({ variant: "blogs", slidesWidth: 380, showControls: true, showPagination: true }, { children: [_jsx(Blog, {}), _jsx(Blog, {}), _jsx(Blog, {}), _jsx(Blog, {}), _jsx(Blog, {}), _jsx(Blog, {}), _jsx(Blog, {})] })));
export const Services = () => (_jsxs(Carousel, Object.assign({ variant: "services", showPagination: true, infinite: true, autoplayDelay: 3000 }, { children: [_jsx(Service2, { titleText: "Shape your project" }), _jsx(Service2, {}), _jsx(Service2, { titleText: "Shape your skills" }), _jsx(Service2, { titleText: "Shape your self" })] })));
Base.args = {
    disabled: false,
    variant: 'services',
};
Services.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=1119%3A4051',
    },
};
Blogs.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=1030%3A3827',
    },
};
//# sourceMappingURL=Carousel.stories.js.map