// a name for every URL pattern
const PageNames = {
  CLASS_MGMT_PAGE: 'CLASS_MGMT_PAGE',
  CLASS_EDIT_MGMT_PAGE: 'CLASS_EDIT_MGMT_PAGE',
  CLASS_ENROLL_MGMT_PAGE: 'CLASS_ENROLL_MGMT_PAGE',
  USER_MGMT_PAGE: 'USER_MGMT_PAGE',
  CONTENT_MGMT_PAGE: 'CONTENT_MGMT_PAGE',
  DATA_EXPORT_PAGE: 'DATA_EXPORT_PAGE',
  SCRATCHPAD: 'SCRATCHPAD',
};

// modal names
const Modals = {
  CREATE_CLASS: 'CREATE_CLASS',
  DELETE_CLASS: 'DELETE_CLASS',
  EDIT_CLASS_NAME: 'EDIT_CLASS_NAME',
  REMOVE_USER: 'REMOVE_USER',
  CONFIRM_ENROLLMENT: 'CONFIRM_ENROLLMENT',

  CREATE_USER: 'CREATE_USER',
  EDIT_USER: 'EDIT_USER',
};

// content import/export wizard pages
const ContentWizardPages = {
  CHOOSE_IMPORT_SOURCE: 'CHOOSE_IMPORT_SOURCE',
  IMPORT_NETWORK: 'IMPORT_NETWORK',
  IMPORT_LOCAL: 'IMPORT_LOCAL',
  EXPORT: 'EXPORT',
};

const TaskTypes = {
  REMOTE_IMPORT: 'remoteimport',
  LOCAL_IMPORT: 'localimport',
  LOCAL_EXPORT: 'localexport',
};

const TaskStatuses = {
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
};

module.exports = {
  PageNames,
  Modals,
  ContentWizardPages,
  TaskTypes,
  TaskStatuses,
};
