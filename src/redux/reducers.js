import {
  SELECT_UNSELECT_ITEM,
  SET_SELECTED_NUMBER,
  LOAD_NUMBERS,
  SET_GAME_STATUS,
  OPEN_MODAL,
  CLOSE_MODAL
} from './actions';

const initialState = {
  menuSelectedItems: [false, false, false, false],
  gameSelectedNumbers: [[], [], [], [], []],
  winNumbersCombinations: null,
  gamePlayedOnce: false,
  openModal: false
};

const actionsHandler = {
  [SELECT_UNSELECT_ITEM]: (state, action) => {
    return {
      ...state,
      menuSelectedItems: state.menuSelectedItems.map((item, index) => {
        if (index === action.payload.index) {
          return item === false ? true : false;
        }
        return item;
      })
    };
  },

  [SET_SELECTED_NUMBER]: (state, action) => {
    if (
      state.gameSelectedNumbers[action.payload.index].includes(
        action.payload.number
      )
    ) {
      return {
        ...state,
        gameSelectedNumbers: state.gameSelectedNumbers.map((card, index) => {
          if (index === action.payload.index) {
            card.splice(card.indexOf(action.payload.number), 1)
          }
          return card;
        })
      }
    }

    return {
      ...state,
      gameSelectedNumbers: state.gameSelectedNumbers.map((card, index) => {
        if (index === action.payload.index) {
          card.push(action.payload.number);
        }
        return card;
      })
    };
  },

  [SET_GAME_STATUS]: state => {
    return {
      ...state,
      gamePlayedOnce: true
    };
  },

  [OPEN_MODAL]: state => {
    return {
      ...state,
      openModal: true
    };
  },

  [CLOSE_MODAL]: state => {
    return {
      ...state,
      openModal: false
    };
  }
};

export function reducer(state = initialState, action) {
  const handler = actionsHandler[action.type];

  return handler ? handler(state, action) : state;
}
