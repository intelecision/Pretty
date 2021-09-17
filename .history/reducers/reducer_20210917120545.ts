import * as React from 'react';
import { ACTION_TYPE } from "./../reducers/ActionsTypes";

const reducerInitialState = [];
export default function reducer(shoppingCarts=reducerInitialState, action)
{
    switch (action.type) {
      case ACTION_TYPE.ADD_TO_CART:
        return [...shoppingCarts, action.payload]
      case ACTION_TYPE.REMOVE_FROM_CART:
        return shoppingCarts
      default:
        return shoppingCarts
    }
 }


