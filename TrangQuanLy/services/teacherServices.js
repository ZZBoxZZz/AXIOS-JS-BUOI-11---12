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



}