import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList(){
        if(localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    onAddOrEdit = (data) =>{
        var list = this.returnList()
        // console.log(this.state.currentIndex)
        // if create operation then currentindex is set to -1
        if(this.state.currentIndex===-1)
            list.push(data)
        // else (update) then
        else
        console.log(data)
            list[this.state.currentIndex]=data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({list,currentIndex:-1})
    }

    handleEdit = index =>{
        this.setState({
            currentIndex:index
        })
    }

    handleDelete = index =>{
        var list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({list,currentIndex:-1})
        
    }

    render() {
        return (
            <div>
                <TransactionForm 
                onAddOrEdit={this.onAddOrEdit}
                currentIndex={this.state.currentIndex}
                list ={this.state.list} />
                <hr />
               <table>
                   <thead>
                       <th>Accno</th>
                       <th>Bname</th>
                       <th>Amount</th>
                   </thead>
                   <tbody>
                       {this.state.list.map((item, index)=>{
                           return <tr key={index}>
                               <td>{item.accno}</td>
                               <td>{item.bname}</td>
                               <td>{item.amount}</td>
                               <td><button onClick={()=>this.handleEdit(index)}>Edit</button></td>
                               <td><button onClick={()=>this.handleDelete(index)}>Delete</button></td>
                           </tr>
                       })}
                   </tbody>
               </table>

            </div>
        )
    }
}

export default TransactionList;
