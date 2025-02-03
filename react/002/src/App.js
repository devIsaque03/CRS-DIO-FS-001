import React, { Component } from 'react'
import Twitter from './Twitter'

// Criando um novo componente App
class App extends Component {

  // State guarda as variáveis que podem mudar ao longo do tempo.
  state = {

    // Significa que algo ainda está carregando.
    loading: false,

    // Vai determinar se o componente Twitter será exibido
    actived: true
  }

  // Esse método é chamado logo após o componente ser exibido na tela.
  componentDidMount() {

    // É usado um 'setTimeout' para esperar 3 segundos
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  // Esse método é chamado quando o botão "Remover component" é clicado
  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  // É nele que definimos o que será mostrado na tela.
  render () {

    // Criando um array de objetos chamado posts
    const posts = [{
      title: 'xpto',
      description: 'foo',
    }, {
      title: 'xpto',
      description: 'foo'
    }]

    // Exibindo Conteúdo
    return (
      <div>
        <button onClick={this.onRemove}>Remover component</button>

        {/** O componente Twitter será exibido apenas se o actived for true */}
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading}/>
        )}
      </div>
    )
  }
}

export default App