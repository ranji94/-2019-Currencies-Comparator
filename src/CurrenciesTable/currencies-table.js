import React from 'react'
import './currencies-table.css'
import CurrenciesItem from "./currencies-item";

class CurrenciesTable extends React.Component {
    render() {
        return(
            <div className={'table'}>
                    <div className={'table-header'}>
                        <div className={'bank-name'}>Nazwa banku</div>
                        <div className={'bank-currency'}>Waluta</div>
                        <div className={'bank-eachvalue'}>Kurs</div>
                        <div className={'bank-total'}>Całkowita suma</div>
                    </div>
                    { this.getItems() }
            </div>
        )
    }

    getItems() {
        const { banks, currency, count } = this.props
        const items = []
        const banksData = Object.assign({}, banks)
        console.log(banksData.rates)

        if(typeof banksData.rates === 'undefined') {
            console.warn('TABLICA NIEZDEFINOWANIA')
        } 
        else {
            banksData.rates.forEach(myFunction); 
            function myFunction(item, index) 
            { 
                const rounded = Math.round(item.mid * count * 100)/100
                items.push(<CurrenciesItem key={index} name={item.no} currency={currency} eachvalue={item.mid} total={rounded + ' PLN'} />)
            }
        }

        return items
    }
}

export default CurrenciesTable