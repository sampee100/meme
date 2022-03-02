import React, { Component } from 'react'
import "../css/Footer.css"

class Footer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      prev : 0,
      next : 1
    }
  }

  componentDidUpdate(prevProps,prevState)
  {
    if(prevState.prev!==this.state.prev && prevState.next!==this.state.next)
    {
      this.props.previousFun(this.state.prev,this.state.next);
      this.props.nextFun(this.state.prev,this.state.next);
    }
  }


  previousClick()
  {
    if(this.state.prev>0){
      this.setState({ prev : this.state.prev-1})
      this.setState({ next : this.state.next-1})
    }
  }
  
  nextClick()
  {
    if(this.state.next<100)
    this.setState({ prev : this.state.prev+1})
    this.setState({ next : this.state.next+1})
  }

  render() {
    // console.log(this.state.prev)
    // console.log(this.state.next)
    return (
      <div className="footer">
        <div>
          <button className="prev" onClick={()=>this.previousClick()}>Previous</button>
          <button className="next" onClick={()=>this.nextClick()}>Next</button>
        </div>
      </div>
    )
  }
}

export default Footer