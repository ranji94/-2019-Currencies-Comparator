import React from 'react'
import './main-view.css'
import Menu from '../Menu/menu'
import CurrenciesTable from "../CurrenciesTable/currencies-table"
import EuroIcon from '@material-ui/icons/Euro'
import Collapse from '@material-ui/core/Collapse'
import '../Lib/animate.css'

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currency: 'USD', count: 1, collapsed: false }
    }  

    render() {
        return (
            <div>
            <div className={'title animated slideInDown'}>Porównywarka kursów walut <EuroIcon style={{ fontSize: 20 }}/></div>
                <div className={'app-container animated zoomIn'}>
                    <Menu getData={this.props.getData} currencyCallback={this.setCurrency} countCallback={this.setCount} collapseCallback={() => this.setState({ collapsed: true })}/>
                </div>
                <Collapse in={this.state.collapsed}>
                    <div className={'app-container'}>
                        <CurrenciesTable banks={this.props.banks} currency={this.state.currency} count={this.state.count}/>
                    </div>
                </Collapse>
            </div>
        )
    }

    setCurrency = (currency) => {
        this.setState({ currency })
        console.log('SET CURRENCY:',currency)
    }

    setCount = (count) => {
        this.setState({ count })
    }
}

export default MainView