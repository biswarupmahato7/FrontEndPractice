const root = document.documentElement
const flower = document.querySelector('.flower')
const center = flower.querySelector('button')
const rotation = document.getElementById('range-rotation')
const colorTop = document.getElementById('color-top')
const colorBot = document.getElementById('color-bot')


const leafList = document.querySelectorAll('.leaf:nth-of-type(odd)')
leafList.forEach(leaf => {
	leaf.addEventListener('click', openLeafHandler)
})
function openLeafHandler(event) {
	const leaf = event.currentTarget
	leaf.classList.add('open')
}


center.addEventListener('click', closeLeafHandler)
function closeLeafHandler(event) {
	const open = document.querySelector('.open')
	if(open) open.classList.remove('open')
}



// colorTop.addEventListener('input', handleTopColor)
// colorBot.addEventListener('input', handleBotColor)


addEventListener('scroll', handleScroll)
function handleScroll(event) {
	const docHeight = root.scrollHeight
	const winHeight = innerHeight
	const scrHeight = docHeight - winHeight
	const percent = Math.round(pageYOffset) / scrHeight
	root.style.setProperty('--leaves-rotation', percent)
}




// set leaf color 
//function handleTopColor(event){
//	const value = event.target.value
//	flower.style.setProperty('--leaf-color-top', value)
//}
//function handleBotColor(event){
//	const value = event.target.value
//	flower.style.setProperty('--leaf-color-bot', value)
//}


flower.style.setProperty(`--leaf-color-top`, colorTop.value)
flower.style.setProperty(`--leaf-color-bot`, colorBot.value)

addEventListener('input', event => {
	const input = event.target
	if(input.type != 'color') return
	flower.style.setProperty(`--leaf-${input.id}`, input.value)
	
	if(input.id == 'color-top') {
		flower.style.setProperty(`--text-color`, contrastColor(input.value))
	}
})






// find best contrast color (black/white) to a given color
function contrastColor(hex, light = '#ffffff', dark = '#000000') {
  const color = (hex.charAt(0) === '#') ? hex.substring(1, 7) : hex;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const uicolors = [r / 255, g / 255, b / 255];
	
  const c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? dark : light;
}