import consts from './ActionTypes';

export function toggleLoader(val) {
  return ((dispatch) => {
    dispatch({
      type: consts.TOGGLE_LOADER_MODAL,
      show: val
    })
  });
}

/**
 * @description gets the progress for a specific process.
 * @param {string} processName - label name for the specific process that the progress is being loaded for.
 * @param {number} progress - calculated progress of a specific process.
 */
export function sendProgressForKey(processName, progress) {
  return (dispatch => {
    dispatch({
      type: consts.UPDATE_PROGRESS,
      processName,
      progress
    });
  });
}

/**
 * Action to show the cancel button on the loader modal
 * @param {boolean} showCancelButton 
 */
export function toggleWaitingTooLongButton(showCancelButton) {
  return ((dispatch, getState) => {
    dispatch({
      type: consts.TOGGLE_CANCEL_LOADING_BUTTON,
      showCancelButton
    })
  })
}
