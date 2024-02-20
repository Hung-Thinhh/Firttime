function validateFile(file) {
  let allowedFormats = ["jpg", "jpeg", "png"]; // Allowed file formats
  let maxSize = 5485760; // MBit in bytes
  // Check file format
  const fileName = file.name;
  const fileExtension = fileName
    .substring(fileName.lastIndexOf(".") + 1)
    .toLowerCase();
  if (!allowedFormats.includes(fileExtension)) {
    // Invalid file format
    notify("x", "Sai định dạng file!");
    return false;
  }
  if (file.size > maxSize) {
    notify("!", "Up ảnh dưới 5mb!");
    return false;
  }
  // File is valid
  return true;
}
document.addEventListener("dragover", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("modal_wrap_img_item")) {
    handleDragOver.call(event.target, event);
    console.log("o");
  }
});

document.addEventListener("dragleave", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("modal_wrap_img_item")) {
    handleDragLeave.call(event.target, event);
  }
  console.log("haha");
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("up-img-btn")) {
    console.log("pp");
    handleDrop.call(event.target, event);
  }
  console.log(event.target);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("up-img-btn")) {
    document.querySelector(".upload-input").click();
    console.log("hahah");
  }
});

document.addEventListener("change", function (event) {
  if (
    event &&
    event.target &&
    event.target.classList.contains("upload-input")
  ) {
    handleUploadInputChange.call(event.target, event);
  }
});

function handleDragOver(event) {
  event.preventDefault();
  this.classList.add("dragover");
  console.log("haha");
}

function handleDragLeave(event) {
  event.preventDefault();
  this.classList.remove("dragover");
  console.log("haha");
}

function handleDrop(event) {
  event.preventDefault();
  let files = event.dataTransfer.files;

  if (validateFile(files[0])) {
    event.preventDefault();
    this.classList.remove("dragover");
    const file = files[0];
    myFile.push(file);
    displayImage.call(document.querySelector(".modal_wrap_img"), file);
    console.log(myFile);
  }
  console.log("haha");
}

let myFile = [];
function handleUploadInputChange(event) {
  if (validateFile(event.target.files[0])) {
    const file = event.target.files[0];
    displayImage.call(this.parentElement.parentElement, file);
    myFile.push(file);
    console.log(myFile);
    // Thêm hình hiện ra
  }
}
// Thêm hình hiện ra
function displayImage(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const html = `
  <div class="img_uploaded">
    <img src="${event.target.result}" alt="">
  </div>
`;

    // Chèn thẻ mới sau thẻ đã cho
    this.insertAdjacentHTML("beforebegin", html);
  }.bind(this);

  // Tạo một thẻ mới

  reader.readAsDataURL(file);
}

document.addEventListener("mouseup", function (event) {
  event.preventDefault();
  var container = document.querySelector(".info_base_item_main_file");

  // if the target of the click isn't the container nor a descendant of the container
  if (
    !container.contains(event.target) &&
    !container.isEqualNode(event.target) &&
    container.querySelectorAll('.modal_wrap_img img[src=""]').length > 0
  ) {
    const modal_wrap_img = document.querySelectorAll(".modal_wrap_img");
    for (const item of modal_wrap_img) {
      if (item.querySelector("img").src === "") {
        item.remove();
        document.querySelector(".no-img span").textContent =
          document.querySelectorAll(".modal_img").children.length;
      }
    }
    container.style.display = "none";
  }
});

function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
  console.log("haha");
}
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  console.log("haha");
}

//
const inputElement = document.getElementById("name_product"); // Thay "myInput" bằng id của trường input của bạn
const name_product_characters = document.querySelector(
  ".name_product_input .item_input_sl span"
);
inputElement.addEventListener("keydown", function (event) {
  const inputValue = this.value;
  const characterCount = inputValue.length;

  name_product_characters.innerHTML = characterCount;

  if (
    characterCount >= 120 &&
    event.key !== "Backspace" &&
    event.key !== "Delete"
  ) {
    event.preventDefault();
  }
});

function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

