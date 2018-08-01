import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileInput from './ProfileInput'

class ProfileField extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    const { field, data, onFieldUpdate } = this.props
    const { value } = e.target
    // validation will take place here
    onFieldUpdate({ [field.name]: { ...data, value } })
  }

  render() {
    const { field, data } = this.props
    return (
      <ProfileInput field={field} data={data} onChange={this.handleChange} />
    )
  }
}

ProfileField.propTypes = {
  field: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  onFieldUpdate: PropTypes.func.isRequired,
}

export default ProfileField