const ActionTypes = {
  CHANGE_ONLINE_STATUS: "CHANGE_ONLINE_STATUS",
  START_LOADING: "START_LOADING",
  SHOW_MODAL_CONTAINER: "SHOW_MODAL_CONTAINER",
  SELECT_MODAL_TAB: "SELECT_MODAL_TAB",
  LOGOUT_USER: "LOGOUT_USER",
  RECEIVE_LOGIN: "RECEIVE_LOGIN",
  CHANGE_SETTINGS: "CHANGE_SETTINGS",
  GET_TOOLS_METADATA: "GET_TOOLS_METADATA",
  GET_RECENT_PROJECTS: "GET_RECENT_PROJECTS",
  RECIEVE_REPOS: "RECIEVE_REPOS",
  IMPORT_LINK: "IMPORT_LINK",
  FEEDBACK_CHANGE: "FEEDBACK_CHANGE",
  SUBMIT_FEEDBACK: "SUBMIT_FEEDBACK",
  TOGGLE_LOADER_MODAL: "TOGGLE_LOADER_MODAL",
  FEEDBACK_SUBJECT_CHANGE: "FEEDBACK_SUBJECT_CHANGE",
  TOGGLE_SUBMENU: "TOGGLE_SUBMENU",
  TOGGLE_MENU_DRAWER: "TOGGLE_MENU_DRAWER",
  SELECT_MODAL_SECTION: "SELECT_MODAL_SECTION",
  SHOW_POPOVER: "SHOW_POPOVER",
  CLOSE_POPOVER: "CLOSE_POPOVER",
  SAVE_TOOL_VIEW: "SAVE_TOOL_VIEW",
  ADD_NEW_BIBLE_TO_RESOURCES: "ADD_NEW_BIBLE_TO_RESOURCES",
  ADD_TRANSLATIONHELPS_ARTICLE: "ADD_TRANSLATIONHELPS_ARTICLE",
  SET_SAVE_PATH_LOCATION: "SET_SAVE_PATH_LOCATION",
  UPDATE_PROGRESS: "UPDATE_PROGRESS",
  TOGGLE_REMINDER: "TOGGLE_REMINDER",
  SET_REMINDER: "SET_REMINDER",
  CHANGE_CURRENT_CONTEXT_ID: "CHANGE_CURRENT_CONTEXT_ID",
  ADD_COMMENT: "ADD_COMMENT",
  ADD_VERSE_EDIT: "ADD_VERSE_EDIT",
  ADD_GROUP_DATA: "ADD_GROUP_DATA",
  CHANGE_SELECTIONS: "CHANGE_SELECTIONS",
  CLEAR_CURRENT_TOOL_DATA: "CLEAR_CURRENT_TOOL_DATA",
  STORE_MANIFEST: "STORE_MANIFEST",
  STORE_SAVE_LOCATION: "STORE_SAVE_LOCATION",
  STORE_PARAMS: "STORE_PARAMS",
  SET_CURRENT_TOOL_NAME: "SET_CURRENT_TOOL_NAME",
  SET_CURRENT_TOOL_TITLE: "SET_CURRENT_TOOL_TITLE",
  UPDATE_TOOL_SETTINGS: "UPDATE_TOOL_SETTINGS",
  SET_PROJECT_DETAIL: "SET_PROJECT_DETAIL",
  LOAD_GROUPS_INDEX: "LOAD_GROUPS_INDEX",
  LOAD_GROUPS_DATA_FROM_FS: "LOAD_GROUPS_DATA_FROM_FS",
  SET_REMINDERS_IN_GROUPDATA: "SET_REMINDERS_IN_GROUPDATA",
  TOGGLE_REMINDERS_IN_GROUPDATA: "TOGGLE_REMINDERS_IN_GROUPDATA",
  TOGGLE_SELECTIONS_IN_GROUPDATA: "TOGGLE_SELECTIONS_IN_GROUPDATA",
  TOGGLE_VERSE_EDITS_IN_GROUPDATA: "TOGGLE_VERSE_EDITS_IN_GROUPDATA",
  TOGGLE_COMMENTS_IN_GROUPDATA: "TOGGLE_COMMENTS_IN_GROUPDATA",
  CLEAR_PREVIOUS_GROUPS_DATA: "CLEAR_PREVIOUS_GROUPS_DATA",
  CLEAR_PREVIOUS_GROUPS_INDEX: "CLEAR_PREVIOUS_GROUPS_INDEX",
  CLEAR_CONTEXT_ID: "CLEAR_CONTEXT_ID",
  UPDATE_EDITED_TARGET_VERSE: "UPDATE_EDITED_TARGET_VERSE",
  SHOW_LOADING_CIRCLE: "SHOW_LOADING_CIRCLE",
  HIDE_LOADING_CIRCLE: "HIDE_LOADING_CIRCLE",
  GOGS_SERVER_ERROR: "GOGS_SERVER_ERROR",
  OPEN_ALERT_DIALOG: "OPEN_ALERT_DIALOG",
  OPEN_OPTION_DIALOG: "OPEN_OPTION_DIALOG",
  CLOSE_ALERT_DIALOG: "CLOSE_ALERT_DIALOG",
  LOGIN_LOCAL_USER: "LOGIN_LOCAL_USER",
  RESET_PROJECT_DETAIL: "RESET_PROJECT_DETAIL",
  CLEAR_RESOURCES_REDUCER: "CLEAR_RESOURCES_REDUCER",
  SET_CSV_SAVE_LOCATION: "SET_CSV_SAVE_LOCATION",
  SET_USFM_SAVE_LOCATION: "SET_USFM_SAVE_LOCATION",
  UPDATE_ONLINE_MODE:"UPDATE_ONLINE_MODE",
  // Online import actions
  SET_REPOS_DATA: "SET_REPOS_DATA",
  // project actions
  SET_PROJECT_PROGRESS_FOR_TOOL: "SET_PROJECT_PROGRESS_FOR_TOOL",
  // Home
  TOGGLE_HOME_VIEW: "TOGGLE_HOME_VIEW",
  TOGGLE_WELCOME_SPLASH: "TOGGLE_WELCOME_SPLASH",
  CHANGE_HOME_INSTRUCTIONS: "CHANGE_HOME_INSTRUCTIONS",
  GO_TO_NEXT_STEP: "GO_TO_NEXT_STEP",
  GO_TO_PREVIOUS_STEP: "GO_TO_PREVIOUS_STEP",
  TOGGLE_PROJECTS_FAB: "TOGGLE_PROJECTS_FAB",
  GET_MY_PROJECTS: "GET_MY_PROJECTS",
  OPEN_ONLINE_IMPORT_MODAL: "OPEN_ONLINE_IMPORT_MODAL",
  CLOSE_ONLINE_IMPORT_MODAL: "CLOSE_ONLINE_IMPORT_MODAL",
  UPDATE_NEXT_BUTTON_STATUS: "UPDATE_NEXT_BUTTON_STATUS"
};

export default ActionTypes;
