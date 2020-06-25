

var container = document.getElementById("container");

var newScene;


for (let index = 2; index < 72; index++) {

    newScene = document.createElement("img");
    
    newScene.src = `./images/${index + 1}.svg`;
    newScene.alt=`${index + 1}`;
    newScene.className = "scene";
    container.appendChild(newScene);
    
}