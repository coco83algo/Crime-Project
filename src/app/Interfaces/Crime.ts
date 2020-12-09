import { CrimeStatus } from './CrimeStatus';

export interface Crime {
  category: string;
  persistent_id: string;
  location_subtype: string;
  id: string;
  location: string;
  context: string;
  month: Date;
  location_type: string;
  outcome_status: CrimeStatus;
}
