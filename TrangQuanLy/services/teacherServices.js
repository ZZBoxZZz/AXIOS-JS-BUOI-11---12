function teacherService(){
    this.getListProductApi = function(){
        return axios({
            url: "https://637b69a76f4024eac20ce2d3.mockapi.io/api/user",
            method: "GET"
        });
    }
    this.deleteTeacherApi = function(id){
        return axios({
            url: `https://637b69a76f4024eac20ce2d3.mockapi.io/api/user/${id}`,
            method: "DELETE"
        });
    }
    this.addTeacherApi = function(product){
        return axios({
            url: `https://637b69a76f4024eac20ce2d3.mockapi.io/api/user`,
            method: "POST",
            data: product,
        });
    }
    this.getTeacherByID = function(id){
        return axios({
            url: `https://637b69a76f4024eac20ce2d3.mockapi.io/api/user/${id}`,
            method: "GET"
        });
    }
    this.editTeacherApi = function(product){
        return axios({
            url: `https://637b69a76f4024eac20ce2d3.mockapi.io/api/user/${product.id}`,
            method: "PUT",
            data: product,
        });
    }


}