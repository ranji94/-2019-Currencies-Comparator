import React from 'react'
import './main-view.css'
import Menu from '../Menu/menu'
import CurrenciesTable from "../CurrenciesTable/currencies-table";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currency: 'USD', count: 1 }
    }  

    render() {
        return (
            <div>
            <div className={'title'}>Porównywarka kursów walut</div>
                <div className={'app-container'}>
                    <Menu getData={this.props.getData} currencyCallback={this.setCurrency} countCallback={this.setCount}/>
                </div>
                <div className={'app-container'}>
                    <CurrenciesTable banks={this.props.banks} currency={this.state.currency} count={this.state.count}/>
                </div>
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