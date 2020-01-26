const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

var b = document.body || document.getElementsByTagName('body')[0];
b.insertAdjacentHTML('beforeend', '<button onclick="topFunction()" id="toTop" title="Go to top">^</button>');