import React from 'react';

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
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit(event) {
        await fetch("http://127.0.0.1:8080/api/v1/main/" + this.state.value)
        .then( res => {
            if(res.status === 404)
            {
                alert("Player not found")
                return Promise.reject()
            }
            return res
        })
        .then(res => res.json())
        .then(res => {
            this.props.setMinionMap(res.minionMap.minions)
            this.props.setProductMap(res.productMap.products)
            this.props.setPlayerUuid(res.id)
        })
        .then(event.preventDefault());
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={formStyle}>
                <label>
                    Name:
                </label>
                <input id='playerName' type="text" value={this.state.value} onChange={this.handleChange} style={inputStyle} />
                <input className="Button" type="submit" value="Update tables" style={buttonStyle} />
            </form>
        );
    }
}

export default NameField