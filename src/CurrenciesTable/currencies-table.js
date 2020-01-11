import React from 'react'
import './currencies-table.css'
import CurrenciesItem from "./currencies-item";
import { getBanksArray } from '../ServerData/constants'

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
        const items = []

        getBanksArray().forEach(bank => {
            items.push(<CurrenciesItem name={bank.name} currency={bank.currency} eachvalue={bank.value} total={bank.total} />)
        })

        return items
    }
}

export default CurrenciesTable