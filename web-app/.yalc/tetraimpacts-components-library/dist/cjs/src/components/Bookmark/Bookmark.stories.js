"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkWithBothIcons = exports.BookmarkWithAfterIcon = exports.PhoneBookmark = exports.MailBookmark = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = require("../Icon");
const Bookmark_1 = __importDefault(require("./Bookmark"));
exports.default = {
    title: 'Components/Bookmark',
    component: Bookmark_1.default,
    argTypes: {
        href: {
            control: {
                type: 'text',
            },
        },
    },
};
const Base = args => {
    const { primary, text, href } = args;
    return ((0, jsx_runtime_1.jsx)(Bookmark_1.default, { primary: primary, text: text, beforeIcon: Icon_1.Share, href: href }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    text: 'Bookmark text',
};
const MailBookmark = () => ((0, jsx_runtime_1.jsx)(Bookmark_1.default, { primary: true, text: "info@tetraimpacts.com", beforeIcon: Icon_1.MailEnvelope, href: "mailto: info@tetraimpacts.com" }));
exports.MailBookmark = MailBookmark;
exports.MailBookmark.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2555%3A7532&t=Yx1jzZZsTXIGvj6Z-4',
    },
};
const PhoneBookmark = () => ((0, jsx_runtime_1.jsx)(Bookmark_1.default, { primary: true, text: "+ 505-7714-1105", beforeIcon: Icon_1.PhoneInCall, href: "tel: + 505-7714-1105" }));
exports.PhoneBookmark = PhoneBookmark;
exports.PhoneBookmark.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2555%3A7538&t=Yx1jzZZsTXIGvj6Z-4',
    },
};
const BookmarkWithAfterIcon = () => ((0, jsx_runtime_1.jsx)(Bookmark_1.default, { primary: true, text: "+ 505-7714-1105", afterIcon: Icon_1.PhoneInCall }));
exports.BookmarkWithAfterIcon = BookmarkWithAfterIcon;
const BookmarkWithBothIcons = () => ((0, jsx_runtime_1.jsx)(Bookmark_1.default, { primary: true, text: "+ 505-7714-1105", afterIcon: Icon_1.PhoneInCall, beforeIcon: Icon_1.MailEnvelope }));
exports.BookmarkWithBothIcons = BookmarkWithBothIcons;
//# sourceMappingURL=Bookmark.stories.js.map