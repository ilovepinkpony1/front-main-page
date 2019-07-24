import {
  SELECT_UNSELECT_ITEM,
  SET_SELECTED_NUMBER,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_WIN_POINTS,
  SET_TO_ZERO_WIN_POINTS
} from './actions';

const initialState = {
  menuSelectedItems: [false, false, false, false],
  gameSelectedNumbers: [[], [], [], [], []],
  winNumbersCombinations: null,
  gamePlayedOnce: false,
  openModalStatus: false,
  winPoints: 0
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
            card.splice(card.indexOf(action.payload.number), 1);
          }
          return card;
        })
      };
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

  [OPEN_MODAL]: state => {
    return {
      ...state,
      openModalStatus: true
    };
  },

  [CLOSE_MODAL]: state => {
    return {
      ...state,
      openModalStatus: false
    };
  },

  [SET_WIN_POINTS]: (state, action) => {
    return {
      ...state,
      winPoints: action.payload.count
    };
  },

  [SET_TO_ZERO_WIN_POINTS]: state => {
    return {
      ...state,
      winPoints: 0
    };
  }
};

export function reducer(state = initialState, action) {
  const handler = actionsHandler[action.type];

  return handler ? handler(state, action) : state;
}
