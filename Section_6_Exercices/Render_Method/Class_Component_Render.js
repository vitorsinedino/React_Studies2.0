import React from 'react';
import ReactDOM from 'react-dom';

class UserForm extends React.Component{
    renderMethod = () => {
        return (
            <div>
                <form>
                    <label>Enter a Username:</label>
                    <input/>
                </form>
            </div>
        );
    }

    render() {
        return (
            <this.renderMethod/>
        );
    }
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));