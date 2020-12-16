import { EngagementMethods } from './EngagementMethods';

export interface ForceDetails {
  id: string;
  name: string;
  telephone: string;
  description: string;
  url: string;
  engagement_methods: EngagementMethods[];
}
