document.addEventListener("DOMContentLoaded", () => {
  const addItem = document.querySelector(".addBtn");
  const ul = document.getElementsByTagName("ul")[0];
  const mainDiv = document.querySelector('.mainDiv');
  const div = document.createElement('div');
  const editIcon = "\u270E";
  const saveIcon = "\u2714";
  const removeIcon = "\u00D7";
  const priorityIcon = "\u2606";

  //This adds an item to the To Do List.
  addItem.addEventListener("click", () => {
    const input = document.querySelector("#myInput");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("span");
    const editBtn = document.createElement("span");
    const priorityBtn = document.createElement("span");

    if (input.value == "") {
      alert("You have to type something!");
    } else {
      span.textContent = input.value;
      input.value = "";
      removeBtn.className = "close";
      removeBtn.textContent = removeIcon;
      editBtn.className = "edit";
      editBtn.textContent = editIcon;
      priorityBtn.className = "priority";
      priorityBtn.textContent = "\u2606";
      ul.appendChild(li);
      li.appendChild(span);
      li.appendChild(removeBtn);
      li.appendChild(editBtn);
      li.appendChild(priorityBtn);
 

      // This removes an item from the To Do List.
      removeBtn.addEventListener("click", () => {
        const li = document.querySelector("li");
        ul.removeChild(li);
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
          }
        }
      });

      priorityBtn.addEventListener("click", () => {
        const h2 = document.createElement('h2');
        h2.textContent = 'Priority List';
        div.appendChild(h2);
        mainDiv.insertBefore(div, ul);

      });

      // This lets you check of a completed item in the To Do List.
      li.addEventListener("click", e => {
        if (e.target.tagName === "LI") {
          const checked = e.target;
          if (checked) {
            li.classList.toggle("checked");
          }
        }
      });
    }
  });

});
