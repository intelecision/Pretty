import * as React from 'react';


const reducerInitialState = [];
export default function reducer(state=reducerInitialState, action)
{
    switch (action.type) {
      case ACTION_TYPE.ADD_TO_CART:
        return state
      case ACTION_TYPE.REMOVE_FROM_CART:
        return state
      default:
        return state
    }
 }


