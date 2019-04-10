document.addEventListener("DOMContentLoaded", () => {
  const addItem = document.querySelector(".addBtn");

  addItem.addEventListener("click", () => {
    const input = document.querySelector("#myInput");
    const ul = document.getElementsByTagName("ul")[0];
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("span");
    const editBtn = document.createElement('span');

    if (input.value == "") {
      alert("You have to type something!");
    } else {
      span.textContent = input.value;
      input.value = "";
      removeBtn.className = "close";
      removeBtn.textContent = "\u00D7";
      ul.appendChild(li);
      li.appendChild(span);
      li.appendChild(removeBtn);
      li.appendChild(editBtn);
      editBtn.className = 'edit';
      editBtn.textContent = 'Edit';
      

      removeBtn.addEventListener("click", () => {
        const ul = document.getElementsByTagName("ul")[0];
        const li = document.querySelector("li");
        ul.removeChild(li);
      });

      
      editBtn.addEventListener("click", () => {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';

        li.insertBefore(input, span);
        li.removeChild(span);
      });
    }
  });
});
