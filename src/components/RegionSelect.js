import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styles } from 'styles/common'
import { CardSection, Button } from './common'
import { setRegion } from '../actions'

// eslint-disable-next-line react/prefer-stateless-function
class RegionSelect extends Component {
  render() {
    return (
      <CardSection style={{ backgroundColor: styles.colorPurple }}>
        <Button onPress={() => this.props.setRegion('EU')}>EU</Button>
        <Button onPress={() => this.props.setRegion('NA')}>NA</Button>
      </CardSection>
    )
  }
}

const mapStateToProps = state => ({ region: state.region })

const mapDispatchToProps = dispatch => ({
  setRegion: region => dispatch(setRegion(region))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegionSelect)
