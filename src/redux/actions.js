export const SELECT_UNSELECT_ITEM = 'select_unselect_item';
export const SET_SELECTED_NUMBER = 'set_selected_number';
export const LOAD_NUMBERS = 'load_numbers';
export const SET_GAME_STATUS = 'set_game_status';
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

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

export function loadNumbers() {
  return {
    type: LOAD_NUMBERS,
  }
}

export function setGameStatus() {
  return {
    type: SET_GAME_STATUS,
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
