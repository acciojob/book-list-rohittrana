document.getElementById("submit").addEventListener("click", function (e) {

    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>
            <button class="delete">X</button>
        </td>
    `;

    document.getElementById("book-list").appendChild(row);

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});


// Delete a book
document.getElementById("book-list").addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

});//your JS code here. If required.
