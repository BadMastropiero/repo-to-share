import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from '../Typography';
import CarWrapped, { Card } from '.';
import { CardBack, CardContent, CardControls, CardFront, CardHeader, } from './CardHelpers/CardHelpers.styles';
import { Icon, Share } from '../Icon';
export default {
    title: 'Components/Card',
    component: Card,
};
export const Base = args => (_jsxs(CarWrapped, Object.assign({ width: "280px", height: "380px" }, args, { children: [_jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Shape your ideas" })) }), _jsx(CardContent, { children: _jsx(Typography, Object.assign({ colorPreset: "primary", preset: "content" }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) })] })));
export const Service = () => (_jsxs(CarWrapped, Object.assign({ width: "280px", height: "380px", variant: "service" }, { children: [_jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Shape your ideas" })) }), _jsx(CardContent, { children: _jsx(Typography, Object.assign({ colorPreset: "primary", preset: "content" }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) }), _jsx(CardControls, { children: _jsxs("div", Object.assign({ style: { display: 'flex', width: '100%', alignItems: 'center', gap: '5px' } }, { children: [_jsx(Icon, { icon: Share, primary: true, disabled: true, height: "16px", width: "16px" }), _jsx(Typography, Object.assign({ colorPreset: "disable", fontSize: "12px", lineHeight: "24px", preset: "content", "aria-label": "likes" }, { children: "9999,9999" }))] })) })] })));
export const Service2 = ({ titleText }) => (_jsxs(CarWrapped, Object.assign({ width: "900px", height: "380px", variant: "service", style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    } }, { children: [_jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h1", 
                // customPreset="serviceTitle"
                preset: "title", fontWeight: "500", colorPreset: "primary" }, { children: titleText || 'Shape your ideas' })) }), _jsx(CardContent, { children: _jsx(Typography, Object.assign({ colorPreset: "disable", preset: "content", style: { maxWidth: '500px', textAlign: 'center' } }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) })] })));
export const Blog = args => (_jsxs(CarWrapped, Object.assign({ variant: "blog", style: { width: '380px' } }, args, { children: [_jsx(CardContent, Object.assign({ style: { height: '173px' } }, { children: _jsx("img", { src: "assets/blogImage.svg", alt: "Example Blog Card SVG" }) })), _jsx(CardControls, { children: _jsxs("div", Object.assign({ style: { display: 'flex', width: '100%', alignItems: 'center', gap: '5px' } }, { children: [_jsx(Icon, { icon: Share, primary: true, disabled: true, height: "16px", width: "16px" }), _jsx(Typography, Object.assign({ colorPreset: "disable", fontSize: "12px", lineHeight: "24px", preset: "content", "aria-label": "likes" }, { children: "9999,9999" }))] })) }), _jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h3", customPreset: "serviceTitle", fontWeight: "700", fontFamily: "Roboto Flex", colorPreset: "primary", fontSize: "20px", lineHeight: "23.44px", lineNumbers: 2 }, { children: "How Tetraimpacts helps you shape yourself Your business How Tetraimpacts helps you shape yourself Your business" })) })] })));
export const Flip = () => (_jsxs(CarWrapped, Object.assign({ width: "280px", height: "380px", variant: "service", animateCardFlip: "flip" }, { children: [_jsxs(CardFront, { children: [_jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", colorPreset: "primary", fontFamily: "Roboto Flex", "aria-checked": "mixed", fontSize: "30px", lineHeight: "35.16px" }, { children: "Shape your ideas" })) }), _jsx(CardContent, { children: _jsx("img", { src: "assets/creativeThinking.svg", alt: "Example Blog Card SVG" }) })] }), _jsxs(CardBack, { children: [_jsx(CardHeader, { children: _jsx(Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Shape your ideas" })) }), _jsx(CardContent, { children: _jsx(Typography, Object.assign({ colorPreset: "primary", preset: "content", fontSize: "16px" }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) })] })] })));
Base.args = {
    disabled: false,
    variant: 'service',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2797',
    },
};
Service.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2797',
    },
};
Blog.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=146%3A13183',
    },
};
//# sourceMappingURL=Card.stories.js.map