const branch_group_a = document.querySelector(".branch_group_a");
const branch_group_b = document.querySelector(".branch_group_b");
const branch_group_c = document.querySelector(".branch_group_c");
const result_branch_a = document.querySelector(".result_branch_a span");
const result_branch_b = document.querySelector(".result_branch_b span");
const result_branch_c = document.querySelector(".result_branch_c span");
let group_item = "";
for (let i = 0; i < group_type.length; i++) {
  group_item += `<li id=${group_type[i].id}>
        <span>${group_type[i].name}</span
        ><i class="fa-solid fa-angle-right"></i>
      </li>`;
}
branch_group_a.innerHTML = group_item;
function handle_children_type_c() {
  let list_group_c = branch_group_c.querySelectorAll("li");

  for (const item of list_group_c) {
    item.onclick = () => {
      list_group_c.forEach(function (item) {
        item.classList.remove("active");
      });
      result_branch_c.innerHTML = item.innerHTML;
      item.classList.add("active");
    };
  }
}
function handle_children_type() {
  let list_group_b = branch_group_b.querySelectorAll("li");
  console.log(list_group_b);
  for (const item of list_group_b) {
    item.onclick = () => {
      list_group_b.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
      console.log("handle");
      let list_type_sp = "";
      for (let i = 0; i < type_sp.length; i++) {
        if (type_sp[i].id == item.id) {
          console.log(item.id);
          if (type_sp[i].children_type) {
            for (let j = 0; j < type_sp[i].children_type.length; j++) {
              list_type_sp += `<li id=${type_sp[i].children_type[j].id}>
              <span>${type_sp[i].children_type[j].name}</span>
            </li>`;
            }
          } else {
            list_type_sp = "";
          }
        }
      }
      branch_group_c.innerHTML = list_type_sp;
      result_branch_b.innerHTML = item.innerHTML;
      item.classList.add("active");
      handle_children_type_c();
    };
  }
}
const list_group_a = branch_group_a.querySelectorAll("li");
for (const item of list_group_a) {
  item.onclick = () => {
    list_group_a.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
    let list_type_sp = "";
    for (let i = 0; i < type_sp.length; i++) {
      if (type_sp[i].id_group_loai == item.id) {
        console.log(item.id);
        if (type_sp[i].children_type) {
          list_type_sp += `<li id=${type_sp[i].id}>
          <span>${type_sp[i].name}</span
          ><i class="fa-solid fa-angle-right"></i>
          </li>`;
        } else {
          list_type_sp += `<li id=${type_sp[i].id}>
          <span>${type_sp[i].name}</span>
          </li>`;
        }
      }
    }
    branch_group_b.innerHTML = list_type_sp;
    result_branch_a.innerHTML = item.innerHTML;
    item.classList.add("active");
    handle_children_type();
  };
}

const btn_bracnh_enter = document.querySelector(".btn_bracnh_enter");
const input_bracnh = document.querySelector(".industry_prtoduct_group input");
btn_bracnh_enter.onclick = () => {
  input_bracnh.value = `${result_branch_a.innerText} > ${result_branch_b.innerText} > ${result_branch_c.innerText}`;
};

const info_sell_a = document.querySelector(".info_sell_a");
const info_sell_b = document.querySelector(".info_sell_b");
const sell_btn = document.querySelector(".info_sell_a button");
const group_sell_more_btn = document.querySelector(".group_sell_more button");
let bc_info_sell = document.querySelector(".bc_info_sell");
let sell_close_btn = document.querySelectorAll(".bc_info_sell i.fa-xmark");

