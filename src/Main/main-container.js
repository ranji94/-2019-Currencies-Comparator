import { connect } from 'react-redux'
import * as banks from '../ServerData/actions/banks-actions'
import MainView from "./main-view"


const mapStateToProps = (state) => {
    return state;
  };

const mapDispatchToProps = (dispatch) => {
    return {
      getData: (currency, count) => dispatch(banks.getData(currency, count))
    }
  };

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainView)