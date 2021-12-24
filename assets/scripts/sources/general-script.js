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
    // Create new instersection oberserver
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
    }, {
        threshold: 0,
        // This will trigger the image load before its containing element reaches
        // its actual border.
        rootMargin: "100px", 
        root: null
    })

    // Find the elements to be monitored
    var lazyElements = document.querySelectorAll('.lazy');

    // Set the observer just created to monitor the selected 
    // elements.
    lazyElements.forEach(function(lazyElement) {
        ob.observe(lazyElement);
    })
}

// Add pollyfill if necessary and start lazy loading by calling lazyload().
if ('IntersectionObserver' in window) {
    // Determine the presence o fht isIntersecting property
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {

        Object.defineProperty(window.IntersectionObserverEntry.prototype,
            'isIntersecting', {
                get: function() {
                    return this.intersectionRatio > 0;
                }
            });
    }

    // Summon the function that creates the observer and starts monitoring
    lazyload();
} else {
    var el = document.createElement('script');
    el.src = "polyfills/inob.min.js";
    // This will summon the function that creates the observer 
    // and starts monitoring as soon as the polyfill get loaded.
    el.onload = lazyload;
    document.head.appendChild(el);
}

// Adjust elements on resize

window.addEventListener("resize", fnResizeCaller, false);

var fnResizeCallTimer = null;

function fnResizeCaller(){
    clearTimeout(fnResizeCallTimer);  
    fnResizeCallTimer = setTimeout(fnResize, 200); 
}

var passed = false;

function fnResize() {
    console.log(passed)
    // Detect when its width length is over 980px, then add any class
    // that keeps the panels visible and remove toggler class 
    // that indicates it's active.
    if (window.innerWidth > 980 && !passed ) {

        // Hide panels and remove toggler active-button flag
        var toggles = Array.from(document.getElementsByClassName('toggle'));
        toggles.forEach(function(toggle){
            hidePenels(toggle)
        })
        passed = true;
    } else if (window.innerWidth <= 980 ){
        passed = false;
    }
}

window.addEventListener('mouseup', function(e) {
    // Detect the element on which the user has clicked.
    var activator = e.target;
        
    if(activator.closest('.toggle')){
        var toggler = activator.closest('.toggle');
        toggler.classList.toggle('change');
        document.getElementById(toggler.dataset.target).classList.toggle('show');

        // Hide all other panels and remove any effects from their togglers
        var toggles = Array.from(document.getElementsByClassName('toggle'));
        toggles.forEach(function(item){
            if(item !== toggler){
                hidePenels(item)
            }
        })
    } else if (!activator.closest(".show")){
        // If the element the user clicked is neither a toggle nor an element
        // that is being displayed because a toggler was clicked, then close all 
        // window and reset all togglers and its controlled element.
        var toggles = Array.from(document.getElementsByClassName('toggle'));
        toggles.forEach(function(item){
           hidePenels(item);
        })
    }
});

function hidePenels(toggle) {
    toggle.classList.remove("change");
    document.getElementById(toggle.dataset.target).classList.remove('show')
}
// End togglers

/* Menu close button */
document.getElementById("closeBtn").addEventListener("mouseup",function(e){
    document.getElementById("menu").classList.remove("show");
});

/* End menu close button */