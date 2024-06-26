export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)
  
    if (className) {
      elem.className = className
    }
  
    if (text) {
      elem.innerHTML = text
    }
  
    return elem
  }
  
  const HEADER_BUTTON_LIST = [
    {
      width: 24,
      height: 24,
      src: '/svg/header__back.svg',
    },
    {
      width: 24,
      height: 24,
      src: '/img/header__avatar.png',
    },
  ]
  
  const TAB_BUTTON_LIST = [
    {
      active: false,
      info: 'База знань'
  
    },
    {
      active: true,
      info: 'Інформація'
    },
  ]
  
  export const createHeader = () => {
    const header = createElement('header', 'header')
  
    HEADER_BUTTON_LIST.forEach((params) => {
      const button = createElement('button', 'button')
  
      const img = createElement('img')
  
      Object.entries(params).forEach(([key, value]) => {
        img[key] = value
      })
  
      button.insertAdjacentElement('beforeend', img)
  
      header.insertAdjacentElement('beforeend', button)
    })
  
    return header
  }
  
  
  
  export const createContainerTab = () => {
    const div = createElement('div', 'tab__list')
  
    TAB_BUTTON_LIST.forEach((params) => {
      const tab = createElement('div', params.active ? 'button tab__button tab__active' : 'button tab__button')
  
      tab.innerText = params.info
  
      div.insertAdjacentElement('beforeend', tab)
    })
  
    return div
  }