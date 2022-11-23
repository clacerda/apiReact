import api from '../api'
import { Component } from 'react';
import HookApiCss from '../components/HookApi.module.css'

class HookApi extends Component {

    state = {
      filmes: [],
    }
  
    async componentDidMount(){
      const response = await api.get('') 
  
      this.setState({filmes: response.data})
    }
  
    render(){
  
      const {filmes} = this.state
      return(
        <div className={HookApiCss.div_center}>
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


  export default HookApi;