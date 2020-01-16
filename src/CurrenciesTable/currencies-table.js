import React from 'react'
import './currencies-table.css'
import CurrenciesItem from "./currencies-item";
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import MoneyIcon from '@material-ui/icons/Money';
import EuroIcon from '@material-ui/icons/Euro';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

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
                    { 
                        this.isValidData() 
                        ?
                        this.getItems() 
                        :
                        this.getWarningMessage()
                    }
            </div>
        )
    }

    getWarningMessage() {
        return (<div className={'warning'}><WarningRoundedIcon style={{ fontSize: 50 }}/> Wprowadź poprawną ilość i walutę!</div>)
    }

    isValidData() {
        const { currency, count } = this.props
        console.warn(currency)
        if(typeof currency === 'undefined' || currency === null  || count <= 0 || typeof count ==='undefined') return false
        else return true
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