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
            data-target="#myModal" onclick ="editPro('${teacher.id}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct('${teacher.id}')">Delete</button>
        </td>
        </tr>
        `

    })
}