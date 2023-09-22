import { jsx as _jsx } from "react/jsx-runtime";
import { MailEnvelope, PhoneInCall, Share } from '../Icon';
import Bookmark from './Bookmark';
export default {
    title: 'Components/Bookmark',
    component: Bookmark,
    argTypes: {
        href: {
            control: {
                type: 'text',
            },
        },
    },
};
export const Base = args => {
    const { primary, text, href } = args;
    return (_jsx(Bookmark, { primary: primary, text: text, beforeIcon: Share, href: href }));
};
Base.args = {
    primary: true,
    text: 'Bookmark text',
};
export const MailBookmark = () => (_jsx(Bookmark, { primary: true, text: "info@tetraimpacts.com", beforeIcon: MailEnvelope, href: "mailto: info@tetraimpacts.com" }));
MailBookmark.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2555%3A7532&t=Yx1jzZZsTXIGvj6Z-4',
    },
};
export const PhoneBookmark = () => (_jsx(Bookmark, { primary: true, text: "+ 505-7714-1105", beforeIcon: PhoneInCall, href: "tel: + 505-7714-1105" }));
PhoneBookmark.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2555%3A7538&t=Yx1jzZZsTXIGvj6Z-4',
    },
};
export const BookmarkWithAfterIcon = () => (_jsx(Bookmark, { primary: true, text: "+ 505-7714-1105", afterIcon: PhoneInCall }));
export const BookmarkWithBothIcons = () => (_jsx(Bookmark, { primary: true, text: "+ 505-7714-1105", afterIcon: PhoneInCall, beforeIcon: MailEnvelope }));
//# sourceMappingURL=Bookmark.stories.js.map