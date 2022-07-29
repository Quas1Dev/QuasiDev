(function() {
    'use strict';
    /**
     * =============
     * Go-to-top button config
     * =============
     */
    var goToTop = {
        init: function() {
            goToTop.showBtn();
            setTimeout(goToTop.btnClick(),0);
        },
        btnClick: function() {
            var goToTopBtn = document.getElementById('go-to-top-button');
            goToTopBtn.addEventListener('click', function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
        },
        showBtn: function() {
            var goToTopBtn = document.getElementById('go-to-top-button');
            goToTopBtn.style.opacity = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? "1" : "0";
        }

    }
    /**
     * =============
     * End go-to-top button config
     * =============
     */

    /**
     * ==================
     *  LAZYLOAD
     * ==================
     */
    let lazyload = {
        // Instructions to the IntersectionObserver
        init: function() {
            // Add polyfills if necessary
            if (!'IntersectionObserver' in window) { lazyload.apiPoly() }
            if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) { lazyload.intersectingPoly() }

            // Create a new instersection oberserver
            var ob = new IntersectionObserver(function(entries, self) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var el = entry.target;

                        if (el.tagName == "PICTURE") {
                            var sources = el.querySelectorAll('source');
                            sources.forEach(function(source) {
                                source.srcset = source.dataset.srcset;
                            })
                        } else if (el.tagName == "IMG" ||
                            el.tagName == "IFRAME") {

                            el.src = el.dataset.src;
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

            lazyload.setElements(ob);
        },
        setElements: function(ob) {
            // Find the elements to be monitored
            var lazyElements = document.querySelectorAll('.lazy');

            // Set the observer just created to monitor the selected
            // elements.
            lazyElements.forEach(function(lazyElement) {
                ob.observe(lazyElement);
            })

        },
        intersectingPoly: function() {
            Object.defineProperty(window.IntersectionObserverEntry.prototype,
                'isIntersecting', {
                    get: function() {
                        return this.intersectionRatio > 0;
                    }
                });
        },
        apiPoly: function() {
            // Add pollyfill if necessary
            var el = document.createElement('script');
            el.src = "polyfills/inob.min.js";
            // This will summon the function that creates the observer
            // and starts monitoring as soon as the polyfill gets loaded.
            document.head.appendChild(el);
        }
    }
    /*== END LAZYLOAD ==*/

    /*==  ADJUST ELEMENTS ON RESIZE ==*/
    window.addEventListener("resize", fnResizeCaller, false);

    var fnResizeCallTimer = null;

    function fnResizeCaller() {
        // Debouncing resize function execution until user is done resizing
        // https://medium.com/@vaibhavar/ui-performance-window-resize-handler-debouncing-2ec5f7432165
        clearTimeout(fnResizeCallTimer);
        fnResizeCallTimer = setTimeout(fnResize, 200);
    }

    var passed = false;

    function fnResize() {
        // Detect when window's width is over 980px, then hide panels and
        // diactivate their togglers.
        if (!passed && window.innerWidth > 980) {
            hidePenels()
            passed = true;
        } else if (window.innerWidth <= 980) {
            // Set to false once window's width is lower than 980px
            // This is necessary so the if statement is executed only
            // when hiding panels is needed.
            passed = false;
        }
    }
    /*== END ADJUST ELEMENTS ON RESIZE ==*/

    /*== ADJUST ELEMENTS ON MOUSEUP ==*/

    // Add event listeners to togglers - Show or hide target elements
    var togglers = Array.from(document.querySelectorAll('.toggle'));

    togglers.forEach((item, i) => {
      item.addEventListener('mouseup', function (e) {
        var toggler = e.target.closest('.toggle');
        toggler.classList.toggle('change');
        document.getElementById(toggler.dataset.target).classList.toggle('show');

        // Hide all other pannels and undo any toggler animation
        togglers.forEach(function(item) {
            if (item !== toggler) {
                item.classList.remove("change");
                document.getElementById(item.dataset.target).classList.remove('show');
            }
        })
        // Prevents a mouseup event to execute on window
        e.stopPropagation();
      })
    });

    function hidePenels(toggle) {
        var toggles = Array.from(document.getElementsByClassName('toggle'));
        toggles.forEach(function(toggle) {
            toggle.classList.remove("change");
            document.getElementById(toggle.dataset.target).classList.remove('show')
        })
    }

    window.addEventListener('mouseup', function(e) {
      // Close all toggle al togglers and hide contoled panels
      var toggles = Array.from(document.getElementsByClassName('toggle'));
      toggles.forEach(function(toggle) {
          toggle.classList.remove("change");
          document.getElementById(toggle.dataset.target).classList.remove('show')
      })
    })
    /*== END ADJUST ELEMENTS ON MOUSEUP ==*/

    /* Menu close button */
    document.getElementById("closeMenu").addEventListener("mouseup",
        function(e) {
            document.getElementById("menu").classList.remove("show");
        });

    /* End menu close button */

    /* Cookies MessageBox close button */
    var cookieBox = document.getElementById("cookies");
    document.getElementById("closeCookies").addEventListener("mouseup",
        function(e) {
            cookieBox.classList.remove("show");
            localStorage.setItem('closedCookies', 'true');
        }
    );
    /* End Cookies MessageBox close button */

    if (!localStorage.getItem('closedCookies')) {
        document.getElementById("cookies").classList.add('show');
    }

    var search = {
        init: function() {
            // Create a new instersection oberserver
            var ob = new IntersectionObserver(function(entries, self) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        search.loadcse();
                        search.setCookie();
                        self.unobserve(entry.target);
                    }
                })
            });
            ob.observe(document.getElementById('search'));
        },
        loadcse: function() {
            var script = document.createElement('script');
            script.src = 'https://cse.google.com/cse.js?cx=a58e9417228cb9070';
            document.head.appendChild(script);
        },
        setCookie: function() {
            localStorage.setItem('clickedSearch', 'true');
        }
    }

    goToTop.init();
    setTimeout(lazyload.init(),0);
    setTimeout(search.init(),0);
    window.addEventListener("scroll", function() {
        goToTop.showBtn();
    });
})();
