import { connect } from 'react-redux'
import { banksFetched } from "../ServerData/actions";
import MainView from "./main-view";

const mapStateToProps = (state) => {
    return {
        banks: state.banks
    }
}

const mapDispatchToProps = { banksFetched }

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainView)