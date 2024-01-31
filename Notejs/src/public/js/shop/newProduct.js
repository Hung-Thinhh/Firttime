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
    event.preventDefault()
  if (event.target.classList.contains("modal_wrap_img_item")) {
      handleDragOver.call(event.target, event);
      console.log('o')
  }
});

document.addEventListener("dragleave", function (event) {
    event.preventDefault()
  if (event.target.classList.contains("modal_wrap_img_item")) {
    handleDragLeave.call(event.target, event);
    }
    console.log("haha");
    
});

document.addEventListener("drop", function (event) {
    event.preventDefault()
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
    event.preventDefault()
  let files = event.dataTransfer.files;

  if (validateFile(files[0])) {
    event.preventDefault();
    this.classList.remove("dragover");
      const file = files[0];
      myFile.push(file);
      displayImage.call(document.querySelector('.modal_wrap_img'), file);
      console.log(myFile)
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
    event.preventDefault()
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
    console.log("haha");
    
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
