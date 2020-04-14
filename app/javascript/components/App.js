import React from 'react'

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
      <div>Hello from Weather App</div>
    )
  }
}

export default App