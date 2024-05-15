import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => {
  return (
    <View style={[styles.screen, {backgroundColor: 'red'}]}>
      <Text>FirstRoute</Text>
    </View>
  )
}

const SecondRoute = () => {
    return (
      <View style={[styles.screen, {backgroundColor: 'blue'}]}>
        <Text>Second Route</Text>
      </View>
    )
  }

const initialLayout = { with: Dimensions.get('window').width }

  const HomeTabView = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'}
    ])
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute
    })

    return(
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    )
  }

export default HomeTabView;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})