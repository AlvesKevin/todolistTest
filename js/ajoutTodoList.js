document.getElementById("addBtn").onclick = function () {ajoutTache()};

function ajoutTache(){
    var nouvelleTache = document.createElement("li");
    var tache = document.getElementById("textToDoList").value;
    var ajoutTache = document.createTextNode(tache);

    var myNodelist = document.getElementsByTagName("LI");
    var i;

    nouvelleTache.appendChild(ajoutTache);
    if (tache === '') {
        alert("Il faut écrire quelque chose");
    } else {
        document.getElementById("containerTodolist").appendChild(nouvelleTache);
        document.getElementById("textToDoList").value= "";

        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }


        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}


