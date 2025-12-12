const clone = el => {
    const caret = el.nextElementSibling
    const cloned = document.createElement('div')
    const textWrapper = document.createElement('span')
    textWrapper.style.whiteSpace = 'preserve nowrap';
    cloned.appendChild(textWrapper)
    const computedStyle = window.getComputedStyle(el)
    Array.from(computedStyle).forEach(key => cloned.style.setProperty(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key)))
    cloned.style.position = 'absolute'
    cloned.style.top = 0
    cloned.style.left = 0
    cloned.style.opacity = 0
    cloned.style.pointerEvents = 'none'
    document.body.appendChild(cloned)

    el.addEventListener('input', e => {
        textWrapper.textContent = e.target.value
        const offset = textWrapper.getBoundingClientRect().right
        caret.style.setProperty("--caret-offset", `${offset}px`)
    })
}

clone(document.querySelector('.input'))
