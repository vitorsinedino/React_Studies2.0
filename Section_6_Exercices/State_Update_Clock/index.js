import React from 'react';
import ReactDOM from 'react-dom';

class UserForm extends React.Component{

    state = { clock: new Date().toLocaleTimeString() };
    componentDidMount() {
        setInterval(() => {
            this.setState({clock : new Date().toLocaleTimeString() })    
        }, 1000)
    }

    render() {
        return (
            <div>
                The time is: {this.state.clock}
            </div>
        );
    }
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));