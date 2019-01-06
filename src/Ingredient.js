import React from 'react'
import PropTypes from 'prop-types'

const Ingredient = ({name, amount, measurement}) =>
    <li>
        <span className='amount'>Amount: {amount}</span>
        <span className='measurement'>Measurement: {measurement}</span>
        <span className='name'>Name: {name}</span>
    </li>

Ingredient.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    measurement: PropTypes.string
}

Ingredient.defaultProps = {
    name: '',
    amount: 1, 
    measurement: ''
}

export default Ingredient