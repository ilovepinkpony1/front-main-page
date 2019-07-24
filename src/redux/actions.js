export const SELECT_UNSELECT_ITEM = 'select_unselect_item';
export const SET_SELECTED_NUMBER = 'set_selected_number';
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';
export const SET_WIN_POINTS = 'set_win_points';
export const SET_TO_ZERO_WIN_POINTS = 'set_to_zero_win_points';

export function selectUnselectItem(index) {
  return {
    type: SELECT_UNSELECT_ITEM,
    payload: {
      index,
    }
  }
}

export function setSelectedNumber(index, number) {
  return {
    type: SET_SELECTED_NUMBER,
    payload: {
      index,
      number,
    }
  }
}

export function openModal() {
  return {
    type: OPEN_MODAL,
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function setWinPoints(count) {
  return {
    type: SET_WIN_POINTS,
    payload: {
      count
    }
  }
}

export function unsetWinPoints() {
  return {
    type: SET_TO_ZERO_WIN_POINTS,
  }
}