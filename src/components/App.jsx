import { logDOM } from "@testing-library/react";
import { Component } from "react";
import SelectBasicExample from "./Select.jsx"
import List from "./List"
import Modal from "./Modal"
import { ModalDialog } from "react-bootstrap";

class App extends Component {
  state= {
    
    img: [],
    value: "1",
    url: "",
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
  openModal = (state) => {
    this.setState({
      url: state
    })
  }
  closeModal = (e) => {
    this.setState({
      url: ""
    })
  }

  render() {
    return (
      <>
      < div >
        <SelectBasicExample changeValue={this.changeValue} /> 
          <List listImg={this.state.img} openModal={this.openModal}  />

      </div >
      <div>
         { this.state.url ? <Modal url = {this.state.url}  closeModal = {this.closeModal}  /> : null }
        </div>
        </>
    )
    
}
  

}

export default App