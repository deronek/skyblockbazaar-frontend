import React from 'react';
import fetchTimeout from 'fetch-timeout';

const buttonStyle = {
    backgroundColor: '#8899a6',
    border: 'none',
    color: 'white',
    padding: '12px 12px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    borderRadius: '8px',
    fontSize: 16,
    transition: 'all 0.2s',
}

var inputStyle = {
    padding: '8px 8px',
    margin: '8px 8px',
    borderRadius: '8px',
    fontSize: 16,
    backgroundColor: '#8899a6',
    color: 'white'
}

const formStyle = {
    margin: '10px 10px',
}

class NameField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', connecting: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ ...this.state, value: event.target.value });
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async handleSubmit(event) {
        try {
            this.setState({ ...this.state, connecting: true })
            await fetchTimeout("https://skyblockbazaar.herokuapp.com/api/v1/main/" + this.state.value, {}, 30000, 'API timeout')
                .then(res => res.json())
                .then(res => {
                    switch (res.status) {
                        case 200:
                            return res
                        default:
                            alert(res.message)
                            return Promise.reject()
                    }
                })
                .then(res => {
                    this.props.setMinionMap(res.minionMap.minions)
                    this.props.setProductMap(res.productMap.products)
                    this.props.setPlayerUuid(res.id)
                })
                .then(event.preventDefault())

        } catch (err) {
            console.log(err)
        } finally {
            this.setState({ ...this.state, connecting: false })
        }

    }

    render() {
        let connecting;
        if (this.state.connecting) {
            connecting = 'Connecting to the API...'
        }
        else {
            connecting = ''
        }
        return (
            <>
                <div>
                </div>
                <form onSubmit={this.handleSubmit} style={formStyle}>
                    <label>
                        Name:
                    </label>
                    <input id='playerName' type="text" value={this.state.value} onChange={this.handleChange} style={inputStyle} />
                    <input className="Button" type="submit" value="Update tables" style={buttonStyle} />
                </form>
                {connecting}
            </>
        );
    }
}

export default NameField