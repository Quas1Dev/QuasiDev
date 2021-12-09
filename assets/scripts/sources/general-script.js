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

window.addEventListener("load", function(){
    if (window.innerWidth > 980) {
        // Detect when it is not over 980 anymore, then add any class
        // that keeps the panels visible and remove toggler class 
        // that indicates it's active.
        window.addEventListener("resize", hidePanels, false);
    } else {
        // Detect when it is not equal or less than 980 anymore, 
        // then remove any class that keeps the panels visible 
        // or that indicates that its toggler is active.
        window.addEventListener("resize", revealPanels, false);
    }
}, false)

function revealPanels() {
    if (window.innerWidth > 980) {
        console.log("Show Panels")
        let toggles = Array.from(document.getElementsByClassName('toggle'));
        toggles.forEach(function(toggle){
            toggle.classList.remove('change');
            document.getElementById(toggle.dataset.target).classList.add('show');
        })
        window.removeEventListener("resize", revealPanels, false);
        console.log('Event removed revealPanels removed.');
        window.addEventListener('resize', hidePanels, false);
    }
    
}

function hidePanels() {
    if (window.innerWidth <= 980 ) {
        // Hide panels and remove toggler active-button flag
        let toggles = Array.from(document.getElementsByClassName('toggle'));
        toggles.forEach(function(toggle){
            toggle.classList.remove('change');
            document.getElementById(toggle.dataset.target).classList.remove('show');
        })

        window.removeEventListener("resize", hidePanels, false);
        window.addEventListener('resize', revealPanels, false)
    }
}

window.addEventListener('mouseup', function(e) {
    // Detect the element on which the user has clicked.
    let activator = e.target;

    if(window.innerWidth < 980){
        let toggles = Array.from(document.getElementsByClassName('toggle'));
        if(activator.closest('.toggle')){
            let toggler = activator.closest('.toggle');
            toggler.classList.toggle('change');
            document.getElementById(toggler.dataset.target).classList.toggle('show');

            toggles.forEach(function(item){

                if(item !== toggler){
                    item.classList.remove("change");
                    document.getElementById(item.dataset.target).classList.remove('show')
                }
            })
        }

        // If the element the user clicked is neither a toggle nor an element
        // that is being displayed because the toggle was clicked, then close all 
        // window and reset all togglers and its controlled element. 
        if(!activator.closest('.toggle') && !activator.closest(".show")){
            toggles.forEach(function(item){
                item.classList.remove("change");
                document.getElementById(item.dataset.target).classList.remove('show')
            })
        }
    }
});
// End togglers

/* Menu close button */
document.getElementById("closeBtn").addEventListener("mouseup",function(e){
    document.getElementById("menu").classList.remove("show");
});

/* End menu close button */