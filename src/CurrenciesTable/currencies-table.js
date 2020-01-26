import React from 'react'
import './currencies-table.css'
import CurrenciesItem from "./currencies-item";
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import MoneyIcon from '@material-ui/icons/Money';
import EuroIcon from '@material-ui/icons/Euro';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import '../Lib/animate.css'

class CurrenciesTable extends React.Component {
    render() {
        return(
            <div className={'table'}>
                    <div className={'table-header'}>
                        <div className={'bank-name'}>Nazwa banku <AccountBalanceTwoToneIcon /></div>
                        <div className={'bank-currency'}>Waluta <EuroIcon /></div>
                        <div className={'bank-eachvalue'}>Kurs <MoneyIcon /></div>
                        <div className={'bank-total'}>Całkowita suma <AccountBalanceWalletIcon /></div>
                    </div>
                    { this.getItems() }
            </div>
        )
    }

    getWarningMessage () {
        return (<div className={'warning'}><WarningRoundedIcon style={{ fontSize: 50 }}/> Wprowadź poprawną ilość i walutę!</div>)
    }

    isValidData () {
        const { currency, count } = this.props
        console.warn(currency)
        if(typeof currency === 'undefined' || currency === null  || count <= 0 || typeof count ==='undefined' ) return false
        else return true
    }

    getItems () {
        const { banks, currency, count } = this.props
        const items = []

        console.log(banks)

        if(typeof banks === 'undefined') {
            console.warn('TABLICA NIEZDEFINOWANIA')
        } 
        else {
            banks.forEach(myFunction); 
            function myFunction(item, index) 
            { 
                const totalRounded = Math.round(item.rate * count * 100)/100
                const eachRounded = Math.round(item.rate * 100)/100
                items.push(<CurrenciesItem key={index} name={item.source} currency={currency} eachvalue={eachRounded} total={totalRounded + ' PLN'} />)
            }
        }

        if (this.isValidData())
        {
            return items
        }
        else
        {
            return this.getWarningMessage()
        }
    }
}

export default CurrenciesTable