import React, { Component } from 'react'
import {
  LayoutAnimation,
  Image,
  NativeModules,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { styles } from 'styles/common'
import { Card, CardSection } from './common'
import * as actions from '../actions'

const { UIManager } = NativeModules
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const detailStyles = {
  orgStyle: {
    fontSize: 22,
    alignSelf: 'flex-start',
    color: styles.colorWhite,
    paddingLeft: 5
  },
  textDetailStyle: {
    color: styles.colorWhite,
    fontSize: 14
  }
}

class TeamDetail extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  renderDetail() {
    const { team, expanded } = this.props

    if (expanded) {
      return (
        <CardSection style={{ backgroundColor: styles.colorMain, alignItems: 'center' }}>
          <View style={{ alignItems: 'center', margin: 10, marginRight: 15 }}>
            <Image
              style={{ height: 70, width: 70, borderRadius: 35 }}
              source={{ uri: team.logo }}
            />
          </View>

          <View style={{ alignItems: 'flex-start', flex: 1 }}>
            <Text style={detailStyles.textDetailStyle}><Text style={{ fontWeight: 'bold' }}>ADC:</Text>  {team.adc}</Text>
            <Text style={detailStyles.textDetailStyle}><Text style={{ fontWeight: 'bold' }}>Support:</Text>  {team.support}</Text>
            <Text style={detailStyles.textDetailStyle}><Text style={{ fontWeight: 'bold' }}>Mid:</Text>  {team.mid}</Text>
            <Text style={detailStyles.textDetailStyle}><Text style={{ fontWeight: 'bold' }}>Jungle:</Text>  {team.jungle}</Text>
            <Text style={detailStyles.textDetailStyle}><Text style={{ fontWeight: 'bold' }}>Solo:</Text>  {team.solo}</Text>
          </View>
        </CardSection>
      )
    }
  }

  render() {
    const { orgStyle } = detailStyles
    const { org } = this.props.team

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectTeam(org)}>
        <View>
          <Card style={{ backgroundColor: styles.colorDarker }}>
            <Text style={orgStyle}>{org}</Text>
            {this.renderDetail()}
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTeamOrg === ownProps.team.org
  return { expanded }
}

export default connect(mapStateToProps, actions)(TeamDetail)
