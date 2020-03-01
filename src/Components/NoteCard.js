import React from 'react'
import CardDataFilter from './CardDataFilter'

class NoteCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {

      cardIndexNumber: 0
    }
  }

  previousHandle = () => {
    console.log("-",this.state.cardIndexNumber)
    this.setState({
      cardIndexNumber: this.state.cardIndexNumber -=1
    })
    if (this.state.cardIndexNumber <= 0){
      console.log("if-",this.state.cardIndexNumber)
      this.setState({cardIndexNumber: this.props.data.length-1})
    }
  }
  nextHandle = () => {
    console.log("+",this.state.cardIndexNumber)
    this.setState({
    cardIndexNumber: this.state.cardIndexNumber +=1
  })
  if (this.state.cardIndexNumber >= this.props.data.length){
    console.log("if+",this.state.cardIndexNumber)
    this.setState({cardIndexNumber: 0})
  }
}
  





  render(){
    console.log(this.state.cardIndexNumber) ;

    // const data = .map((element, index) => {
    //   return <div key={index}> {element} </div>;})}


      return(
        <div>
          <CardDataFilter  
          data={this.props.data} cardIndexNumber={this.state.cardIndexNumber}/>
          <div className="buttons-container">
              <div className="button-box">
                  <button  className="selector" onClick={event => this.previousHandle()}>Previous</button>
                  <div className="edit-buttons">
                        <button className="edit">Edit</button>
                        <button className="edit">Delete</button>
                        <button className="edit">New</button>
                  </div>
              <button className="selector"  onClick={event => this.nextHandle()}>Next</button>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default NoteCard
  
  // <button onClick={event => this.setState({value: this.state.cardIndexNumber++})}>Next</button>
