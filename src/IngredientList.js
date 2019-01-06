import React from 'react'
import PropTypes from 'prop-types'
import Ingredient from './Ingredient'

const IngredientList = ({title, list}) =>
    <div>
        <h1>{title}</h1>
        <ul className='ingredients'>
            {list.map((ingredient, i) =>
                <Ingredient key={i} {...ingredient} />)
            }
        </ul>
    </div>

IngredientList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object)
}

IngredientList.defaultProps = {
    title: '',
    list: []
}

export default IngredientList