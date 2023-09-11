import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

class App extends Component {
    state = {advice: ''}
    
    componentDidMount() {
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                this.setState({
                    advice: response.data.slip.advice
                }) 
                return response.data.slip.advice
            })
            .catch(error =>{
                console.log(error)
            })    
    }    

    render() {
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{this.state.advice}</h1>
                    <a className='tweet' target='_blank' rel='noreferrer' href={`https://twitter.com/intent/tweet?text=${this.state.advice}`}>
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>new advice!</span>
                    </button>
                </div>
            </div>
        )
    }
}


export default App
