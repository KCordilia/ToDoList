document.addEventListener("DOMContentLoaded", () => {
  const addItem = document.querySelector(".addBtn");
  const ul = document.getElementsByTagName("ul")[0];
  const editIcon = "\u270E";
  const saveIcon = "\u2714";

  //This adds an item to the To Do List.
  addItem.addEventListener("click", () => {
    const input = document.querySelector("#myInput");
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
      localStorage["list"] = ul.innerHTML;

      // This removes an item from the To Do List.
      removeBtn.addEventListener("click", () => {
        // const ul = document.getElementsByTagName("ul")[0];
        const li = document.querySelector("li");
        ul.removeChild(li);
        localStorage["list"] = ul.innerHTML;
      });

      //This lets you edit an item in the To Do List.
      editBtn.addEventListener("click", e => {
       const clickedLi = e.currentTarget.closest('li');
        if (e.target.tagName == "SPAN") {
          const spanEdit = e.target;
          if (spanEdit.textContent === editIcon) {
            const span = clickedLi.firstElementChild;
            const input = document.createElement("input");
            const editBtn = clickedLi.querySelector(".edit");
            input.type = "text";
            input.className = "editField";
            input.value = span.textContent;
            clickedLi.insertBefore(input, span);
            clickedLi.removeChild(span);
            editBtn.textContent = saveIcon;
          } else if (spanEdit.textContent === saveIcon) {
            const input = clickedLi.firstElementChild;
            const span = document.createElement("span");
            const editBtn = clickedLi.querySelector(".edit");
            console.log(input, span, editBtn)
            span.textContent = input.value;
            input.textContent = span;
            clickedLi.insertBefore(span, input);
            clickedLi.removeChild(input);
            editBtn.textContent = editIcon;
            // localStorage["list"] = ul.innerHTML;
          }
        }
      });
      // This lets you check of a completed item in the To Do List.
      li.addEventListener("click", e => {
        if (e.target.tagName === "LI") {
          const checked = e.target;
          if (checked) {
            li.classList.toggle("checked");
          }
        }
        localStorage["list"] = ul.innerHTML;
      });
    }
  });

});
