import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import {add,remove} from '../redux/home.redux'
export interface Props {
    num: number
    add: () => void
    remove: () => void
    dispatch: any
  }
  interface State {
  }
export class HomeScreen extends Component<Props, State> {
    constructor(props:Props){
        super(props)
    }
    static navigationOptions = () => ({
        header: null,
    });
    render() {
        return (
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <View style={{marginTop:100}}>
                <Text> {this.props.num} </Text>
                </View>
                <View style={{marginTop:100,flexDirection:'row',justifyContent:"center"}}>
                    <Button title={'+'} onPress={()=>{this.props.dispatch(add())}}/>
                    <Button title={'-'} onPress={()=>{this.props.dispatch(remove())}}/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state:any) => (state.num)


export default connect(mapStateToProps)(HomeScreen)


