type SocialNetwork = {
  name: string;
  url: string;
};

type Avatar = {
  title: string;
  url: string;
};

export default interface IPersonCard {
  id?: string;
  name: string;
  shortBio?: string;
  slug?: string;
  website?: string;
  contact?: SocialNetwork[];
  avatar?: Avatar;
  defaultAvatar: string;
}
