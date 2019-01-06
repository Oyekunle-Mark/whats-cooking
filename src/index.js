import React from 'react'
import { render } from 'react-dom'
import Menu from './Menu'
import data from '../data/recipe'

render(
    <Menu recipes={data} />, document.getElementById('root')
)