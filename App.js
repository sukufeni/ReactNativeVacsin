// Exported from snack.expo.io
import React, { Component } from 'react';
import { Constants } from 'expo';
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Image, 
  Alert,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      login : '',
      senha :''
    }
  }
  _efetuaLogin(){
    if(this.login == null){
      Alert.alert('Erro de login!')
    }
    else{
      Alert.alert('Login efetuado!')
    }
  }
  render() {
    let fotoLogo = {
      uri: 'https://goo.gl/YiVBXN'
    }
    return (
      <ScrollView style = {styles.container3}>
      <View style={styles.container1}>
        <Text style={styles.titulo}>
          VACSIN
        </Text>
        <Image source = {fotoLogo} style={styles.logo}/>
      </View>
       <View style ={styles.container2}>
         <TextInput
          style={styles.entradaDados}
          placeholder="Usuario"
          onChangeText={(login) => this.setState({login})}
        />
        <TextInput
          style={styles.entradaDados}
          placeholder="senha"
          onChangeText={(senha) => this.setState({senha})}
        />
          <Text style = {styles.entradaDados}>{this.state.login}</Text>
      </View>
      <View style ={styles.container1}>
        <TouchableHighlight onPress={this._efetuaLogin} underlayColor="white">
          <View style={styles.botao}>
            <Text style={styles.titulo}>efetuar login</Text>
          </View>
        </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems:'center',
    flexDirection :'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  container2: {
    flex: 2,
    alignItems:'left',
    flexDirection :'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  container3: {
    flex: 1,
    alignItems:'left',
    flexDirection :'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  botao:{
    flex:1,
    justifyContent:'center',
    marginBottom: 5,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius:15
  },
  logo : {
    justifyContent :'right',
    height : 150,
    width : 150,
  },
  titulo:{
    padding:20,
    fontSize:35,
    fontWeight:'strong',
    textTransform:'upcase'
  },
  entradaDados:{
    padding:20,
    fontSize:20,
    fontWeight:'regular',
    textAlign:'left',
    fontColor:'black'
  },
});
