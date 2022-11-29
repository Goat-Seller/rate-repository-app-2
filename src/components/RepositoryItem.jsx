import { View, StyleSheet, Image } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 10,
  },
  user: {
    flexDirection: 'row',
    image: {
      width: 60,
      height: 60,
      borderRadius: 10,
    },
    info: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'flex-start',
    },
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    numbers: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    text: {
      textAlign: 'center',
      color: 'textSecondary',
    },
  },
})

const RepositoryItem = ({ item }) => {
  const makeK = (num) => {
    return Math.abs(num) > 999
      ? (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.abs(num)
  }
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.user.image}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.user.info}>
          <Text fontWeight='bold'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <Text
            style={{
              backgroundColor: theme.colors.primary,
              color: 'white',
              borderRadius: 5,
              padding: 2,
            }}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View>
          <Text style={styles.stats.numbers}>
            {makeK(item.stargazersCount)}
          </Text>
          <Text style={styles.stats.text}>Stars</Text>
        </View>
        <View>
          <Text style={styles.stats.numbers}>{makeK(item.forksCount)}</Text>
          <Text style={styles.stats.text}>Fork</Text>
        </View>
        <View>
          <Text style={styles.stats.numbers}>{makeK(item.reviewCount)}</Text>
          <Text style={styles.stats.text}>Reviews</Text>
        </View>
        <View>
          <Text style={styles.stats.numbers}>{makeK(item.ratingAverage)}</Text>
          <Text style={styles.stats.text}>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem
