import {ArticleState, ArticleActionTypes} from "./types"
import ArticleReducer from "./reducer"

interface Data {
  id: string;
  title: string;
  price: number | string;
  img: string;
  description: string;
  countLeft: number | string;
}

let state: ArticleState;

beforeEach(() => {
  state = {
    data: {} as Data,
    isLoading: false,
  }
})

describe("Article reducer", () => {

  it("Should load 1 article object", () => {
    const data = {
      data: {},
      isLoading: true,
    }

    const newState = ArticleReducer(state, {type: ArticleActionTypes.ARTICLE_LOAD})
    expect(newState).toEqual(data);
  });

  it("Article load success", () => {
    const data = {
      data: {
        id: "1",
        title: "Танец с драконами",
        price: 549,
        img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
        description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
        countLeft: 5
      },
      isLoading: false,
    }

    const payload = {
      data: {
        id: "1",
        title: "Танец с драконами",
        price: 549,
        img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
        description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
        countLeft: 5
      }
    }

    const newState = ArticleReducer(state, {type: ArticleActionTypes.ARTICLE_LOAD_SUCCESS, payload})
    
    expect(newState).toEqual(data);
  });

  it("Should clear state if error from server", () => {
    const data = {
      data: {},
      isLoading: false,
    }

    const newState = ArticleReducer(state, {type: ArticleActionTypes.ARTICLE_LOAD_ERROR})
    expect(newState).toEqual(data);
  });

  it("Should edit state of the article on data what we got from component", () => {
    state = {
      data: {      
        countLeft: "25",
        description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
        id: "1",
        img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
        price: "100",
        title: "Танец с драконами",
      },
      isLoading: false,
    }

    const data = {
      data: {      
        countLeft: "150",
        description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
        id: "1",
        img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
        price: "150",
        title: "Танец с драконами",
      },
      isLoading: false,
    }

    const payload = {
      data: {
        title: "Танец с драконами",
        price: "150",
        description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
        countLeft: "150"
      }
    }

    const newState = ArticleReducer(state, {type: ArticleActionTypes.ARTICLE_EDIT, payload})
    expect(newState).toEqual(data);
  });


});

    


