// REGION 1 Global Variables / nơi khai báo các biến toàn cục
// REGION 2 Vùng gán/thực thi sự kiện cho các element 
// REGION 3 Event handlers / vùng khai báo các hàm xử lý sự kiện

// event click button
function onClickButton(){
    // khoi tao doi tuong
    let vObjectData ={
        yourname:"",
        youremail:"",
        subject:"",
        message:""
    };
    // ham lay du lieu
    getDataByForm(vObjectData);
    // hàm kiểm tra dữ liệu 
    if(!checkData(vObjectData)) {
        showFailResult();
    } 
    else{
        showSuccessResult();
    }
}

// REGION 4 Common Function / Vùng khai báo các hàm dùng chung trong chương trình
// Hàm kiểm tra dữ liệu đã được nhập hay chưa
function checkData(paraData){

    
    //Truy xuất phần tử WARNING thông qua id và lưu vào biến
    let waringName = document.getElementById(`warning-name`);
    let warningEmail = document.getElementById(`warning-email`);
    let warningSub = document.getElementById(`warning-subject`);
    let warningMes = document.getElementById(`warning-mes`)

    let result = true;
    if(paraData.yourname===""){
        waringName.innerHTML=`Không được để trống Name!`;
        result = false;
    }
    else{
        waringName.innerHTML=``;
    }
    if(paraData.youremail==""){
        warningEmail.innerHTML=`Không được để trống Email!`;
        result = false;
    }
    else{
        warningEmail.innerHTML=``;
    }
    if(paraData.subject===""){
        warningSub.innerHTML = `Không được để trống Subject!`;
        result = false;
    }
    else{
        warningSub.innerHTML = ``;
    }
    if(paraData.message===""){
        warningMes.innerHTML = `Không được để trống Message!`;
        result = false;
    }
    else{
        warningMes.innerHTML = ``;
    }
    if(!validateEmail()){
        result = false;
    }
    return result;
}


// lay du lieu từ form

function getDataByForm(paraData){
        // Truy xuất phần tử thông qua id và lưu vào biến
        let vYourname = document.getElementById("inp-name");
        let vYouremail = document.getElementById("inp-email");
        let vSubject = document.getElementById("inp-subject");
        let vMess = document.getElementById("area-mes");

        // gan du lieu lay duoc vao doi tuong

        paraData.yourname = vYourname.value;
        paraData.youremail = vYouremail.value;
        paraData.subject = vSubject.value;
        paraData.message = vMess.value;
}
// hien thị thành công

// validate email 
function validateEmail(){
    let warningEmail = document.getElementById(`warning-email`);
    let vYouremail = document.getElementById("inp-email").value;
    let form = document.getElementById("form-email");
    let text = document.getElementById("text");
    let result =true;
    let parttern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(vYouremail.match(parttern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = `Your Email Address Valid!`;
        text.style.padding = `0 12px`;
        warningEmail.innerHTML='';
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = `Please Enter Valid Email Address!`;
        text.style.padding = `0 12px`;
        warningEmail.innerHTML='';
        result = false;
    }
    if(vYouremail ===""){
        form.classList.remove(`valid`);
        form.classList.remove(`invalid`);
        text.innerHTML = "";
        warningEmail.innerHTML=`Không được để trống Email!`;
    }
    return result;
}

// show result 

function showSuccessResult(){
    let result  = document.getElementById("result");
    result.classList.remove("fail");
    result.classList.add("success");
    result.innerHTML = `<i class="fa-solid fa-check" style="margin-right: 12px;"></i>Dữ liệu kiểm tra đã hợp lệ!`;
}
function showFailResult(){
    let result  = document.getElementById("result");
    result.classList.remove("success");
    result.classList.add("fail");
    result.innerHTML = `<i class="fa-solid fa-xmark" style = "margin-right:12px;"></i>Dữ liệu kiểm tra chưa hợp lệ!`;
}