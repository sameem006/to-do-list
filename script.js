         var add = document.querySelector('#Add');
        var input = document.querySelector('input');
        var u1 = document.getElementById('todo');

        add.onclick = function () {
            ip1 = input.value;

            if (ip1 !== "") {

                //list creation
                var li = document.createElement('li');
                li.className = "li"
                li.style.listStyleType = 'none'
                li.style.fontSize = "20px"

                //tick box creation
                var check = document.createElement('input');
                check.type = "checkbox"
                check.className = "check"

                //list text creation
                var span = document.createElement('span');
                span.textContent = " " + ip1;

                //tick box
                check.onclick = function () {
                    span.classList.toggle('line');
                };

                //delete button
                var bt = document.createElement('button');
                bt.className = "bt"
                bt.innerHTML = "🗑"


                //select option
                var select = document.createElement('select')
                select.className = "select"
                

                var prior1 = document.createElement('option')
                prior1.innerHTML = "Low"
                prior1.style.backgroundColor = "green"

                var prior2 = document.createElement('option')
                prior2.innerHTML = "Medium"
                prior2.style.backgroundColor = "yellow"

                var prior3 = document.createElement('option')
                prior3.innerHTML = "High"
                prior3.style.backgroundColor = "red"

                

                select.appendChild(prior1)
                select.appendChild(prior2)
                select.appendChild(prior3)

                //edit option
                var edit = document.createElement('button');
                edit.className = "edit"
                edit.innerHTML = "Edit";
                edit.onclick = function(){
                    span.contentEditable = "true";
                    span.focus();//to focus on the text
                }


                li.appendChild(check);
                li.appendChild(span);
                li.appendChild(select);
                li.appendChild(edit)
                li.appendChild(bt);
                u1.appendChild(li);


                //delete all button with transition
                deleteall.onclick = function () {
                    const items = document.querySelectorAll('li');
                    items.forEach(li => {
                        li.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                        li.style.transform = 'translateX(100%)';
                        li.style.opacity = '0';
                        setTimeout(() => {
                            li.remove();
                        }, 500);
                    });
                };


                //delete single list
                bt.onclick = function () {
                    li.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                    li.style.transform = 'translateX(100%)';
                    li.style.opacity = '0';
                    setTimeout(() => li.remove(), 500);
                };

                input.value = "";//finally changin input into nothing
            }
        }
