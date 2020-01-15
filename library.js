// object literal approach
// add selector class tags
// add translateX

function zg(selector) {
    const self = {
        element: document.querySelector(selector),
        html: () => self.element,
        on: (event, callback) => {
            document.addEventListener(event, callback)
        },
        hide: () => {
            self.element.style.display = 'none'
        },
        parallax: (speed, zindex, position) => {
            position = (typeof position !== 'undefined') ?  position : 'relative'
            self.element.style.cssText = `z-index: ${zindex}; position: ${position};`;
            document.addEventListener('scroll', () => {
                let scrollDistance = window.scrollY
                self.element.style.transform = `translateY(${scrollDistance * speed}px)`;
            });
        }
    }
    return self
}

zg('header').parallax(1, -1);
zg('.blue').parallax(0.1, 0, 'absolute')
zg('.red').parallax(0.3, 0, 'absolute')
zg('.yellow').parallax(0.6, 0, 'absolute')