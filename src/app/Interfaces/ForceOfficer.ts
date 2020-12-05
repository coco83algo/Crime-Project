import { OfficerContactDetails } from './OfficerContactDetails';

export interface ForceOfficer {
  name: string;
  rank: string;
  bio: string;
  contact_details: OfficerContactDetails[];
}
