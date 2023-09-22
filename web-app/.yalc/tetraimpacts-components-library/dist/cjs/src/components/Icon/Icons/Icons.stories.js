"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("../Icon"));
const __1 = require("..");
exports.default = {
    title: 'Icons/All',
    component: Icon_1.default,
};
const Base = args => {
    const { primary, disabled, height, width, color, sizePreset } = args;
    const AllIconsArray = [
        __1.ArrowDown,
        __1.ArrowLeft,
        __1.ArrowRight,
        __1.ArrowUp,
        __1.Blog,
        __1.CheckMark,
        __1.Close,
        __1.Communication,
        __1.Error,
        __1.Facebook,
        __1.Favorite,
        __1.Forum,
        __1.Graph,
        __1.Home,
        __1.Info,
        __1.Instagram,
        __1.Linkedin,
        __1.MailEnvelope,
        __1.MailSend,
        __1.Person,
        __1.People,
        __1.PhoneInCall,
        __1.Search,
        __1.Send,
        __1.Share,
        __1.Style,
        __1.SwitchAccount,
        __1.Task,
        __1.Tetraimpacts,
        __1.Timer,
        __1.Translate,
        __1.Twitter,
        __1.ViewCarrousel,
        __1.Visibility,
        __1.Warning,
    ];
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'flex-start',
            alignItems: 'center',
        } }, { children: AllIconsArray.map(item => ((0, jsx_runtime_1.jsx)(Icon_1.default, { primary: primary, customColor: color, disabled: disabled, height: height, width: width, sizePreset: sizePreset, icon: item }, Math.random() * AllIconsArray.length))) })));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    height: undefined,
    width: undefined,
    color: undefined,
    sizePreset: undefined,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7719&t=dCia0ciBvwS3cJuQ-4',
    },
};
//# sourceMappingURL=Icons.stories.js.map