const add = document.querySelector('#Add');
const input = document.querySelector('#input');
const todoList = document.getElementById('todo');
const deleteAll = document.getElementById('deleteall');

add.onclick = function () {
    const task = input.value.trim();
    if (task !== "") {
        const li = document.createElement('li');
        li.style.listStyleType = 'none';

        // Checkbox
        const check = document.createElement('input');
        check.type = "checkbox";
        check.className = "check";

        // Task text
        const span = document.createElement('span');
        span.textContent = " " + task;

        check.onclick = function () {
            span.classList.toggle('line');
        };

        // Priority selector
        const select = document.createElement('select');
        select.className = "select";

        const priorities = [
            { text: "Low", color: "green" },
            { text: "Medium", color: "yellow" },
            { text: "High", color: "red" }
        ];

        priorities.forEach(p => {
            const opt = document.createElement('option');
            opt.innerHTML = p.text;
            opt.style.backgroundColor = p.color;
            select.appendChild(opt);
        });

        // Edit button
        const edit = document.createElement('button');
        edit.className = "edit";
        edit.innerHTML = "Edit";
        edit.onclick = function () {
            span.contentEditable = "true";
            span.focus();
        };

        // Delete button
        const bt = document.createElement('button');
        bt.className = "bt";
        bt.innerHTML = "🗑";
        bt.onclick = function () {
            li.style.transform = 'translateX(100%)';
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 500);
        };

        // Append all elements
        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(select);
        li.appendChild(edit);
        li.appendChild(bt);
        todoList.appendChild(li);

        input.value = "";
    }
};

// Delete all
deleteAll.onclick = function () {
    const items = document.querySelectorAll('li');
    items.forEach(li => {
        li.style.transform = 'translateX(100%)';
        li.style.opacity = '0';
        setTimeout(() => li.remove(), 500);
    });
};
