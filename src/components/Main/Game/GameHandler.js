import { connect } from 'react-redux';
import Game from './Game';
import { 
  loadNumbers, 
  setSelectedNumber, 
  setGameStatus, 
  openModal 
} from '../../../redux/actions';


function mapStateToProps(state) {
  return {
    gameSelectedNumbers: state.gameSelectedNumbers,
    winNumbersCombinations: state.winNumbersCombinations,
    gamePlayedOnce: state.gamePlayedOnce,
    openModal: state.openModal,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadNumbers: () => dispatch(loadNumbers()),
    setSelectedNumber: (index, number) => dispatch(setSelectedNumber(index, number)),
    setGameStatus: () => dispatch(setGameStatus()),
    openModal: () => dispatch(openModal()),
  }
}

const GameHandler = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameHandler;