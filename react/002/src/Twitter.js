import React, { Component} from 'react'

// Criando o componente Twitter
class Twitter extends Component {

    // Define o estado do componente
    state = {
        tweet: 'title'
    }

  // O componentDidMount é chamado quando o componente é montado na tela.
  componentDidMount() {

    // ele recebe os posts e o loading através das props e imprime essas informações no console.
    const { posts, loading } = this.props

    console.log('componentDidMount', posts)
    console.log('componentDidMount: loading', loading)
  }

  // O componentDidUpdate é chamado sempre que as propriedades ou o estado do componente mudam.
  componentDidUpdate(prevProps) {
    const { loading } = this.props

    // Verifica se a propriedade loading mudou
    if (this.props.loading !== prevProps.loading) {
        console.log('componentDidUpdatew:loading', loading)
    }
  }

  // é chamado antes de o componente ser removido da tela.
  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido :(')
  }

  // O shouldComponentUpdate decide se o componente precisa ser atualizado.
  shouldComponentUpdate(nextProps, nextState) {
    // return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
    
    // ele compara o tweet do estado atual com o próximo tweet
    return this.state.tweet !== nextState.tweet
  }

  // Quando chamada, essa função altera o estado de tweet para true.
  tweet = () => {
    this.setState({
        tweet: true
    })
  }

  // Decide o que deve ser exibido
  render () {
    const { posts } = this.props
    console.log('render', posts)

    // Exibe o conteúdo
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        tests
      </div>
    )
  }
}

export default Twitter