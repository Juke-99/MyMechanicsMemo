import React, { Component } from "react";
import { View, FlatList, Text, Dimensions, StyleSheet } from "react-native";
import GeneralisedCoordinates from "./GeneralisedCoordinates"
import { NavigationActions } from "react-navigation";

const data = [
  {hOne: '運動方程式', 
  hTwo: [
    '一般化座標', 
    '最小作用の原理', 
    'ガリレオの相対原理', 
    '自由粒子のラグラジアン', 
    '粒子系のラグラジアン'
  ],
  linkName: 'GeneralisedCoodinates'},
  {hOne: '保存法', 
  hTwo: [
    'エネルギー',
    '運動量',
    '重心',
    '角運動量',
    '力学的類似性',
  ]},
  {hOne: '運動方程式の統合', 
  hTwo: [
    '一次元の運動',
    '振動周期からの位置エネルギーの決定',
    '換算質量',
    '中心場での運動',
    'ケプラーの問題',
  ]},
  {hOne: '粒子間の衝突', 
  hTwo: [
    '粒子の崩壊',
    '弾性衝突',
    '散乱',
    'ラザフォードの式',
    '小角散乱',
  ]},
  {hOne: '小さな振動', 
  hTwo: [
    '一次元の自由振動',
    '強制振動',
    '1つ以上の自由度による系の振動',
    '分子の準位',
    '減衰振動',
    '摩擦下の強制振動',
    'パラメトリック共鳴',
    '非調和振動',
    '非線形振動の共振',
    '急速振動する場での運動',
  ]},
  {hOne: '剛体の動き'},
  {hOne: '正準方程式'},
]

const { width, height } = Dimensions.get('window')

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data
    }
  }

  render() {
    return(
      <View style={styles.containerView}>
        <FlatList data={this.state.data} keyExtractor={(item, index) => index.toString()} ListHeaderComponent={
          <View style={styles.flatListContentHeader}>
            <Text style={styles.flatListHeaderText}>目次</Text>
          </View>
        } renderItem={({item}) => (
          <View style={styles.flatListContentView}>
            <Text style={styles.flatListText}>{item.hOne}</Text>
            {
              item.hTwo ? item.hTwo.map((title, index) => (
                <Text key={index} style={styles.flatListContentText}
                  onPress={() => this.props.navigation.dispatch(NavigationActions.navigate('GeneralisedCoodinates'))}>{index + 1}. {title}</Text>
              )) : <Text></Text>
            }
          </View>
        )} ListFooterComponent={
          <View style={styles.flatListContentFooter}>
            <Text style={styles.flatListFooterText}>MECHANICS</Text>
          </View>
        } contentContainerStyle={{flexGrow: 1}}></FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    borderStyle: 'solid',
    borderColor: '#aaa',
    borderWidth: 10
  },
  flexListContainer: {
    width: '100%',
    height: height
  },
  containerView: {
    width: width,
    height: '100%',
    backgroundColor: '#fff'
  },
  flatListContentHeader: {
    padding: '2%'
  },
  flatListContentView: {
    width: '90%',
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2%',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  flatListContentFooter: {
    padding: '2%',
  },
  flatListHeaderText: {
    fontSize: 30
  },
  flatListText: {
    fontSize: 25
  },
  flatListContentButton: {
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 15,
    backgroundColor: '#fff'
  },
  flatListContentText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 15
  },
  flatListFooterText: {
    fontSize: 10,
    textAlign: 'center'
  },
});

export default Home