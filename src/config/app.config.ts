interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Content Moderator'],
  tenantName: 'Organization',
  applicationName: 'Review It',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read media and genre information',
    'Create and manage reviews',
    'Read user and organization information',
    'Cannot edit or delete any information',
  ],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage reviews', 'Manage media', 'Manage genres'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c0739885-a2ae-4074-a1b2-d01a035c3449',
};
