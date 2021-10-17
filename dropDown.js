function dropDown(element){
    var dropdown = document.getElementById(element);
    if(dropdown.className == "nav-item"){
        dropdown.className += " actived";
    }else{
        dropdown.className = "nav-item";
    }
}