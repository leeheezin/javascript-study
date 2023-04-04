const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

const choseImg = images[Math.floor(Math.random() * images.length)]

const bgImg = document.createElement("img")

bgImg.src = `img/${choseImg}`

document.body.append(bgImg)
//append 가장뒤에 prepend 가장위에