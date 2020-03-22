import React, { Component } from 'react';
import {
  Container,
  Card, Divider, Header, Icon, Loader
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datos: null,
      cargando: true
    }
  }

  componentDidMount = async () => {
    let response = await fetch('https://corona.lmao.ninja/countries/Venezuela');
    let responseJson = await response.json()

    this.setState(prevState => ({ 
      cargando: !prevState.cargando,
      datos: responseJson
    }))

    console.log(responseJson);
      
  }
  
  render() {

    const { datos, cargando } = this.state;

    const Cards = (covid19) => (
      <Card.Group centered >
        <Card>
          <Card.Content>
            <Card.Header>Casos Totales 🤒 {covid19.cases}</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Casos Hoy 🔥 {covid19.todayCases}</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Muertos Totales 😢 {covid19.deaths}</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Muertos Hoy 😭 {covid19.todayDeaths}</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Casos Recuperados 💃 {covid19.recovered}</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Casos Activos 😷 {covid19.active}</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Casos Criticos 🤧 {covid19.critical}</Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    )

    return (
      <div className="container">
        <Container textAlign='center'>
          <Header as='h2' icon textAlign='center'>
            <Icon name='heartbeat' />
            COVID-19 Venezuela
            <Header.Subheader>
              Estadisticas del <b>COVID-19</b> en <b>Venezuela</b>, usando la fuente de <b>worldometers.info</b>
            </Header.Subheader>
          </Header>
          <Divider />
          {cargando ? <Loader active inline='centered' size='massive' >Cargando...</Loader> : Cards(datos) }
          <Divider/>
          <Container textAlign='center'>
            <p>
              Fuente: <a href="https://www.worldometers.info/coronavirus/" rel="noopener noreferrer" target="_blank">worldometers.info</a>
            </p>
            <p>
              API y más información técnica sobre <b>COVID-19</b>. <a rel="noopener noreferrer" href="https://corona.lmao.ninja/" target="_blank">https://corona.lmao.ninja/</a>
            </p>
            <br />
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
