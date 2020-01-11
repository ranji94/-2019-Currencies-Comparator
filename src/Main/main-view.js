import React from 'react'
import './main-view.css'
import Menu from '../Menu/menu'
import CurrenciesTable from "../CurrenciesTable/currencies-table";

class MainView extends React.Component {
    render() {
        return (
            <div>
            <div className={'title'}>Porównywarka kursów walut</div>
                <div className={'app-container'}>
                    <Menu />
                </div>
                <div className={'app-container'}>
                    <CurrenciesTable />
                </div>
            </div>
        )
    }
}

export default MainView