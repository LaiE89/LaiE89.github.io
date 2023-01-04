function load(path_to_file, divID) {
    let file = new XMLHttpRequest();
    let allText = "file not found";
    file.onreadystatechange = function () {
        if (file.readyState === XMLHttpRequest.DONE && file.status == 200) {
            allText = file.responseText;
            allText = allText.split("\n").join("<br>");
        }
        const text_field = document.getElementById(divID);
        text_field.innerHTML = allText;
        text_field.style.textAlign = "center";
        text_field.style.color = 'white';
        text_field.style.fontSize = "large";
        text_field.style.padding = "16px 16px 16px 16px";
        text_field.style.lineHeight = 1.5;
    }
    file.open("GET", path_to_file, true);
    file.send(null);
}