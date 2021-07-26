import React, { Component } from 'react'
import '../index.css';
class TransactionForm extends Component {
    state = { 
        ...this.returnStateObject()
    }
    
    
    returnStateObject(){
        if(this.props.currentIndex === -1)
            return{
                accno: '',
                bname: '',
                amount: ''

            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
        this.setState({...this.returnStateObject()})
    }

    handleInputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });

    }

    handleSubmit = e =>{
        console.log(e)
        e.preventDefault()
        this.props.onAddOrEdit(this.state)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="accno" placeholder="Accno" value={this.state.accno} 
                onChange={this.handleInputChange}/> <br/>
                <input name="bname" placeholder="Bname" value={this.state.bname} 
                onChange={this.handleInputChange}/> <br/>
                <input name="amount" placeholder="Amount" value={this.state.amount} 
                onChange={this.handleInputChange}/> <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default TransactionForm;
