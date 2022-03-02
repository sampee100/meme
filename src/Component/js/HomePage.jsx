import React, { Component } from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

class HomePage extends Component
{
  state = {
    prev : 0,
    next : 1,
  }
  render() {
    // let prev=0;
    // let next=1;
    const previousClick=(prevR,nextR) =>
    {
      this.setState({prev:prevR,next:nextR});
    }
    const nextClick = (prevR,nextR)=>
    {
      this.setState({prev:prevR,next:nextR});
    }
    // console.log(this.state.prev)
    // console.log(this.state.next)
    return (
      <div>
        <Header />
        <Section prev={this.state.prev} next={this.state.next} />
        <Footer previousFun={previousClick} nextFun={nextClick}/>
      </div>
    )
  }
}

export default HomePage