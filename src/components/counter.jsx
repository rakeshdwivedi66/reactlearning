//import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';
//import { findRenderedComponentWithType } from 'react-dom/test-utils';

class Counter1 extends Component {

   /*  state ={
       value : this.props.counter.value,
       imageUrl: 'http://picsum.photos/200',
       tags : ["tag1","tag2","tag3"]
    };
 */
   /*  constructor(){
        super();
        console.log("constructur",this);
       this.handleIncrement = this.handleIncrement.bind(this);

    } */

    styles = {
       fontSize : '5px',
       fontWeight : 'bold'
      
    };

   /*  handleIncrement = (product) => {
        console.log('increment button clicked',product);

        this.setState({
           value: this.state.value +1
        })


    } */

   /*  doHandleIncrement = () => {
        this.handleIncrement({id : 1})
    } */

   /*  handleDecrement = () => {
        console.log('Decrement button clicked!',this.state.value)

        this.setState({
            value: this.state.value -1 
        })
    } */

    renderTags(){
        if(this.state.tags.length === 0)
              return <p>There are no Tags to display!</p>

        return (<ul>
        {this.state.tags.map(tag =>  <li key={tag}>{tag }</li>) }
        </ul>);
        
    }
  
    render() { 
         console.log('props',this.props);
      
        return (
        <div>
            <h4>{this.props.counter.id}</h4>
            <span   className="badge p-2 m-2  bg-info">{this.props.counter.name}</span>
            <span   className={ this.getBadgeClasses() }>{this.formatCount()}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm  m-2">+</button>
            <button onClick={ () => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm  m-2">-</button> 
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Remove</button>
            

           {/*  {this.state.tags.length === 0 && 'Please create a new Tag!'}
            {this.renderTags()} */}
			
            </div>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge bg-warning m-2";
        if(this.props.counter.value === 0){
            classes = "badge bg-warning m-2";
        }
        else
        classes = "badge bg-success m-2";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? <span>0</span>: value;
    }
}
 
export default Counter1;