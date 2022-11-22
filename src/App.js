import './App.css';
import api from './api'
import { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


class App extends Component {

  state = {
    filmes: [],

  }

  async componentDidMount(){
    const response = await api.get('')
   // console.log(response.data)

    this.setState({filmes: response.data})
  }

  render(){

    const {filmes} = this.state
    return(
      <div>
          <h1>Listar os filmes</h1>
          {filmes.map(filme => (
            <li key={filme.show.id}>
              <h2>Título do filme: {filme.show.name}  </h2>
              
              <p>{filme.show.url}</p>
            </li>
          ))}
      </div>
    )
  }
}

 

export default App;
