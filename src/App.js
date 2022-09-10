import React from "react"

class App extends React.Component {

  constructor(){
    super()
    
    this.state = {
      Temperatura: '',
      Opcao: 'opcao1',
      result: ''
    }
  }
  
  Info(event){
    const AtribuirValor = event.target.name
    this.setState({
      [AtribuirValor]: event.target.value
    })
  }


  Resultado(){
    const { Temperatura, Opcao } = this.state
    if (Opcao === "opcao1"){
      const resultado = ((Temperatura) * 5)/9
      this.setState({
        result: resultado + 'C'
      })
    }

    else if(Opcao === "opcao2") {
      const resultado = ((Temperatura * 9) / 5)+ 32
      this.setState({
        result: resultado + 'F'
      })
    }
  }

  MostrarResultado(){
    if (this.state.result !== ""){
      return <p>O resultado é {this.state.result}</p>
    }
    return null
  }

  render(){
    console.log('AppRender')
    
    return(
    <div>
      <h1>Conversor de Temperatura</h1>
      <br/>
      
      Temperatura:<br/> <br/>
      <label>
        <input type= 'text' name="temperatura" 
          onChange={(event)=> this.Info(event)}/>  
      </label>
      <label>
        <input type='radio' name='Opcao' value='opcao1'
          checked={this.state.Opcao === 'opcao1'}
          onChange={(event)=> this.Info(event)}/> Fahrenheit(F)
      </label>
      <label>
        <input type='radio' name='Opcao' value='opcao2'
          checked={this.state.Opcao === 'opcao2'}
          onChange={(event)=> this.Info(event)}/> Celsius(C)
      </label>
      <br/><br/>
      
      <input type='button' value='Verificar'
        onClick={()=> this.Resultado()}/>
      <br/><br/>
      {this.MostrarResultado()}
    </div>
    )
  }
}

export default App