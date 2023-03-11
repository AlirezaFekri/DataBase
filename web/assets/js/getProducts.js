const table = document.querySelector(".show-product__table");
function addRowTable(value) {

    for (let i = 0; i <= Object.keys(value).length - 1; i++) {

        const jsonKey = Object.keys(value);
        let tr = document.createElement("tr");
        tr.id = `${value[jsonKey[i]].id}`;

        let key = Object.keys(value[jsonKey[i]]);

        for (let j = 0; j < key.length; j++) {
            let td = document.createElement("td");

            if (j == 0) {
                td.classList.add("img");
                td.style.background = `url('${value[jsonKey[i]].img}') no-repeat`;
                td.style.backgroundSize = "cover";
                tr.appendChild(td);
                continue;
            }
            if (j == key.length - 1) {
                continue;
            }
            if (key[j] == "dateInsert") {
                const date = parseInt(value[jsonKey[i]][key[j]]);
                const time = new Date(date);
                td.innerText = `${time.getDate()} / ${time.getMonth()} / ${time.getFullYear()}`;
                tr.appendChild(td);
                continue;
            }
            td.innerText = value[jsonKey[i]][key[j]];
            tr.appendChild(td);
        }
        const operator = document.createElement("td");
        const links = "<a href ='#' >ویرایش</a> | <a href ='#' class = 'delete-product__table'>حذف</a>"
        operator.innerHTML = links;
        tr.appendChild(operator);
        table.appendChild(tr);

    }
}


fetch("./../controller/showProduct.php")
    .then(res => res.json())
    .then(product => addRowTable(product))