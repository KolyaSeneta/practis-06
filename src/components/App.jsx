import { logDOM } from "@testing-library/react";
import { Component } from "react";
import SelectBasicExample from "./Select.jsx"


class App extends Component {
  state= {
    
    img: [],
    value:"1" 
  }

  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    })
    console.log(e.target.value)
    
  }
   fetchApi(){
     fetch(`https://dog.ceo/api/breeds/image/random/${this.state.value}`).then(r => r.json())
       .then(r => this.setState({
       img: r.message
     }))
     
     }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
     this.fetchApi()
    }
  
  }



  
  
  render() {
    return (
    < div >
    <SelectBasicExample changeValue = {this.changeValue} /> 
    </div >
  )
}
  

}

export default App