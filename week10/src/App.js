import React, { Component } from 'react';

import './App.css';
import Submit from './Submit';
import Results from './Results';

import {newWord} from './js/secretWord.js'
import {generateResult,isGameOver} from './js/wordGame.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess:'',
            secret:'',
            results:[],
            disableSubmit:false,
            disableInput:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const secret=newWord()
        //console.log('secret word:' + secret);
        this.setState({
            secret:secret
        })
    }

    handleChange(event) {
        this.setState({
            guess:event.target.value.toUpperCase(),
            disableSubmit:false
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const result = generateResult (this.state.guess, this.state.secret);
        this.setState({
            guess:'',
            results: [...this.state.results, result],
            disableSubmit:true,
            disableInput:isGameOver(result)
        })
    }

    render() {    
        return (
            <div className='App-header'>
            <form id='guess_form'> 
                <input name='guess' value={this.state.guess} onChange={this.handleChange} disabled={this.state.disableInput} /> 
                <Submit disabled={this.state.disableSubmit} onClick={this.handleSubmit}/> 
            </form>
            <Results results={this.state.results}/>
            </div> 
        );
    }
}
export default App;