import actionsArticle from "./actions"
import { ArticleActionTypes } from "./types";

describe('Article actions', () => {
  it('Should dispatch twice load action', async () => {
    const thunkLoadAction = actionsArticle.load('1')
  
    const dispatchMock = jest.fn()
  
    // @ts-ignore
    await thunkLoadAction(dispatchMock)
  
    expect(dispatchMock).toBeCalledTimes(2)
  })
  
  it('should create an action with type "edit"', () => {
  
    const data = {
      title: "Танец с драконами",
      price: "600",
      description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
      countLeft: "10"
    }
  
    const expectation = {
      type: ArticleActionTypes.ARTICLE_EDIT,
      payload: {
        data
      },
    };
  
    expect(actionsArticle.editArticle(data)).toEqual(expectation);
  })
})
