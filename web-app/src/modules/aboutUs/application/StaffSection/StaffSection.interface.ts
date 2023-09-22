type SocialNetwork = {
  name: string;
  url: string;
};

type Avatar = {
  title: string;
  url: string;
};

export interface IStaffMember {
  defaultAvatar: string;
  staffMembers: {
    id?: string;
    name: string;
    shortBio?: string;
    slug?: string;
    website?: string;
    contact?: SocialNetwork[];
    avatar?: Avatar;
  }[];
}
