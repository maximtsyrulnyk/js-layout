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