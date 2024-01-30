
function validateFile(file) {
    let allowedFormats = ['jpg', 'jpeg', 'png']; // Allowed file formats
    let maxSize = 5485760; // MBit in bytes
    // Check file format
    const fileName = file.name;
    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    if (!allowedFormats.includes(fileExtension)) {
        // Invalid file format
        notify('x', 'Sai định dạng file!');
        return false;
    }
    if (file.size > maxSize) {
        notify('!', 'Up ảnh dưới 5mb!');
        return false;
    }
    // File is valid
    return true;
}
document.addEventListener('dragover', function(event) {
    if (event.target.classList.contains('modal_wrap_img_item')) {
        handleDragOver.call(event.target, event);
    }
});

document.addEventListener('dragleave', function(event) {
    if (event.target.classList.contains('modal_wrap_img_item')) {
        handleDragLeave.call(event.target, event);
    }
});

document.addEventListener('drop', function(event) {
    if (event.target.classList.contains('modal_wrap_img_item')) {
        handleDrop.call(event.target, event);
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('up-img-btn')) {
        document.querySelector('.upload-input').click()
        console.log('hahah')
    }
});

document.addEventListener('change', function(event) {
    if (event && event.target && event.target.classList.contains('upload-input')) {
        handleUploadInputChange.call(event.target, event);
    }
});

function handleDragOver(event) {
    event.preventDefault();
    this.classList.add('dragover');
}

function handleDragLeave(event) {
    event.preventDefault();
    this.classList.remove('dragover');
}

function handleDrop(event) {
    let files = event.dataTransfer.files;

    if (validateFile(files[0])) {
        event.preventDefault();
        this.classList.remove('dragover');
        const file = files[0];
        displayImage.call(this, file);

        this.querySelector('.upload-input').files = files;
    }
}

function handleUploadButtonClick() {
    this.nextElementSibling.click();
}

function handleUploadInputChange(event) {
    if (validateFile(event.target.files[0])) {
        const file = event.target.files[0];
        displayImage.call(this.parentElement.parentElement, file);
    }
}

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        this.querySelector('.up-img').src = event.target.result;
    }.bind(this);
    reader.readAsDataURL(file);
    this.querySelector('.up-img-btn i').style.display = 'none';
}

document.addEventListener('mouseup', function(event) {
    var container = document.querySelector('.info_base_item_main_file');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.contains(event.target) && !container.isEqualNode(event.target) && container.querySelectorAll('.modal_wrap_img img[src=""]').length > 0) {
        const modal_wrap_img = document.querySelectorAll('.modal_wrap_img');
        for (const item of modal_wrap_img) {
            if (item.querySelector('img').src === '') {
                item.remove();
                document.querySelector('.no-img span').textContent = document.querySelectorAll('.modal_img').children.length;
            }
        }
        container.style.display = 'none';
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
}
function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }