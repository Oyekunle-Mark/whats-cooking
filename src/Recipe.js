import React from 'react'
import PropTypes from 'prop-types'
import IngredientList from './IngredientList'
import Instructions from './Instructions'

const Recipe = ({name, ingredients, steps}) =>
    <section>
        <h1>{name}</h1>
        <IngredientList title='Ingredients' list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
    </section>

Recipe.propTypes = {
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    steps: PropTypes.arrayOf(PropTypes.string)
}

Recipe.defaultProps = {
    name: '',
    ingredients: [],
    steps: []
}

export default Recipe