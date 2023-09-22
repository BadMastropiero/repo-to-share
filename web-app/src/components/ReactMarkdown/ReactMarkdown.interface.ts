interface IReactMarkdown {
  content: string;
  setIndexContent?: (list: {id: string; title: string}[]) => void;
}

export type ElementHref = {id: string; title: string; type?: string};

export default IReactMarkdown;
