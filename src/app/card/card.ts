import { LinkItem } from '../link-list/link-item';

export class Card {
  url: string;
  text?: string;
  iconKey?: string;
  iconSource?: string;
  header?: string;
  title?: string;
  border?: string;
  linkList?: Array<LinkItem>;
}
