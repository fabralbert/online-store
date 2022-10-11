import { v4 as uuidv4 } from 'uuid';
import book1 from '../img/book1.jpg';
import book2 from '../img/book2.jpg';
import book3 from '../img/book3.jpg';
import book4 from '../img/book4.jpg';
import book5 from '../img/book5.jpg';
import book6 from '../img/book6.jpg';
import book7 from '../img/book7.jpg';

export const dataItems = [
  {id: uuidv4(), title: 'Танец с драконами', price: 549, img: book1, description: '"Танцем драконов" издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу "мать драконов" Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.', countLeft: 5},
  {id: uuidv4(), title: 'Пламя и кровь', price: 669, img: book2, description: 'Тирион Ланнистер еще не стал заложником жестокого рока, Бран Старк еще не сделался калекой, а голова его отца Неда Старка еще не скатилась с эшафота. Ни один человек в Королевствах не смеет даже предположить, что Дейенерис Таргариен когда-нибудь назовут Матерью Драконов. Вестерос не привел к покорности соседние государства, и Железный Трон, который, согласно поговорке, ковался в крови и пламени, далеко еще не насытился. Древняя, как сам мир, история сходит со страниц ветхих манускриптов, и только мы, септоны, можем отделить правдивые события от жалких басен, и истину от клеветнических наветов.', countLeft: 4},
  {id: uuidv4(), title: 'Игра престолов', price: 1989, img: book3, description: 'С этой книгой вы посетите север, где бастард Джон Сноу пытается найти свое место среди ожесточившихся изгоев и отпетых разбойников, поклявшихся нести дозор на Стене. Затем переместитесь на юг, в столицу придворных интриг и порока, в Королевскую Гавань, где отец Джона - лорд Эддард Старк - пытается управиться с обязанностями Десницы при короле Роберте Баратеоне. А следом за этим - в земли варваров за Узким морем, где юная принцесса Дейенерис Таргариен, насильно выданная замуж за предводителя дотракийцев кхала Дрого, открывает для себя любовь и власть.'},
  {id: uuidv4(), title: 'Пир стервятников', price: 1086, img: book4, description: 'Джордж Мартин - "живой классик" мировой фантастики, талантливейший из современных мастеров фэнтези, чьи произведения удостоены самых высоких наград жанра. Его шедевром по праву считается эпопея "Песнь льда и огня" - величайшая фэнтези-сага со времен Толкина!', countLeft: 10},
  {id: uuidv4(), title: 'Битва королей', price: 1695, img: book5, description: 'Король умер, да здравствует король! Да, но какой из королей? Кто воссядет на Железный трон после смерти Роберта Баратеона? Кто поддержит его в борьбе с претендентами? И на что он готов, чтобы победить в этой борьбе? Вторая часть саги Джорджа Мартина проиллюстрирована ветераном фантастической живописи, известным американским художником Ричардом Хескоксом.', countLeft: 6},
  {id: uuidv4(), title: 'Буря мечей', price: 1995, img: book6, description: 'Сотрясается в борьбе Железный Трон Семи Королевств. Предают друг друга недавние союзники, злейшими врагами становятся добрые друзья. В неприступном замке плетет сети изощренного заговора могущественная служительница Рглора, Владыки Света... В далеких, холодных землях собирает силы юный король Севера Робб из дома Старк... Новые и новые воины сходятся под знаменами Дейенерис Бурерожденной, повелительницы последних оставшихся в мире драконов... Но ныне в разгорающийся пожар сражений вступают еще и Иные — армия живых мертвецов, коих не остановить ни властью оружия, ни властью магии. Буря мечей грядет в Семи Королевствах — и многих сметет она... Перед вами — третья часть саги Джорджа Мартина с уникальными иллюстрациями американского художника Чарльза Весса.', countLeft: 3},
  {id: uuidv4(), title: 'Игра престолов', price: 669, img: book7, description: 'Перед вами - величественное шестикнижие "Песнь льда и пламени". Эпическая, чеканная сага о мире Семи Королевств. О мире суровых земель вечного холода и радостных земель вечного лета. Мире лордов и героев, воинов и магов, чернокнижников и убийц - всех, кого свела воедино Судьба во исполнение древнего пророчества. О мире опасных приключений, великих деяний и тончайших политических интриг.', countLeft: 12},
]