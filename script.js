
function req(){

var request = new XMLHttpRequest();
        request.open('GET', 'https://upadhayay.github.io/db.json', true);
        request.onload = function () {
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                data.books.forEach(book => {
                    console.log(book.title);
                    // set the each book in the block with id blogs
                    var div = document.createElement("div");
                    var css = "border: 1px solid black; padding: 10px; margin: 10px;  background-color: #f1f1f1; ";
                    if(book.published){
                        css += "background-color: #4CAF50; color: white;"
                    }
                    if(book.year > 2010){
                        css += "background-color: #f44336; color: white;"
                    }
                    if(book.year > 2015){
                        css += "background-color: #2196F3; color: white;"
                    }
                    if(book.author== undefined){
                        book.author = "Albert Einstein";
                    }
                    div.innerHTML =
                        `<h3>${book.title}</h3>
                        <p>${book.year}</p>
                        <p>${book.published}</p>
                        <p>${book.author}</p>
                        <p>${book.id}</p>
                        `
                        ;
                    div.style.cssText = css;
                    
                    document.getElementById("books").appendChild(div);
                });
            } else {
                console.log('error');
            }
                
        }
        request.send();

    }