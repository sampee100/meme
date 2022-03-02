import React, { Component } from 'react'
import "../css/Section.css"

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      text1: "",
      text2: "",
      text1Active: false,
      top1: 100,
      left1: 180,
      top2: 500,
      left2: 180,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.prev !== this.props.prev) {
      console.log("alalalal")
      this.setState({ text1: "", text2: " " })
    }
  }

  async componentDidMount() {
    const response = await fetch('https://api.imgflip.com/get_memes')
    const data = await response.json();
    this.setState({ data: data.data });
  }

  loadImage() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "black"
    var img = document.createElement("img")
    img.setAttribute('crossorigin', 'anonymous');
    // img.src=process.env.PUBLIC_URL + "/meme.jpg"
    img.src = this.state.data.memes[this.props.next].url

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 600, 600)
      ctx.font = "50px Georgia";
      ctx.fillText(this.state.text1, this.state.left1, this.state.top1)
      ctx.fillText(this.state.text2, this.state.left2, this.state.top2)
    }
  }

  download() {
    var canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d")
    var image = canvas.toDataURL();
    // console.log(image)
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
  }

  render() {
    return (
      <div className="Section">
        <div className="textInput">
          <div className="text1">
            <label>text 1</label>
            <input type="text" value={this.state.text1} onClick={() => this.setState({text1Active: true })} onChange={(event)=>this.setState({ text1: event.target.value})} />
          </div>
          <div className="text2">
            <label>text 2</label>
            <input type="text" value={this.state.text2} onClick={()=>this.setState({text1Active: false })} onChange={(event)=>this.setState({ text2: event.target.value})} />
          </div>
        </div>
        <div className="imgSection">
          <canvas id="canvas" width={600} height={600} >
            {document.getElementById('canvas') ? this.loadImage() : ""}
          </canvas>
        </div>

        <div className="buttons">
          <button className="up" onClick={this.state.text1Active ? () => this.setState({ top1: this.state.top1 - 2 }) : () => this.setState({ top2: this.state.top2 - 5 })}>^ UP</button>
          <button className="down" onClick={this.state.text1Active ? () => this.setState({ top1: this.state.top1 + 2 }) : () => this.setState({ top2: this.state.top2 + 5 })}>v DOWN </button>
          <button className="left" onClick={this.state.text1Active ? () => this.setState({ left1: this.state.left1 - 2 }) : () => this.setState({ left2: this.state.left2 - 5 })}>{`<`} LEFT</button>
          <button className="right" onClick={this.state.text1Active ? () => this.setState({ left1: this.state.left1 + 2 }) : () => this.setState({ left2: this.state.left2 + 5 })}>{`>`} RIGHT</button>
          <button className="saveMeme" onClick={() => this.download()}>Save meme</button>
        </div>
      </div>
    )
  }
}
export default Section