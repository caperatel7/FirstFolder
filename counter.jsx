import React, { Component } from 'react';

class Counter extends React.Component {
    state = { 
        count: 0,
        tags: ['tag1','tag2', 'tag3']
    };

    //constructor(){
    //    super();
    //   this.handleIncrement = this.handleIncrement.bind(this);
    //}

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };
     
    render() { 
        
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button  
             onClick={() => this.handleIncrement('product')}
             className="btn btn-secondary bth-sm"
             >
                 Increment
                 </button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

formatCount() {
    const {count} = this.state;
    return count === 0 ? <h1>Zero</h1>: count;

   }
}
export default Counter;
