import actionsBasket from "./actions"
import { BasketActionTypes } from "./types";

describe('Basket actions', () => {

 it('Should dispatch once remove from basket action', () => {
  const removeFromBasketAction = actionsBasket.removeFromBasket('1')

 const dispatchMock = jest.fn()
 const getStateMock = jest.fn()


 // @ts-ignore
 removeFromBasketAction(dispatchMock, getStateMock)

 expect(dispatchMock).toBeCalledTimes(1)
})
 
 it('should create an action with type "clear"', () => {
 
   const expectation = {
     type: BasketActionTypes.BASKET_CLEAR,
   };
 
   expect(actionsBasket.clearBasket()).toEqual(expectation);
 })
})