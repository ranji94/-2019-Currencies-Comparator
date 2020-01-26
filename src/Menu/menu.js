import React from 'react'
import Fab from '@material-ui/core/Fab'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import CompareArrowsRoundedIcon from '@material-ui/icons/CompareArrowsRounded';
import FormControl from "@material-ui/core/FormControl";
import Tooltip from '@material-ui/core/Tooltip'
import SearchIcon from '@material-ui/icons/Search';
import { currencies } from '../constants'
import './menu.css'

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {currency: 'CHF', count: ''}
    }

    render() {
        const handleChange = (e, value) => {
            this.setState({ currency: value })
        };

        return (
            <div>
                <h2 className={'header'}><SearchIcon /> Wprowadź dane do wyszukania </h2>
                <div className={'input'}>
                    <div className={'count'}>
                        <TextField id="outlined-basic" label="Ilość" variant="outlined" value={this.state.count} onChange={(event) => this.handleCountChange(event)} />
                    </div>
                    <div className={'currency'}>
                        <FormControl variant={"outlined"}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={currencies}
                            getOptionLabel={currency => currency}
                            value={this.state.currency} 
                            onChange={(event, value) => handleChange(event, value)} 
                            style={{ width: 300 }}
                            renderInput={params => (
                        <TextField {...params} label="Waluta" variant="outlined" fullWidth />
                        )}/>
                        </FormControl>
                    </div>
                    <div className={'submit'}>
                        <Tooltip title="Porównaj" aria-label="compare">
                            <Fab variant={"contained"} color={"primary"} onClick={this.getComparedData.bind(this)}>
                                <CompareArrowsRoundedIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }

    handleCountChange(event) {
        this.setState({ count: event.target.value })
    }

    getComparedData = () => {
        const { getData } = this.props
        getData(this.state.currency, this.state.count)
        this.props.currencyCallback(this.state.currency)
        this.props.countCallback(this.state.count)
        this.props.collapseCallback()
    }
}

export default Menu