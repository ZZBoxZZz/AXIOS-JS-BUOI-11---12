var teacherService = new teacherService();

function getEle(id){
    return document.getElementById(id);
}

function getListProduct(){
    teacherService.getListProductApi()
    .then(function(result){
        console.log(result.data);
        renderHTML(result.data);
    })
    .catch(function(error){
        console.log(error);
    });
}

getListProduct();


function renderHTML(data){
    var content ="";

    data.forEach(function(teacher,index){
        content += `
        <tr>
        <td>${index+1}</td>
        <td>${teacher.taiKhoan}</td>
        <td>${teacher.hoTen}</td>
        <td>${teacher.matKhau}</td>
        <td>${teacher.email}</td>
        <td>${teacher.loaiND}</td>
        <td>${teacher.ngonNgu}</td>
        <td>${teacher.moTa}</td>
        <td><img width="50px" src ="../img/${teacher.hinhAnh}"/></td>
        <td>
            <button class="btn btn-info" id="edit" data-toggle="modal"
            data-target="#myModal" onclick ="editTeacher('${teacher.id}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteTeacher('${teacher.id}')">Delete</button>
        </td>
        </tr>
        `

    });
    getEle("tblDanhSachNguoiDung").innerHTML = content;
}

/**
 * Delete
 */

function deleteTeacher(id){
    teacherService.deleteTeacherApi(id)
    .then(function(result){
        alert("Deleted");
        getListProduct();
    })
    .catch(function(error){
        console.log(error);}
        )
}

getEle("btnThemNguoiDung").onclick = function(){
    var title = "Thêm giáo viên mới"
    document.getElementsByClassName("modal-title")[0].innerHTML = title;
    var button = `<button class="btn btn-success" onclick= "addTeacher()">Thêm</button>
    <button id="close" class = "btn btn-danger" data-dismiss="modal">Đóng</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;
    
}

/**Add 
 * 
*/

function addTeacher(){
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;

    var teacher = new Teacher("", taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);

    console.log(teacher);
    function addTeacher(teacher) {
        teacherService.addTeacherApi(teacher)
        .then(function(result){
            alert("Added");
            getListProduct();
            getEle("close").click();
        })
        .catch(function(error){
            console.log(error);
        });
    }
    addTeacher(teacher);

}

/**
 * Edit
 */

 function editTeacher(id){
    var title = "Chỉnh sửa thông tin"
    document.getElementsByClassName("modal-title")[0].innerHTML = title;
    var button = `<button class="btn btn-warning" onclick= "updateTeacher(${id})">Update</button>
    <button id="close" class = "btn btn-danger" data-dismiss="modal">Đóng</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;
    
    teacherService.getTeacherByID(id)
    .then(function(result) {
        console.log(result);
        var teacher = result.data;
        console.log(teacher);
        getEle("TaiKhoan").value = teacher.taiKhoan;
        getEle("HoTen").value = teacher.hoTen;
        getEle("MatKhau").value = teacher.matKhau;
        getEle("Email").value = teacher.email;
        getEle("HinhAnh").value = teacher.hinhAnh;
        getEle("loaiNguoiDung").value = teacher.loaiND;
        getEle("loaiNgonNgu").value = teacher.ngonNgu;
        getEle("MoTa").value = teacher.moTa;
        
        })
    .catch(function(error) {
        console.log(error);});
}

function updateTeacher(id){
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;

    var teacher = new Teacher(id, taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh); 
    teacherService.editTeacherApi(teacher)
    .then(function(result){
        alert("Updated");
        getListProduct();
        getEle("close").click();
    })
    .catch(function(error){
        console.log(error);
    });
}