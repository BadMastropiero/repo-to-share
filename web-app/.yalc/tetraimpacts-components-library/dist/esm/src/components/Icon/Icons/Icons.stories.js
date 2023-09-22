import { jsx as _jsx } from "react/jsx-runtime";
import Icon from '../Icon';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Blog, CheckMark, Close, Communication, Error, Facebook, Favorite, Forum, Graph, Home, Info, Instagram, Linkedin, MailEnvelope, MailSend, Person, People, PhoneInCall, Search, Send, Share, Style, SwitchAccount, Task, Tetraimpacts, Timer, Translate, Twitter, ViewCarrousel, Visibility, Warning, } from '..';
export default {
    title: 'Icons/All',
    component: Icon,
};
export const Base = args => {
    const { primary, disabled, height, width, color, sizePreset } = args;
    const AllIconsArray = [
        ArrowDown,
        ArrowLeft,
        ArrowRight,
        ArrowUp,
        Blog,
        CheckMark,
        Close,
        Communication,
        Error,
        Facebook,
        Favorite,
        Forum,
        Graph,
        Home,
        Info,
        Instagram,
        Linkedin,
        MailEnvelope,
        MailSend,
        Person,
        People,
        PhoneInCall,
        Search,
        Send,
        Share,
        Style,
        SwitchAccount,
        Task,
        Tetraimpacts,
        Timer,
        Translate,
        Twitter,
        ViewCarrousel,
        Visibility,
        Warning,
    ];
    return (_jsx("div", Object.assign({ style: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'flex-start',
            alignItems: 'center',
        } }, { children: AllIconsArray.map(item => (_jsx(Icon, { primary: primary, customColor: color, disabled: disabled, height: height, width: width, sizePreset: sizePreset, icon: item }, Math.random() * AllIconsArray.length))) })));
};
Base.args = {
    primary: true,
    disabled: false,
    height: undefined,
    width: undefined,
    color: undefined,
    sizePreset: undefined,
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7719&t=dCia0ciBvwS3cJuQ-4',
    },
};
//# sourceMappingURL=Icons.stories.js.map