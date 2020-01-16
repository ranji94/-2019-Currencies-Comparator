import React from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField'
import FormControl from "@material-ui/core/FormControl";
import { currencies } from '../constants'
import './menu.css'

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {currency: 'EUR', count: 0}
    }

    render() {
        const handleChange = event => {
            this.setState({ currency: event.target.value })
        };

        return (
            <div>
                <h2 className={'header'}>Wprowadź dane do wyszukania</h2>
                <div className={'input'}>
                    <div className={'count'}>
                        <TextField id="outlined-basic" label="Ilość" variant="outlined" value={this.state.count} onChange={(event) => this.handleCountChange(event)} />
                    </div>
                    <div className={'currency'}>
                        <FormControl variant={"outlined"}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.currency}
                            onChange={handleChange}
                        >
                            {this.getMenuItems()}
                        </Select>
                        </FormControl>
                    </div>
                    <div className={'submit'}>
                        <Button variant={"contained"} color={"primary"} onClick={this.getComparedData.bind(this)}>
                            Porównaj
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    getMenuItems() {
        const items = []
        currencies.forEach((item) => {
        items.push(<MenuItem value={item}>{item}</MenuItem>)
        })
        return items
    }

    handleCountChange(event) {
        this.setState({ count: event.target.value })
    }

    getComparedData = () => {
        const { getData } = this.props
        getData(this.state.currency, this.state.count)
        this.props.currencyCallback(this.state.currency)
        this.props.countCallback(this.state.count)
    }
}

export default Menu