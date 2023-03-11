const tbody = document.querySelector("tbody");
tbody.addEventListener("click", del);

function del(event) {
    if (event.target.innerText == `حذف`) {
        const att = event.target.parentElement.parentElement;
        fetch(`./../controller/DeleteProduct.php?delid=${att.id}`, {
            method: "POST",
            body: JSON.stringify({
                'id': att.id
            }),
            headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        })
        tbody.removeChild(att);

    } else {
        event.preventDefault();
    }
}