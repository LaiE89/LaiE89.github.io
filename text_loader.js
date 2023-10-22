function load(path_to_file, divID) {
    let file = new XMLHttpRequest();
    let allText = "file not found";
    file.onreadystatechange = function () {
        if (file.readyState === XMLHttpRequest.DONE && file.status == 200) {
            allText = file.responseText;
            const lines = allText.split("\n");
            let listIndent = 0;

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trim();

                if (line.startsWith('- ')) {
                    listIndent++;
                    line = '<ul style="margin-left: ' + listIndent * 20 + 'px;"><li>' + line.slice(2).trim() + '</li>';
                }
                else if (line.startsWith('\t- ')) {
                    listIndent ++;
                    listIndent ++;
                    line = '<ul style="margin-left: ' + listIndent * 20 + 'px;"><li>' + line.slice(2).trim() + '</li>';
                }
                else if (listIndent > 0) {
                    line = '<li>' + line + '</li>';
                }

                while (line.endsWith('</li>')) {
                    line += '</ul>';
                    listIndent--;
                }

                lines[i] = line;
            }

            allText = lines.join('<br>');
        }

        const text_field = document.getElementById(divID);
        text_field.innerHTML = allText;
        text_field.style.textAlign = "left";
        text_field.style.color = 'white';
        text_field.style.fontSize = "large";
        text_field.style.padding = "16px 16px 50px 50px";
        text_field.style.lineHeight = 1.5;
    }
    file.open("GET", path_to_file, true);
    file.send(null);
}