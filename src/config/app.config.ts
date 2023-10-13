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
  ownerRoles: ['HR Manager'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Applicant', 'HR Assistant', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View company information'],
  ownerAbilities: ['Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ecd7c9d0-fe8d-4cad-ab69-cbf81db471e6',
};
