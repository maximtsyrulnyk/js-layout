import {createElement, createHeader, createContainerTab} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const containerTab = createContainerTab()
page.append(containerTab)

const POST_LIST = [
   
]

const createPost = () => {

}

// ===

const post = createPost()
page.append(post)

const MAIN_INFO = {
    img: '/img/community_img.png',
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
    button: `Перейти до ком'юніті у Телеграм`, 
}

const createMain = () => {
    const main = createElement('main', 'main');

    const img = createElement('img', 'main__img');
    img.src = MAIN_INFO.img;
    main.appendChild(img);

    const title = createElement('div', 'main__title', MAIN_INFO.title);
    main.appendChild(title);

    const textContainer = createElement('div', 'main__text');
    const paragraph = createElement('p', 'main__paragraph', MAIN_INFO.text);
    textContainer.appendChild(paragraph);
    main.appendChild(textContainer);

    const button = createElement('button', 'main__button', MAIN_INFO.button);
    main.appendChild(button);

    return main;
};

const containerMain = createMain()
page.append(containerMain);