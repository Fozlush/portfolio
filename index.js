const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]')
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]')
const transitionBox = document.getElementById('transition-box')
const menu = document.querySelector('menu')
let pageLock = false
let curentPage = 1
let scheme
!localStorage.scheme ? scheme = 'light' : scheme = localStorage.getItem('scheme')

let projects = [
	{
		link: 'https://fozlush.github.io/web-practice1/',
		title: 'Konstruct',
		description: 'Одностраничный лэндинг, только верстка без js',
		image: './img/Konstruct.png'
	},
	{
		link: 'https://fozlush.github.io/web-practice2/',
		title: 'Hungry people',
		description: 'Одностраничный лэндинг, jquery',
		image: './img/Hungry people.png'
	},
	{
		link: 'https://fozlush.github.io/web-practice3/',
		title: 'Freebie coffee',
		description: 'Одностраничный лэндинг, jquery',
		image: './img/Freebie coffee.png'
	},
	{
		link: 'https://fozlush.github.io/JS-array/',
		title: 'JS array',
		description: 'Работа с js массивами',
		image: './img/JS array.png'
	},
	{
		link: 'https://fozlush.github.io/ToDo-list/',
		title: 'ToDo list',
		description: 'ToDo list на чистом js',
		image: './img/ToDo list.png'
	},
	{
		link: 'https://sapper-sable-six.vercel.app/',
		title: 'Sapper',
		description: 'Сапёр на React',
		image: './img/Sapper.png'
	}
]

function transition(){
    transitionBox.classList.add('transition-box-active')
    setTimeout(backTransition, 1000)
}
function backTransition(){
	for(i = 1; i < 4; i++){
		let tech = document.getElementById(`page${i}`)
		if(i != curentPage){
			tech.classList.add('disable')
		}else{
			tech.classList.remove('disable')
		}
	}
	menu.classList.add('close')
    transitionBox.classList.remove('transition-box-active')
    transitionBox.classList.add('transition-box-return')
    setTimeout(returnTransition, 500)
}
function returnTransition(){
    transitionBox.classList.remove('transition-box-return')
    transitionBox.classList.add('transition-box-end')
	setTimeout(endTransition, 1000)
}
function endTransition(){
	transitionBox.classList.remove('transition-box-end')
	pageLock = false
}

function toPage(page){
	if(pageLock === false){
		curentPage = page
		transition()
		pageLock = true
	}
}

function switchScheme(){
	scheme === 'light' ? scheme = 'dark' : scheme = 'light'
	localStorage.setItem('scheme', scheme)
	setScheme()
}
function setScheme(){
	let lightMedia = (scheme === 'light') ? 'all' : 'not all';
	let darkMedia = (scheme === 'dark') ? 'all' : 'not all';
	[...lightStyles].forEach((link) => {
		link.media = lightMedia
	});
	[...darkStyles].forEach((link) => {
		link.media = darkMedia
	})
}
setScheme()

function projectTemplate(i){
	return `
		<a href="${projects[i].link}" class="project-card">
			<img src="${projects[i].image}">
			<p class="project-title">${projects[i].title}</p>
			<p class="description">${projects[i].description}</p>
		</a>
	`
}

function fillProjects(){
	const list = document.getElementById('projects-list')
	for(i = 0; i < projects.length; i++){
		list.innerHTML += projectTemplate(i)
	}
}
fillProjects()


function closeNav(){
	menu.classList.add('close')
}
function openNav(){
	menu.classList.remove('close')
}