sell_btn.onclick = () => {
  info_sell_a.style.display = "none";
  info_sell_b.style.display = "block";
};
group_sell_more_btn.onclick = () => {
  document.querySelector(".group_sell_more").style.display = "none";
  let check = document.querySelector(".bc_info_sell_b");
  if (check) {
    check.classList.remove("bc_info_sell_b");
    check.classList.add("bc_info_sell_a");
  }
  // Chèn HTML mới sau thẻ div hiện có
  bc_info_sell.insertAdjacentHTML(
    "afterend",
    `<div class="group_sell bc_info_sell bc_info_sell_b">
<i class="fa-solid fa-xmark"></i>
<div class="row row-cols-2 info_sell_item_select">
  <div class="info_base_item">
    <div class="info_base_item_title">
      <div class="mandatory sell_name">Nhóm phân loại 2</div>
    </div>
    <div class="info_base_item_main">
      <div class="item_input search_input">
        <input
          placeholder="Vui lòng nhập ..."
          type="text"
          name="brand_name"
          class="brand_name brand_name_main"
          id = ${generateRandomId()}/>
      </div>
    </div>
  </div>
</div>
<div class="row info_sell_item_select">
  <div class="info_base_item">
    <div class="info_base_item_title">
      <div class="mandatory">Phân loại hàng</div>
    </div>
    <div class="row row-cols-2">
      <div class="info_base_item_main">
        <div class="item_input search_input">
          <input
            placeholder="Vui lòng nhập ..."
            type="text"
            name="brand_name"
            class="brand_name"
          id = ${generateRandomId()} />
        </div>
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  </div>
</div>
</div>`
  );
  const table = document.querySelector(".table");
  const headerRow = table
    .getElementsByTagName("thead")[0]
    .getElementsByTagName("tr")[0];
  const newHeaderCell = document.createElement("th");
  newHeaderCell.textContent = "Nhóm phân loại 2";
  newHeaderCell.classList.add("brand_name_main_b")
  headerRow.insertBefore(newHeaderCell, headerRow.cells[1]);
  // Lặp qua từng hàng (table row) trong tbody
  const rows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    // Tạo một ô (table cell) mới
    const newCell = document.createElement("td");
    newCell.textContent = "";

    // Chèn ô mới vào sau ô đầu tiên trong hàng
    row.insertBefore(newCell, row.cells[1]);
  }
handle_brand_name_main_table()

  handle_close_btn();
  handle_sell_select_b();
};
const hadle_insert_table = () => {
  const table = document.querySelector('table'); // Lấy bảng theo id
  const theadRow = table.querySelector("thead tr"); // Lấy hàng đầu tiên trong phần thead

  const columnCount = theadRow.querySelectorAll("th").length;
  
const tbody = table.getElementsByTagName("tbody")[0]; // Lấy phần tbody của bảng

// Tạo hàng mới
const newRow = document.createElement("tr");
  if (columnCount == 3) {

  // Tạo các ô mới cho hàng
  const cell1 = document.createElement("td");
  cell1.textContent = ""; // Thiết lập nội dung cho ô đầu tiên

  const cell2 = document.createElement("td");
  cell2.innerHTML = `<div class="set_all_sell_price search_input">
  <div class="item_input_sl">
    <span>₫</span>
  </div>
  <input type="text" placeholder="Giá" />
</div>`; // Thiết lập nội dung cho ô thứ hai

  const cell3 = document.createElement("td");
  cell3.innerHTML = `<div class="set_all_sell_price search_input">
  <input type="text" value="0" />
</div>`; // Thiết lập nội dung cho ô thứ ba

  // Thêm các ô vào hàng mới
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);

  // Thêm hàng mới vào cuối phần tbody của bảng
  tbody.appendChild(newRow);
  } else {
    // Tạo các ô mới cho hàng
  const cell1 = document.createElement("td");
  cell1.textContent = ""; // Thiết lập nội dung cho ô đầu tiên
  const cell2 = document.createElement("td");
  cell2.textContent = "";
  const cell3 = document.createElement("td");
  cell3.innerHTML = `<div class="set_all_sell_price search_input">
  <div class="item_input_sl">
    <span>₫</span>
  </div>
  <input type="text" placeholder="Giá" />
</div>`; // Thiết lập nội dung cho ô thứ hai

  const cell4 = document.createElement("td");
  cell4.innerHTML = `<div class="set_all_sell_price search_input">
  <input type="text" value="0" />
</div>`; // Thiết lập nội dung cho ô thứ ba

  // Thêm các ô vào hàng mới
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);

  // Thêm hàng mới vào cuối phần tbody của bảng
  tbody.appendChild(newRow);
  }
}
const handle_brand_name_main_table = () => {
  const brand_name_main = document.querySelectorAll(".brand_name_main"); 
  for (let i = 0; i < brand_name_main.length; i++){
    const table = document.querySelector(".table");
    
    brand_name_main[i].onchange = (e) => {
        console.log(table.getElementsByTagName("thead")[0].getElementsByTagName("th")[i])
        const firstCell = table.getElementsByTagName("thead")[0].getElementsByTagName("th")[i];
    firstCell.textContent = e.target.value;
      };
  }
  
}
handle_brand_name_main_table()

