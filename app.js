document.addEventListener("DOMContentLoaded", () => {
  const addItem = document.querySelector(".addBtn");
  const editIcon = "\u270E";
  const saveIcon = "\u2714";

  addItem.addEventListener("click", () => {
    const input = document.querySelector("#myInput");
    const ul = document.getElementsByTagName("ul")[0];
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("span");
    const editBtn = document.createElement("span");

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
      editBtn.className = "edit";
      editBtn.textContent = "\u270E";

      removeBtn.addEventListener("click", () => {
        const ul = document.getElementsByTagName("ul")[0];
        const li = document.querySelector("li");
        ul.removeChild(li);
      });

      editBtn.addEventListener("click", e => {
        if (e.target.tagName == "SPAN") {
          const spanEdit = e.target;
          if (spanEdit.textContent === editIcon) {
            const span = li.firstElementChild;
            const input = document.createElement("input");
            const editBtn = document.querySelector(".edit");
            input.type = "text";
            input.className = "editField";
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            editBtn.textContent = saveIcon;

          } else if (spanEdit.textContent === saveIcon) {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            const editBtn = document.querySelector(".edit");
            span.textContent = input.value;
            input.textContent = span;
            li.insertBefore(span, input);
            li.removeChild(input);
            editBtn.textContent = editIcon;

          }
        }
      });
    }
  });
});
