type SocialNetwork = {
  name: string;
  url: string;
};

type Avatar = {
  title: string;
  url: string;
};

export interface StaffMember {
  id?: string;
  name: string;
  shortBio?: string;
  slug?: string;
  website?: string;
  contact?: SocialNetwork[];
  avatar?: Avatar;
}

export default interface IAboutUs {
  staffMembers: StaffMember[];
  summary: string;
  title: string;
  headingImage?: string;
  endPageBanner?: {
    content: string;
    imageUrl: string;
  };
}