const handle_close_btn = () => {
  sell_close_btn = document.querySelectorAll(".bc_info_sell i.fa-xmark");

  sell_close_btn.forEach(function (item) {
    item.onclick = () => {
      if (sell_close_btn.length == 1) {
        console.log("hahah");
        console.log(sell_close_btn.length);
        info_sell_a.style.display = "block";
        info_sell_b.style.display = "none";
      } else {
        console.log("ha");

        item.parentElement.remove();
        document.querySelector(".sell_name").innerText = "Nhóm phân loại 1";

        document.querySelector(".group_sell_more").style.display = "block";
        bc_info_sell = document.querySelector(".bc_info_sell");
        sell_close_btn = document.querySelectorAll(".bc_info_sell i.fa-xmark");
        console.log(sell_close_btn.length);
      }
    };
  });
};
handle_close_btn();

let sell_select_input_a = document.querySelector(
  ".bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main:last-child .brand_name"
);
let sell_select_last_a = document.querySelector(
  ".bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main:last-child"
);
let remove_sell_btn_a = document.querySelectorAll(
  ".bc_info_sell_a .info_sell_item_select .info_base_item_main i.fa-trash-can"
);

const inputValues_a = [];
const inputValues_b = [];

const handle_col_table_sell = () => {
  const table = document.querySelector(".table");
  // Sửa nội dung các ô trong cột đầu tiên
  const bodyRows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  for (let i = 0; i < bodyRows.length; i++) {
    const bodyRow = bodyRows[i];
    const firstCell = bodyRow.cells[0];
    firstCell.textContent = inputValues_a[i].value;
  }
};
const handle_change_sell_input_a = (e) => {
  let list_sell_input = document.querySelectorAll(
    ".info_sell_item_select .search_input"
  );
  list_sell_input.forEach((item) => {
    item.onchange = () => {
      console.log("hahah");
      const currentInput = e.target;
      const inputValue = currentInput.value;
      const updatedObject = { id: currentInput.id, value: inputValue };

      // Tìm vị trí của đối tượng cần thay đổi trong mảng
      const index = inputValues_a.findIndex(
        (obj) => obj.id === updatedObject.id
      );

      if (index !== -1) {
        // Thay đổi đối tượng tại vị trí đã tìm thấy
        console.log("ok");
        inputValues_a[index] = updatedObject;
        handle_col_table_sell();
      }
    };
  });
};
const handle_change_sell_input_b = (e) => {
  let list_sell_input = document.querySelectorAll(
    ".bc_info_sell_b .info_sell_item_select .search_input"
  );
  list_sell_input.forEach((item) => {
    item.onchange = () => {
      console.log("hahah");
      const currentInput = e.target;
      const inputValue = currentInput.value;
      const updatedObject = { id: currentInput.id, value: inputValue };

      // Tìm vị trí của đối tượng cần thay đổi trong mảng
      const index = inputValues_b.findIndex(
        (obj) => obj.id === updatedObject.id
      );

      if (index !== -1) {
        // Thay đổi đối tượng tại vị trí đã tìm thấy
        console.log("ok");
        inputValues_b[index] = updatedObject;
      }
    };
  });
};

