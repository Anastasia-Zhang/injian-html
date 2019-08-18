jQuery(document).ready(function(){
    var userVO = {};
    function login(){
        var telphone = $("#telphone").val();
        var password = $("#password").val();
        if (telphone == null|| telphone == "") {
            alert("手机号不能为空");
            return false;
        }
        if (password == null|| password == "") {
            alert("密码不能为空");
            return false;
        }
        $.ajax({
            type:"POST",
            contentType:"application/x-www-form-urlencoded",
            url:"http://localhost:8070/user/login",
            data:{
                "telphone":telphone,
                "password" :password,
            },
            xhrFields:{withCredentials:true},
            success:function(data){
                if(data.status =="success"){
                    alert("登录成功");
                    window.location.reload();

                }else{
                    alert("登录失败，原因为： "+data.data.errMsg);
                }
            },
            error:function(data){
                alert("登录失败，原因为"+data.responseText);
            }
        });
    }
    function logout(){
        $.ajax({
            type:"POST",
            url:"http://localhost:8070/user/logout",
            xhrFields:{withCredentials:true},
            success:function(data){
                if(data.status =="success"){
                    alert("已经登出");
                    window.location.href = "home.html";
                    // $("#login-text").text("登录");
                    // $(".panel_login").show();
                    // $(".panel_login_after").hide();
                }else{
                    alert("失败，原因为： "+data.data.errMsg);
                }
            },
            error:function(data){
                alert("失败，原因为"+data.responseText);
            }
        });
    }


    $("#login").on("click",function(){
        login();
    });
    $("#logout").on("click",function () {
        logout();
    });


})




