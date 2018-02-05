import React from 'React'
import { View, Text } from 'react-native'
import { styles } from 'styles/common'

const headerStyles = {
  viewStyle: {
    backgroundColor: styles.colorDarker,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: styles.colorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 26,
    color: styles.colorWhite
  }
}

const Header = (props) => {
  const { textStyle, viewStyle } = headerStyles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

export { Header }
