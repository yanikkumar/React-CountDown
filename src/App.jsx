import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '<Date You Want to Count On />',
            newDeadline: ''
        }
    }

    changeDeadline() {
        // never update or mutate state directly do this in this way only by creating object to make app bug free
        console.log('state', this.state)
        this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className='App'>
                <div className='App-title'>
                    Countdown to {this.state.deadline}
                </div>
                <Clock
                    deadline={this.state.deadline}
                />
                <div>
                    <Form inline={true}>
                        <FormControl
                            className='deadline-input'
                            placeholder='Month, Date, Year'
                            onChange={event => this.setState({ newDeadline: event.target.value })}
                        />
                    </Form>
                    <Button className='btn btn-success' onClick={() => this.changeDeadline()}>Sumbit</Button>
                </div>
            </div>
        )
    }
}

export default App;