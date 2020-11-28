import { OfficerContactDetails } from './OfficerContactDetails';

export interface PoliceOfficer {
  name: string;
  rank: string;
  bio: string;
  contact_details: OfficerContactDetails[];
}
