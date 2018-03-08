import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getSpecialist } from '../api'

export default class Contact extends Component {
  state = {
    specialistName: null
  }
  componentDidMount() {
    getSpecialist()
      .then((specialistName) => this.setState(() => ({
        specialistName
      })))
  }
  render () {
    const { specialistName } = this.state
    return (
      <div className='container'>
        Contact {specialistName}

      </div>
    )
  }
}