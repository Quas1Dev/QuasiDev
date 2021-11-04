if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;
// Polyfill closest
if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;

        do {
            if (el.matches(s)) return el;
            el = el.parentElement;
        } while (el !== null); 
        return null;
};
// end closest polyfill

// Toggler elements
// Set toglest
var menu = document.getElementById('menu');
var menuToggle = document.getElementById('toggle-menu-button');
var searchToggle = document.getElementById('toggle-search-box');
var srBox = document.querySelector('.h-iten:nth-of-type(2)');

// Adjust styling on resizing window
window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        menuToggle.classList.remove('change');
        menu.style.right = '0px';
        searchToggle.classList.remove('change');
        srBox.style.display = 'block';
    } else {
        menuToggle.classList.remove('change');
        menu.style.right = '-150px';
        searchToggle.classList.remove('change');
        srBox.style.display = 'none';
    }
}, false);

window.addEventListener('mouseup', function(e) {
    // Detect the element on which the user has clicked.
    var activator = e.target;

    // Hide and show menu toggler - For better compatibility
    // we could use the .add and .remove functions. But this
    // would require some modifications on the condition.
    if (activator.closest('#toggle-menu-button')) {
        menuToggle.classList.toggle('change');
        menu.style.right = "0px";
    } else if (!(activator.closest('#menu'))) {
        menuToggle.classList.toggle('change');
        menu.style.right = "-150px";
        // End hide and show menu
    }

    // Hide and show search box - For better compatibility
    // we could use the .add and .remove functions. But this
    // would require some modifications on the condition.
    if (activator.closest("#toggle-search-box")) {
        searchToggle.classList.toggle('change');
        srBox.style.display = ('block');
    } else if (!(activator.closest('.h-iten:nth-of-type(2)'))) {
        searchToggle.classList.toggle('change');
        srBox.style.display = ('none');
    }
    // End hide and show search box
});
// End togglers


// Scroll control
window.onscroll = function() {
    document.getElementById("go-to-top-button").style.opacity = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? "1" : "0";
};

document.querySelector('#go-to-top-button').addEventListener('click', function(){
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
})
// End scroll control

/**
    lazy loading contents with IntersectionObserver
*/

// Instructions to the IntersectionObserver
var lazyload = function() {
    var ob = new IntersectionObserver(function(entries, self) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                if (el.tagName == "IMG" || 
                    el.tagName == "IFRAME") {
                    
                    el.src = el.dataset.src;
                } else if (el.tagName == "PICTURE") {
                    var sources = el.querySelectorAll('source');
                    sources.forEach(function(source) {
                        source.srcset = source.dataset.srcset;
                    })
                }

                self.unobserve(el);
            }
        });
    }, {})

    var lazyElements = document.querySelectorAll('.lazy');

    lazyElements.forEach(function(lazyElement) {
        ob.observe(lazyElement);
    })
}

// Add pollyfill if necessary
if ('IntersectionObserver' in window) {
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {

        Object.defineProperty(window.IntersectionObserverEntry.prototype,
            'isIntersecting', {
                get: function() {
                    return this.intersectionRatio > 0;
                }
            });
    }
    lazyload();
} else {
    var el = document.createElement('script');
    el.src = "polyfills/inob.min.js";
    el.onload = lazyload;
    document.head.appendChild(el);
}