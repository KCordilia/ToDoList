document.addEventListener("DOMContentLoaded", () => {
  const addItem = document.querySelector(".addBtn");

  addItem.addEventListener("click", () => {
    const input = document.querySelector("#myInput");
    const ul = document.getElementsByTagName("ul")[0];
    const li = document.createElement("li");
    const removeBtn = document.createElement("span");
    const editBtn = document.createElement('button');

    if (input.value == "") {
      alert("You have to type something!");
    } else {
      li.textContent = input.value;
      input.value = "";
      removeBtn.className = "close";
      removeBtn.textContent = "\u00D7";
      ul.appendChild(li);
      li.appendChild(removeBtn);
      li.appendChild(editBtn);
      editBtn.className = 'edit';
      editBtn.textContent = 'Edit';

      removeBtn.addEventListener("click", () => {
        const ul = document.getElementsByTagName("ul")[0];
        const li = document.querySelector("li");
        ul.removeChild(li);
      });
    }
  });
});
