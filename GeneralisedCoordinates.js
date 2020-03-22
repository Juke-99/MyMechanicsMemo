import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import App from "./App";

class GeneralisedCoordinates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View>
        <Text>一般化座標</Text>

        <Text>
          いままで高校生で学んでいたものは直交座標と呼ばれるもので直交した軸を定義して軸の数によって粒子の位置が決まるようになっています。
          軸など関係なく点をただ定義する考え方として、一般化座標系という考え方を利用することができます。
          </Text>

        <Text>
          まず空間中の粒子の位置は半径ベクトル$\mathbf r $で表すことができ、時間を$t$として$\mathbf r $を時間$t$に関して微分すると
          $dr/dt$は<Text>速度</Text>で、さらに速度を時間$t$で微分すると$d^2r/dt^2$は<Text>加速度</Text>として表すことができます。時間微分した
          ものの表現として文字の上にドットをつけて表現する方法があります。例えば、速度は$v = \dot r $としてあらわせます。
          </Text>

        <Text>
          空間内に$N$個の粒子があるとして、この粒子を表現するには$N$個の半径ベクトルが必要になってきます。系全体の独立した量を<Text>自由度</Text>
          といい、自由度が$n$である場合、$n$個の量$q_1, q_2, q_3, ..., q_n$を<Text>一般化座標</Text>と呼ばれ、その座標を時間$t$で微分したもの
          を$\dot q $と表すことができます。これは<Text>一般化速度</Text>と呼ばれます。その座標と速度と加速度の関係を<Text>運動方程式</Text>といいます。
        </Text>
      </View>
    )
  }
}

// AppRegistry.registerComponent('GeneralisedCoordinates', () => App)
export default GeneralisedCoordinates