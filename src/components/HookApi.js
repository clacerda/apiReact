import { Component } from 'react';
import HookApiCss from '../components/HookApi.module.css'
import HookCallApi from './HookCallApi';

class HookApi extends Component {

    state = {
      filmes: [],
    }
  
    async componentDidMount(){
      const response = await HookCallApi.get('') 
  
      this.setState({filmes: response.data})
    }
 
    render(){
      const handleSubmit = (e) => {
        e.preventDefault();
        

        
      } 
    
      const {filmes} = this.state
      return(
        <div className={HookApiCss.div_center}>
            <h1>Listar os filmes</h1>
            <form > 
            <input type="text" name="" id="" placeholder='Digite o nome do filme' />
            <button>Buscar</button>
            </form>
            

            {filmes.map(filme => (
              <li key={filme.show.id} className={HookApiCss.list}>
                <h2 className={HookApiCss.title}>Título do filme: {filme.show.name}  </h2>
                
                <p><a href={filme.show.url}>{filme.show.url}</a></p>
              </li>
            ))}
        </div>
      )
    }
  }


  export default HookApi;