import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Plan from './plan'

 class App extends Component {
  state ={
    items:[],
    text:""
  }
  addNew = e =>{
    this.setState({text: e.target.value  })
  }
  addIt = e =>{
    if (this.state.text !=="") {
      const items= [...this.state.items, this.state.text];
      this.setState({items: items, text: ""});
    }

  }
  handelDelete = id =>
  {
    console.log("Deleted", id)
    const tempitems = [...this.state.items]
   
    const items = tempitems.filter((element, i)=>{
      return i!== id
    })
    
    this.setState({items: items});
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 mx-auto text-white shadow-lg px-3">
              <h1 className="text-center">Do It Now</h1>
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="To do tasks..." 
                 value={this.state.text} onChange={this.addNew} />
                </div>
                <div className="col-2">
                <button className="btn btn-warning px-4 font-weight-bold"
                onClick={this.addIt}>Add</button>
                </div>

                <div className="container-fluid">
                  <ul className="list-unstyled row m-5">
                    {
                      this.state.items.map((value,i)=>{
                        return <Plan value={value} key={i} id={i} sendData={this.handelDelete} />
                      })
                    }
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
export default App
