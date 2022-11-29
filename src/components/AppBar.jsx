import { ScrollView, StyleSheet, View } from 'react-native'
import AppBarTab from './AppBarTab'

import Constants from 'expo-constants'
import theme from '../theme'

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  items: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    flex: 1,
  },
})

const AppBar = () => {
  return (
    <View style={style.container}>
      <ScrollView horizontal style={style.items}>
        <AppBarTab text='Repositories' path='/' />
        <AppBarTab text='Sign In' path='/signIn' />
      </ScrollView>
    </View>
  )
}

export default AppBar
