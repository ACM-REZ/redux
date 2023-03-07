import { createSelector } from 'reselect';
import props from './props'

export default createSelector(
    props.app.counter,
    (counter) => {return {counter}}
)