import { connect } from 'react-redux';
import HorizontalMenu from './HorizontalMenu';
import { selectUnselectItem } from '../../../redux/actions';

function mapStateToProps(state) {
  return {
    itemsStatus: state.menuSelectedItems,
    openModalStatus: state.openModalStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchStatus: (index) => dispatch(selectUnselectItem(index)),
  }
}

const HorizontalMenuHandler = connect(mapStateToProps, mapDispatchToProps)(HorizontalMenu);

export default HorizontalMenuHandler;