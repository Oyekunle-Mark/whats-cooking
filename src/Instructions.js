import React from 'react'
import PropTypes from 'prop-types'

const Instructions = ({title, steps}) =>
    <section className='instructions'>
        <h2>{title}</h2>
        {steps.map((step, i) =>
            <p key={i}>{step}</p>
        )}
    </section>

Instructions.propTypes = {
    title: PropTypes.string,
    steps: PropTypes.arrayOf(PropTypes.string)
}

Instructions.defaultProps = {
    title: '',
    steps: []
}

export default Instructions