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
        rootMargin: "20px", 
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

// Adjust styling on resizing window
window.addEventListener('resize', function() {
    let toggles = Array.from(document.getElementsByClassName('toggle'));
    if (window.innerWidth > 980) {
        toggles.forEach(function(toggle){
            toggle.classList.remove('change');
            document.getElementById(toggle.dataset.target).classList.add('show');
        })
    }
   
}, false);

window.addEventListener('mouseup', function(e) {
    console.log(e.target)
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