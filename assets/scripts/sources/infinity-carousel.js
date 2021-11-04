// Carousel general elements
var container, 
    track, 
    slides, 
    nextButton, 
    prevButton,
    navDots,
    dots,
// Information about the elements
    containerWidth, 
    amount, 
    currTransl = [], 
    transitionCompleted = true,
    index = 0, 
// Values that varies throughout time
    currentSlide,
    currentDot,
// Intervals
    goToPointed,
    autoMoveSlides;

// Flag to transition end
function transitioned() {
    transitionCompleted = true;
}

window.addEventListener('DOMContentLoaded', function(){
    container = document.querySelector('.carousel');
    containerWidth = parseInt(window.getComputedStyle(container).width, 10);
    nextButton = container.querySelector('.carousel__button--right');
    prevButton = container.querySelector('.carousel__button--left');
    track = container.querySelector('.carousel__track');

// Add the last item to the start so that translateX(-containerWidth) works
 /*
    That item at the start prevent the user from finding nothing if its first action is click prevButton
 */
track.insertBefore(track.children[3], track.children[0]);    
 
    slides = Array.from(track.children); 
    navDots = container.querySelector('.carousel__nav');
    dots = Array.from(navDots.children);
    amount = slides.length;

    slides.forEach(function (slide, index) {
        // Arrange the slides next to one another
        /*
            We need the -containerWidth so the last item placed at the start doesn't appear first.

        */
        slide.style.transform = 'translateX('+ ((containerWidth * index) - containerWidth) + 'px)';

        // Updates the slides position
        currTransl[index] = ((containerWidth * index) - containerWidth);
       
        // Prevent double click by user
        slide.addEventListener('transitionend', transitioned);
        slide.addEventListener('webkitTransitionEnd', transitioned);
        slide.addEventListener('oTransitionEnd', transitioned);
        slide.addEventListener('MSTransitionEnd', transitioned);
    });

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    navDots.addEventListener('click', indicatedSlide);
});

// When i click next, slides get a negative translate and the last slide get moved to the far left.
function nextSlide(e, pointedSlide) {
    if (transitionCompleted === true) {
        // When executing this function, prevent user from activating it again

        transitionCompleted = false;

         // Indicates what button has been pressed
        var flag = 1;

        // Translate every slides to the right        
        translateAll(flag);

        // Translate the far right element to the far left 
        translateOuter(index, flag);

        index++;  

        // Set current-slide
        currentSlide = track.querySelector('.current-slide');
        setCurrent(flag, currentSlide, currentSlide.nextElementSibling);

        // update indicator
        currentDot = navDots.querySelector('.current-slide');
        updateDots(flag, currentDot, currentDot.nextElementSibling);

        if(pointedSlide != null) {
            if (pointedSlide.classList.contains('current-slide')) {
                clearInterval(goToPointed);
                autoMoveSlides = setInterval(nextSlide, 5000);
            }
        }
    }
}


function prevSlide(e, pointedSlide) {
    if (transitionCompleted === true){
        // When executing this function, prevent user from activating it again
        transitionCompleted = false;
        index--;
        if (index == -1) { index = amount - 1};

         var flag = 0;

        // Translate every slides to the left
        translateAll(flag);

        // Translate the far left element to the far right 
        translateOuter(index, flag);

        // Set current-slide
        currentSlide = track.querySelector('.current-slide');
        setCurrent(flag, currentSlide, currentSlide.previousElementSibling);

        // update indicator
        currentDot = navDots.querySelector('.current-slide');
        updateDots(flag, currentDot, currentDot.previousElementSibling);

        if(pointedSlide != null) {
            clearInterval()
            if (pointedSlide.classList.contains('current-slide')) {
                clearInterval(goToPointed);
                autoMoveSlides = setInterval(nextSlide, 5000);
            }
        }
    }
}

// Translate every single slide
var translate;
function translateAll(flag){
    for (var i = 0; i < amount; i++) {
        translate = (flag === 0) ? (currTransl[i] + containerWidth) : (currTransl[i] - containerWidth);
        slides[i].style.opacity = '1';
        slides[i].style.transform = 'translateX(' + translate + 'px)';
        currTransl[i] = translate;
    }    
}

// Translate only either the far left or the far right slide
function translateOuter(index, flag){
    var outerIndex = index % amount;
    var outerSlide = slides[outerIndex];
    translate = (flag === 0) ? (currTransl[outerIndex] - (containerWidth * amount)) : (currTransl[outerIndex] + (containerWidth * amount));

    outerSlide.style.opacity = '0';
    outerSlide.style.transform = 'translateX(' + translate + 'px)';
    currTransl[outerIndex] = translate;
}

// Set current 
function setCurrent(flag, currentSlide, targetSlide) {
    if (targetSlide === null) {
        targetSlide = (flag === 1) ? slides[0] : slides[amount - 1];
    }

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


// Update dots
function updateDots(flag, currentDot, targetDot) {
    if (targetDot === null) {
        targetDot = (flag === 1) ? dots[0] : dots[amount - 1];
    }

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// When user clicks one indicator, go to specific slide
function indicatedSlide(e){
    var targetDot = e.target.closest('.carousel__indicator');
    if (!targetDot) { return }

    var dotIndex = dots.findIndex(function(dot){
        return dot === targetDot
    });

    var currentDotIndex = dots.findIndex(function (dot){ 
        return dot === navDots.querySelector('.current-slide');
    });
    
    var targetSlideIndex = (dotIndex != (dots.length - 1)) ? dotIndex + 1 : 0;

    if(dotIndex != currentDotIndex){
        if (dotIndex < currentDotIndex) {
            clearInterval(autoMoveSlides);
            goToPointed = setInterval(prevSlide, 300, null, slides[targetSlideIndex])
        }else if(dotIndex > currentDotIndex) {
            clearInterval(autoMoveSlides);
            goToPointed = setInterval(nextSlide, 300, null, slides[targetSlideIndex])
        }
    }
}

autoMoveSlides = setInterval(nextSlide, 5000);