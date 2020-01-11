import React from 'react'
import './main-view.css'
import Menu from '../Menu/menu'

class MainView extends React.Component {
    render() {
        return (
            <div>
            <div className={'title'}>Porównywarka kursów walut</div>
                <div className={'app-container'}>
                    <Menu />
                </div>
            </div>
        )
    }
}

export default MainView