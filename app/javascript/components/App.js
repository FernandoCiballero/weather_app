import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

let city = "" //insert city name here
let key = "" //insert api key here
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={data: []}
  }
  componentDidMount(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then((response) => {return response.json()})
    .then((response)=> {
      this.setState({data: response})
      console.log(response)} )
  }
  
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App