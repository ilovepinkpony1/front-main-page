import { connect } from 'react-redux';
import Modal from './Modal';
import { closeModal } from '../../redux/actions' ;

function mapStateToProps(state) {
  return {
    pointsCount: state.winPoints,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

const ModalHandler = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalHandler;