import catalogArticle from "./actions"
import { CatalogActionTypes } from "./types";

describe('Catalog actions', () => {
  it('Should dispatch twice load action', async () => {
    const thunkLoadAction = catalogArticle.load()
  
    const dispatchMock = jest.fn()
  
    // @ts-ignore
    await thunkLoadAction(dispatchMock)
  
    expect(dispatchMock).toBeCalledTimes(2)
  })
})
