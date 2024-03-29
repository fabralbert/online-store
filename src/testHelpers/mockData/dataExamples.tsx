
// пример товаров

export const items = [
  {
    id: "1",
    title: "Танец с драконами",
    price: 549,
    img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
    description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
    countLeft: 5
  },
  {
    id: "2",
    title: "Пламя и кровь",
    price: 669,
    img: "https://img-gorod.ru/26/775/2677564_detail.jpg",
    description: "Тирион Ланнистер еще не стал заложником жестокого рока, Бран Старк еще не сделался калекой, а голова его отца Неда Старка еще не скатилась с эшафота. Ни один человек в Королевствах не смеет даже предположить, что Дейенерис Таргариен когда-нибудь назовут Матерью Драконов. Вестерос не привел к покорности соседние государства, и Железный Трон, который, согласно поговорке, ковался в крови и пламени, далеко еще не насытился. Древняя, как сам мир, история сходит со страниц ветхих манускриптов, и только мы, септоны, можем отделить правдивые события от жалких басен, и истину от клеветнических наветов.",
    countLeft: 4
  }
]

// пример одного товара
export const articleData = {
  id: "1",
  title: "Танец с драконами",
  price: 549,
  img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
  description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
  countLeft: 5
}

// пример payload edit article
export const articleEditData = {
  title: "Танец с драконами11",
  description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
  price: "600",
  countLeft: "10"
}