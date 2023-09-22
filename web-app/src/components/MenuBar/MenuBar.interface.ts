import {ElementHref} from 'components/ReactMarkdown/ReactMarkdown.interface';

export default interface IMenuBar {
  title?: string;
  subtitle?: string;
  options: ElementHref[];
}