const handle_sell_select_a = () => {
  sell_select_input_a.addEventListener("input", handleInput);

  function handleInput(e) {
    const currentInput = e.target;
    const inputValue = currentInput.value;

    if (inputValues_a.includes(inputValue)) {
      console.log("hahaha");
      return;
    }

    inputValues_a.push({ id: currentInput.id, value: "" });

    console.log(inputValues_a);
    sell_select_last_a.insertAdjacentHTML(
      "afterend",
      `<div class="info_base_item_main">
      <div class="item_input search_input">
        <input
          placeholder="Vui lòng nhập ..."
          type="text"
          name="brand_name"
          class="brand_name"
          id = ${generateRandomId()}/>
      </div>
      <i class="fa-regular fa-trash-can"></i>
    </div>`
    );
    currentInput.removeEventListener("input", handleInput);
    sell_select_input_a = document.querySelector(
      `.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main:last-child .brand_name`
    );
    sell_select_last_a = document.querySelector(
      `.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main:last-child`
    );
    console.log(sell_select_input_a);
    sell_select_input_a.addEventListener("input", handleInput);
    console.log(document.querySelectorAll('.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main .brand_name').length)
    if (document.querySelectorAll('.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main .brand_name').length>2) {
      hadle_insert_table()
    }
    handle_change_sell_input_a(e);

    handle_remove_sell();
  }

  const handle_remove_sell = () => {
    remove_sell_btn_a = document.querySelectorAll(
      `.bc_info_sell_a .info_sell_item_select .info_base_item_main i.fa-trash-can`
    );

    remove_sell_btn_a.forEach((item) => {
      item.onclick = () => {
        console.log("ok");
        const list_select_sell_a = document.querySelectorAll(
          `.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main .brand_name`
        );
        console.log(list_select_sell);
        if (list_select_sell_a.length > 1) {
          item.parentElement.remove();
        }
        sell_select_input_a = document.querySelector(
          `.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main:last-child .brand_name`
        );
        sell_select_last_a = document.querySelector(
          `.bc_info_sell_a .info_sell_item_select:last-child .info_base_item_main:last-child`
        );
        sell_select_input_a.addEventListener("input", handleInput);
      };
    });
  };
};
const handle_sell_select_b = () => {
  let sell_select_input_b = document.querySelector(
    ".bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main:last-child .brand_name"
  );
  let sell_select_last_b = document.querySelector(
    ".bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main:last-child"
  );
  let remove_sell_btn_b = document.querySelectorAll(
    ".bc_info_sell_b .info_sell_item_select .info_base_item_main i.fa-trash-can"
  );
  sell_select_input_b.addEventListener("input", handleInput);
  function handleInput(e) {
    const currentInput = e.target;
    const inputValue = currentInput.value;

    if (inputValues_b.includes(inputValue)) {
      console.log("hahaha");
      return;
    }

    inputValues_b.push({ id: currentInput.id, value: "" });
    console.log(inputValues_b);
    sell_select_last_b.insertAdjacentHTML(
      "afterend",
      `<div class="info_base_item_main">
      <div class="item_input search_input">
        <input
          placeholder="Vui lòng nhập ..."
          type="text"
          name="brand_name"
          class="brand_name"
          id = ${generateRandomId()} />
      </div>
      <i class="fa-regular fa-trash-can"></i>
    </div>`
    );
    currentInput.removeEventListener("input", handleInput);
    sell_select_input_b = document.querySelector(
      `.bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main:last-child .brand_name`
    );
    sell_select_last_b = document.querySelector(
      `.bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main:last-child`
    );
    console.log(sell_select_input_b);
    sell_select_input_b.addEventListener("input", handleInput);
    handle_change_sell_input_b(e);
    handle_remove_sell();
  }

  const handle_remove_sell = () => {
    remove_sell_btn_b = document.querySelectorAll(
      `.bc_info_sell_b .info_sell_item_select .info_base_item_main i.fa-trash-can`
    );

    remove_sell_btn_b.forEach((item) => {
      item.onclick = () => {
        console.log("ok");
        const list_select_sell_b = document.querySelectorAll(
          `.bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main .brand_name`
        );
        console.log(list_select_sell);
        if (list_select_sell_b.length > 1) {
          item.parentElement.remove();
        }
        sell_select_input_b = document.querySelector(
          `.bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main:last-child .brand_name`
        );
        sell_select_last_b = document.querySelector(
          `.bc_info_sell_b .info_sell_item_select:last-child .info_base_item_main:last-child`
        );
        sell_select_input_b.addEventListener("input", handleInput);
      };
    });
  };
};

handle_sell_select_a();
