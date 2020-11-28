import { EngagementMethods } from './EngagementMethods';

export interface PoliceDetails {
  id: string;
  name: string;
  telephone: string;
  description: string;
  url: string;
  methods: EngagementMethods[];
}
