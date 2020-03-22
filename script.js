let menu= document.getElementById('header-ul')
menu.querySelectorAll('li')

menu.addEventListener('click', (event)=>{
    menu.querySelectorAll('li').forEach(el=>el.classList.remove('active'))
    event.target.classList.add('active')
})




// slider

let items = document.querySelectorAll('.item-slider'),
    currentItem=0,
    isEnabled= true

function changecurrentItem (n) {
    currentItem=(n+items.length) % items.length
}

function hideItem(direction) {
isEnabled = false
items[currentItem].classList.add(direction)
items[currentItem].addEventListener('animationend', function(){
    this.classList.remove('active' , direction)
})
}


function showItem(direction) {
    
    items[currentItem].classList.add('next',direction)
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next' , direction)
        this.classList.add('active')
        isEnabled =true
    })
    }



function previusItem (n){
    hideItem('to-right')
changecurrentItem(n-1)
}

function nextItem (n){
    hideItem('to-left')
    changecurrentItem(n+1)
    }
    


document.querySelector('.slider-button-left').addEventListener('click', function(){
    // changecurrentItem(currentItem-1)
    if (isEnabled) {
        previusItem(currentItem)
    }
})

document.querySelector('.slider-button-right').addEventListener('click', function(){
    // changecurrentItem(currentItem+1)
    if (isEnabled) {
        nextItem(currentItem)
    }
})

// modal

let form = document.getElementById('form')
form.addEventListener('submit',  event => {
    event.preventDefault()
    document.getElementById('modal-subject').innerHTML = (document.getElementById('text').value) ? '<b>Тема:</b> ' + ( ( document.getElementById('text').value.length > 100 ) ? document.getElementById('text').value.substring(0, 100) + '...' : document.getElementById('text').value ): 'Без темы'
    document.getElementById('modal-message').innerHTML = (document.getElementById('descr').value) ? '<b>Описание:</b> ' + ( ( document.getElementById('descr').value.length > 230 ) ? document.getElementById('descr').value.substring(0, 230) + '...' : document.getElementById('descr').value ) : 'Без описания'
    document.getElementById('modal-form').classList.remove('modal-hidden')
    form.reset()
    return false
})

let modalBlock = document.getElementById('modal-form'),
    modalClose = document.getElementById('btn-close')
function popup_close(event) {
    if (event.target === modalBlock || event.target === modalClose) {
        modalBlock.classList.add('modal-hidden')
    }
}
modalBlock.addEventListener('click', popup_close)
modalClose.addEventListener('click', popup_close)

// portfolio

let buttons = document.getElementById('buttons-portfolio'),
    portfolio = document.getElementById('portfolio-item')


function buttonClick(event) {
    if (event.target.tagName === 'BUTTON' && !event.target.classList.contains('button_active')) {
        buttons.querySelectorAll('button').forEach(el => {
            el.classList.remove('button_active')
        });
        
        let portfolioList = portfolio.querySelectorAll('img')
        portfolio.insertAdjacentElement('afterbegin', portfolioList[portfolioList.length - 1])
        portfolio.querySelectorAll('img').forEach(el => {
            el.classList.remove('portfolio-select')
        });
        let elem = event.target
        elem.classList.add('button_active')
    }
}

buttons.addEventListener('click', buttonClick)


portfolio.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        portfolio.querySelectorAll('img').forEach(el => {
            el.classList.remove('portfolio-select')
        })
        event.target.classList.add('portfolio-select')
    }
})





// переход ссылок

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 2400) {
        for (let i = 0; i < menu.childElementCount; i++) {  //убираем актив
            menu.children[i].children[0].classList.remove('active')
        }
        menu.children[4].children[0].classList.add('active')
    }
    if (window.pageYOffset < 2400 && window.pageYOffset > 1700) {
        for (let i = 0; i < menu.childElementCount; i++) {  
            menu.children[i].children[0].classList.remove('active')
        }
        menu.children[3].children[0].classList.add('active')
    }
    if (window.pageYOffset < 1700 && window.pageYOffset > 765) {
        for (let i = 0; i < menu.childElementCount; i++) {  
            menu.children[i].children[0].classList.remove('active')
        }
        menu.children[2].children[0].classList.add('active')
    }
    if (window.pageYOffset < 765 && window.pageYOffset > 100) {
        for (let i = 0; i < menu.childElementCount; i++) {  
            menu.children[i].children[0].classList.remove('active')
        }
        menu.children[1].children[0].classList.add('active')
    }
    if (window.pageYOffset < 100) {
        for (let i = 0; i < menu.childElementCount; i++) {  
            menu.children[i].children[0].classList.remove('active')
        }
        menu.children[0].children[0].classList.add('active')
    }
})
