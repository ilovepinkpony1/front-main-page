import { connect } from 'react-redux';
import Game from './Game';
import { 
  setSelectedNumber, 
  openModal,
  setWinPoints,
  unsetWinPoints,
} from '../../../redux/actions';


function mapStateToProps(state) {
  return {
    gameSelectedNumbers: state.gameSelectedNumbers,
    openModalStatus: state.openModalStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedNumber: (index, number) => dispatch(setSelectedNumber(index, number)),
    openModal: () => dispatch(openModal()),
    setWinPoints: (count) => dispatch(setWinPoints(count)),
    unsetWinPoints: () => dispatch(unsetWinPoints()),
  }
}

const GameHandler = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameHandler;