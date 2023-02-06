import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Modal extends Component {
   
    componentDidMount() {
        window.addEventListener('keydown', this.listnerClick)
        
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.listnerClick)
    }
    listnerClick = (e) => {
        if (e.code === "Escape") {
         this.props.closeModal()
     }
    }
    render(){
        return (
            <div style={{
                position: 'fixed',
                left: '0',
                top: '0',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '100',
            }
            }>
              <img src={this.props.url} alt="dog"  />
            </div>
            
         )
         
    }
}

export default Modal