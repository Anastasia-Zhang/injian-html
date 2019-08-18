var cur_addressId = 0;
var addressVO = {};
var g_addressList = [];
var g_confirmOrderList = [];

function queryUserAddress() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8070/address/listAddress",
        xhrFields:{withCredentials:true},
        success:function(data){
            if(data.status =="success"){
                g_addressList = data.data;
                reloadAddressDOM();
            }else{
                alert("获取地址信息失败，原因为： "+data.data.errMsg);
            }
        },
        error:function(data){
            alert("获取地址信息创建失败，原因为"+data.responseText);
        }
    });
}

function reloadAddressDOM() {
    for (var i = 0; i < g_addressList.length; i++) {
        var addressVO = g_addressList[i];
        var dom = "<dl class='item' id='address" + addressVO.addressId + "' onclick='checkAddress("+addressVO.addressId+")'>" +
            "<dt>" +
            "<strong class='itemConsignee'>" + addressVO.rcvdName + "</strong>" +
            "</dt>" +
            "<dd>" +
            "<p class='tel itemTel'>" + addressVO.rcvdTel + "</p>" +
            "<p clas='itemZipCode'>" + addressVO.zipCode + "</p>" +
            "<p class='itemStreet'>" + addressVO.addressDetail + "</p>" +
            "<span class='edit-btn_or J_editAddr'>编辑</span>" +
            "</dd>" +
            "<dd style='display: none'>" +
            "<input type='radio' id='addressRadio"+addressVO.addressId+"' name='checkAddress' class='addressId' value='"+addressVO.addressId+"'  >" +
            "</dd>"+
            "</dl>";
        $("#address-container").append($(dom));
    }
}

function queryConfirmOrderList() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8070/order/confirmOrder",
        xhrFields:{withCredentials:true},
        data:{
            orderIdList:getParam("orderIdList"),
        },
        success:function(data){
            if(data.status =="success"){
                g_confirmOrderList = data.data;
                reloadOrderDOM();

            }else{
                alert("获取订单信息失败，原因为： "+data.data.errMsg);
            }
        },
        error:function(data){
            alert("获取订单信息失败，原因为"+data.responseText);
        }
    });
}

function reloadOrderDOM() {
    for (var i = 0; i < g_confirmOrderList.length; i++) {
        var orderVO = g_confirmOrderList[i];
        var dom = "<tr>" +
            "<td>" +
            "<a data-id='" + orderVO.itemId + "' id='itemDetail" + orderVO.itemId + "' >" + orderVO.itemName + "</a>" +
            "</td>" +
            "<td>" +
            "<img style='width:200px;height:150px;border: 1px solid black;' src=" + orderVO.imgUrl + "/>" +
            "</td>" +
            "<td>" + orderVO.itemPrice + "</td>" +
            "<td>" + orderVO.amount + "</td>" +
            "<td>" + orderVO.orderPrice + "</td>" +
            "<td>" + orderVO.orderTime + "</td>" +
            "</tr>";

        $("#confirmOrderList").append($(dom));
    }
}

function checkAddress(addressId) {
    //alert("check");
    var thisCheck = $("#addressRadio"+addressVO.addressId);
    var flag = thisCheck.is(":checked");
    alert(flag);
    // var thisCheck = $("input[type=radio][name=checkAddress]");
    // alert(thisCheck.val());
    //如果原先未选中，设置为选中状态添加css
    if(flag){
        thisCheck.attr("checked",'');
        $("#address"+addressId).css("background",'#fafafa');
        $("#address"+addressId).css("border",'1px #dfdfdf solid');
    }else{
        thisCheck.prop("checked",true);
        $("#address"+addressId).css("background",'white');
        $("#address"+addressId).css("border",'1.5px black solid');
    }
}

function confirmOrder() {

}



function getParam(paramName)
{
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1)
    {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound)
            arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() ==
            paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}