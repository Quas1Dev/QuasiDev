// Control aside list.
function showAsideList(ele){
  document.getElementById("aside-list").classList.toggle("show");
}

document.getElementById("list-toggler").addEventListener('click',showAsideList);