export default interface ICommentsBox {
  comments?: {
    id: string;
    author: {
      name: string;
      avatar?: string | null;
    };
    date: {day: number; month: number; year: number};
    content: string;
  }[];
  total: number;
  sendComment?: (body: string) => boolean | void;
}
