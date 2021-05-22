const red = document.querySelector(".red")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")
const blue = document.querySelector(".blue")
const black = document.querySelector(".black")

const center = document.querySelector(".center")


const magicColorPicker = (element, color) => {
    return element.addEventListener("mouseenter", () => (
        center.innerText = `${color} is hovered`
    ))
}

const getColor = (element) => {
    return element.innerText
}

magicColorPicker(red, getColor(red))
magicColorPicker(orange, getColor(orange))
magicColorPicker(pink, getColor(pink))
magicColorPicker(blue, getColor(blue))
magicColorPicker(black, getColor(black))