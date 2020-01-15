// object literal approach

function zg(selector) {
    const self = {
        element: document.querySelector(selector), // get element based off selector
        html: () => self.element, // return selected element
        on: (event, callback) => {
            document.addEventListener(event, callback)
        },
        hide: () => {
            self.element.style.display = 'none'
        },
    }

    return self
}

// console.log(zg('h1').html())

// zg('h1').on('click', () => {
//     alert('clicked')
// })

// zg('h1').hide()
