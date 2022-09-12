// REGION 1 Global Variables / nơi khai báo các biến toàn cục

// REGION 2 Vùng gán/thực thi sự kiện cho các element 
$(document).ready(function () {
    $(`#btn-send`).on(`click`, function () {
        onClickButton();
    })
    $(`#inp-email`).on(`keydown`, function () {
        validateEmail();    
    });
    function onClickButton() {
        // khoi tao doi tuong
        let vObjectData = {
            yourname: "",
            youremail: "",
            subject: "",
            message: ""
        };
        // ham lay du lieu
        getDataByForm(vObjectData);
        // hàm kiểm tra dữ liệu 
        if (!checkData(vObjectData)) {
            showFailResult();
        }
        else {
            showData(vObjectData);
            showSuccessResult();
        }
    }

    // REGION 4 Common Function / Vùng khai báo các hàm dùng chung trong chương trình
    // Hàm kiểm tra dữ liệu đã được nhập hay chưa
    function checkData(paraData) {

        //Truy xuất phần tử WARNING thông qua id và lưu vào biến
        // let waringName = document.getElementById(`warning-name`);
        let warningEmail = $(`#warning-email`);
        let warningSub = $(`#warning-subject`);
        let warningMes = $(`#warning-mes`);
        let warningName = $('#warning-name');

        let result = true;
        if (paraData.yourname === "") {
            warningName.html(`Không được để trống Name!`);
            result = false;
        }
        else {
            waringName.html(``);
        }
        if (paraData.youremail == "") {
            warningEmail.html (`Không được để trống Email!`);
            result = false;
        }
        else {
            warningEmail.html(``);
        }
        if (paraData.subject === "") {
            warningSub.html(`Không được để trống Subject!`);
            result = false;
        }
        else {
            warningSub.html(``);
        }
        if (paraData.message === "") {
            warningMes.html(`Không được để trống Message!`);
            result = false;
        }
        else {
            warningMes.html(``);
        }
        if (!validateEmail()) {
            result = false;
        }
        return result;
    }


    // lay du lieu từ form

    function getDataByForm(paraData) {
        // Truy xuất phần tử thông qua id và lưu vào biến
        let vYourname =$("#inp-name");
        let vYouremail = $("#inp-email");
        let vSubject = $("#inp-subject");
        let vMess = $("#area-mes");

        // gan du lieu lay duoc vao doi tuong

        paraData.yourname = vYourname.val();
        paraData.youremail = vYouremail.val();
        paraData.subject = vSubject.val();
        paraData.message = vMess.val();
    }


    // validate email 
    function validateEmail() {
        let warningEmail = $(`#warning-email`);
        let vYouremail = $("#inp-email").val();
        let form = $("#form-email");
        let text = $("#text");
        let result = true;
        let parttern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (vYouremail.match(parttern)) {
            form.addClass("valid");
            form.removeClass("invalid");
            text.html(`Your Email Address Valid!`);
            text.css(`padding = 0 12px`);
            warningEmail.html(``);
        }
        else {
            form.removeClass("valid");
            form.addClass("invalid");
            text.html(`Please Enter Valid Email Address!`);
            text.css(`padding = 0 12px`);
            warningEmail.html(``);
            result = false;
        }
        if (vYouremail === "") {
            form.removeClass(`valid`);
            form.removeClass(`invalid`);
            text.html(``) ;
            warningEmail.html(`Không được để trống Email!`);
        }
        return result;
    }

    // show result 
    // hien thị thành công
    function showSuccessResult() {
        let result = $("#result");
        result.removeClass("fail");
        result.addClass("success");
        result.html(`<i class="fa-solid fa-check" style="margin-right: 12px;"></i>Dữ liệu kiểm tra đã hợp lệ!`);
    }
    // hien thi that bai
    function showFailResult() {
        let result = $("#result");
        result.removeClass("success");
        result.addClass("fail");
        result.html(`<i class="fa-solid fa-xmark" style = "margin-right:12px;"></i>Dữ liệu kiểm tra chưa hợp lệ!`);
    }

    // show du lieu lay duoc tu form
    function showData(paraData) {
        alert(`Dữ liệu nhận được từ form là: 
                    Tên: ${paraData.yourname}
                    Email: ${paraData.youremail}
                    Subject: ${paraData.subject}
                    Message: ${paraData.message}`)
    }

})

// REGION 3 Event handlers / vùng khai báo các hàm xử lý sự kiện

// event click button
