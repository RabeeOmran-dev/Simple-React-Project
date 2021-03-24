
import React, { Component } from 'react';

class CardMember extends Component{

 

    render(){
  return (
      <div className="col-md-4 col-sm-6  ">
          
          <div className="card">
                <div className="card-header">
                        <img style={{maxWidth:'100%'}}  src={this.props.img} alt=''/>
                </div>
                <div className='card-body' style={{backgroundColor: this.props.website ? "white" : "green"}}>
                        <h2>{this.props.name}</h2>
                        <h6>{this.props.phone}</h6>
                        <h5>{this.props.position}</h5>
                        <div>{ this.props.email ?this.props.email :'there is no email!'}</div>
                        <div className={this.props.website==null ? 'bg-blue' : 'bg-white'}>{this.props.website}</div>
                </div>

         </div>
         
           
      </div>
 
  );}

}

export default CardMember;