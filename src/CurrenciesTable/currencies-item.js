import React from 'react'
import './currencies-item.css'

class CurrenciesItem extends React.Component {
    render() {
        return (
            <div className={'item-container'}>
                <div className={'bank-name'}>{this.props.name}</div>
                <div className={'bank-currency'}>{this.props.currency}</div>
                <div className={'bank-eachvalue'}>{this.props.eachvalue}</div>
                <div className={'bank-total'}>{this.props.total}</div>
            </div>
        )
    }
}

export default CurrenciesItem