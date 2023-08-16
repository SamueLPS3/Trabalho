alert("Seus dados foram salvos");

    /*tema claro*/
    document.getElementById("btn-claro").addEventListener("click", function b(){
    document.querySelector("body").setAttribute("class","claro");
    document.querySelector("nav").setAttribute("class","navc");
    document.querySelector("input","textarea").setAttribute("class","intec");
    document.querySelector("footer").setAttribute("class","footerc");
    document.querySelector("div").setAttribute("class","diiv");
    document.querySelector("div a").setAttribute("class","diiva");
    })
    /*tema escuro*/
    document.getElementById("btn-escuro").addEventListener("click", function a(){
    document.querySelector("body").setAttribute("class","body");
    document.querySelector("nav").setAttribute("class","nav");
    document.querySelector("input","textarea").setAttribute("class","input, textarea");
    document.querySelector("footer").setAttribute("class","footer");
    document.querySelector("div").setAttribute("class","div");
    document.querySelector("div a").setAttribute("class","div a");
    })
    /*tema 1*/
    document.getElementById("btn-tema1").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","tem1");
    })
    /*tem 2*/
    document.getElementById("btn-tema2").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","tem2");
    })
    /*tema 3*/
    document.getElementById("btn-tema3").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","tem3");
    })

    console.log(b(555));