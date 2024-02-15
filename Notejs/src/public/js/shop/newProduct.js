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

console.log(group_type);
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
      list_group_c.forEach(function(item) {
        item.classList.remove("active");
      });
      result_branch_c.innerHTML = item.innerHTML;
      item.classList.add('active')

    };
  }
}
function handle_children_type() {
  let list_group_b = branch_group_b.querySelectorAll("li");
  console.log(list_group_b);
  for (const item of list_group_b) {
    item.onclick = () => {
      list_group_b.forEach(function(item) {
        item.classList.remove("active");
      });
      item.classList.add('active')
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
            list_type_sp=''
          }
        }
      }
      branch_group_c.innerHTML = list_type_sp;
      result_branch_b.innerHTML = item.innerHTML;
      item.classList.add('active')
      handle_children_type_c()
    };
  }
}
console.log(type_sp);
const list_group_a = branch_group_a.querySelectorAll("li");
for (const item of list_group_a) {
  item.onclick = () => {
    list_group_a.forEach(function(item) {
      item.classList.remove("active");
    });
    item.classList.add('active')
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
    item.classList.add('active')
    handle_children_type();
  };
}

const btn_bracnh_enter = document.querySelector('.btn_bracnh_enter')
const input_bracnh = document.querySelector('.industry_prtoduct_group input')
btn_bracnh_enter.onclick = () => {
  input_bracnh.value = `${result_branch_a.innerText} > ${result_branch_b.innerText} > ${result_branch_c.innerText}`;
}
