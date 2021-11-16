// Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// Carousel
var btnNextArticles = [].slice.call(document.getElementsByClassName('next'));
var btnPrevArticles = [].slice.call(document.getElementsByClassName('previous'));
var artGroupsSet = [].slice.call(document.getElementsByClassName('articles-set'));
// Take the viewport width once the page is loaded
var referenceWidth = window.innerWidth;

// In order to listen the click on all next buttons in the page
for (var i = 0; i < btnNextArticles.length; i++) {
    btnNextArticles[i].addEventListener('click', nextGroup);
    btnPrevArticles[i].addEventListener('click', previousGroup)
}

// Once the page is loaded adapt the artices' containers to the viewport width
if (referenceWidth <= 1000) {
    for (var i = 0; i < artGroupsSet.length; i++) {
        squeezeGroup(artGroupsSet[i], referenceWidth); 
    }
}

var set,
    artGroups,
    currGroup,
    nextArtGroup,
    prevArtGroup,
    index;

function findIndex(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

function nextGroup(e) {
    if (e.target) { e = e.target.closest('.next') };
    findIndex(btnNextArticles, e);
    set = artGroupsSet[findIndex(btnNextArticles, e)];
    artGroups = [].slice.call(set.children);

    currGroup = set.querySelector('.order-1');
    nextArtGroup = currGroup.nextElementSibling;

    var nextArtGroupIndex = findIndex(artGroups, nextArtGroup)

    currGroup.classList.remove('order-1');
    nextArtGroup.classList.add('order-1');
    hideAndShowButtons(artGroups.length, e, btnPrevArticles[findIndex(btnNextArticles, e)], nextArtGroupIndex);
}

function previousGroup(e) {
    if (e.target) { e = e.target.closest('.previous') };
    set = artGroupsSet[findIndex(btnPrevArticles, e)];
    artGroups = [].slice.call(set.children);

    currGroup = set.querySelector('.order-1');
    prevArtGroup = currGroup.previousElementSibling;

    var prevArtGroupIndex = findIndex(artGroups, prevArtGroup);
    currGroup.classList.remove('order-1');
    prevArtGroup.classList.add('order-1');

    hideAndShowButtons(artGroups.length, btnNextArticles[findIndex(btnPrevArticles, e)], e, prevArtGroupIndex)
}

function hideAndShowButtons(amount, nextBtn, prevBtn, targetIndex) {
    if (targetIndex === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else if (targetIndex === amount - 1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

/*
  Codification for the article carousel to work
*/

// When the vw get narrower, then borrow some articles cards to the next articles' group
function squeezeGroup(set, vw) {
    artGroups = [].slice.call(set.children);
    var max = (vw >= 780) ? 4 :
              (vw < 780) ? 3 : 0;

    for (var i = 0; i < artGroups.length; i++) {
        while (artGroups[i].children.length > max) {
            borrowLastChild(set, artGroups[i], artGroups);
        }
    }
}

function borrowLastChild(set, group, artGroups) {
    var article = group.lastChild;
    if (!group.nextElementSibling) {
        var newGroup = document.createElement('div');
        newGroup.classList.add('articles-group');
        set.appendChild(newGroup);
        // Update the array, so the new group can be verified
        artGroups.push(newGroup);

        // Take the index of the slide being shown to the user  
        var currGroup = findIndex(artGroups, set.querySelector('.order-1'));
        index = findIndex(artGroupsSet, set);
        // Updates the buttons' state
        hideAndShowButtons(set.children.length, btnNextArticles[index], btnPrevArticles[index], currGroup);
    }
    // Insert the last child of the group being verified into the newx group
    group.nextElementSibling.insertBefore(article, group.nextElementSibling.firstChild);
}

// When the vw get wider, then push borrowed articles cards back
function stretchGroup(set, vw) {
    artGroups = [].slice.call(set.children); 
    var min = (vw >= 900) ? 5 :
              (vw >= 780) ? 4 : 0;

    artGroups.forEach(function(group, index) {
        var nextGroup = group.nextElementSibling;
        // If there's no other group, then stop the function execution
        if (nextGroup === null) { return }
        var articles = group.children; // List all articles currently inside the group
    
        while (articles.length < min || nextGroup.children.length == 0) {
            // If the nextGroup is empty (with not a single one child), then remove the nextGroup
            if (removeEmpty(set, nextGroup, artGroups) === true) {
                break;
            }

            // Lend a child from the next group
            group.appendChild(nextGroup.firstChild);
        }
    });
}

function removeEmpty(set, nextGroup, artGroups) {
    if (nextGroup.children.length == 0) {
        // If the current group and the next group are the same, than go to the previous group of articles. 
        index =findIndex(artGroupsSet, set);
        if (set.querySelector('.order-1') === nextGroup) {
            previousGroup(btnPrevArticles[index]);
        };

        // Remove the empty group 
        set.removeChild(nextGroup);

        // Update the new current group, which is gonna be the previous group of articles
        currGroup = findIndex(artGroups, set.querySelector('.order-1'));

        // Updates the state of the left and right buttons.
        hideAndShowButtons(set.children.length, btnNextArticles[index], btnPrevArticles[index], currGroup);
        return true;
    }
}


window.addEventListener('resize', function() {
    var actualWidth = window.innerWidth; 

    // Squeeze all groups (the containers of articles) if the viewport width is getting lower
    if (actualWidth < referenceWidth) {
        if (actualWidth <= 1000) {
            for (var i = 0; i < artGroupsSet.length; i++) {
                squeezeGroup(artGroupsSet[i], actualWidth); // Send an ariticle-set and  actual width.
            }
        }
        referenceWidth = actualWidth; // Update referenceWidth
    // Stretch all groups (the containers of articles) if the viewport width is getting greater
    } else if (actualWidth > referenceWidth) {
        if (actualWidth >= 780) {
            for (var i = 0; i < artGroupsSet.length; i++) {
                stretchGroup(artGroupsSet[i], actualWidth);
            }
        }
        referenceWidth = actualWidth; // Update referenceWidth
    }
});


// Control aside list.
function showAsideList(ele){
  Document.getElementById("aside-list").style.right = "0";
}

Document.getElementById("list-toggler").addEventListener('click',showAsideList)