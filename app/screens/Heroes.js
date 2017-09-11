import React, {Component} from 'react';
import {Container, Header, Left, Right, Content, Body, Text, List, ListItem, Thumbnail, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';
import Hero from '../components/Hero';

export default class Heroes extends Component {

  constructor(){
    super();
    this.state = {
      heroes: []
    }
  }

  componentDidMount(){
    const self = this;
    axios.get('http://rest.learncode.academy/api/radiegtya/heroes').then((response)=>{
      self.setState({heroes: response.data});
    }).catch((error)=>{
      console.log('something went wrong')
      console.log(error)
    })
  }

  renderHeader(){
    return (
      <Header>
        <Left/>
        <Body>
          <Text>Heroes</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={()=> this.props.navigator.push({screen: 'push.HeroAdd'})}>
            <Icon name="add" style={{color: '#62AFEF'}}/>
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }

  render(){
    return (
      <Container>
        <Content>
          {this.renderHeader()}

          <Text>{this.props.data}</Text>

          <List>
            {this.state.heroes.map((hero, key)=> <Hero key={key} hero={hero} {...this.props}/>)}
          </List>

        </Content>
      </Container>
    )
  }

}
