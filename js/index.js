/*
 * @Author: wangyongjie 
 * @Date: 2018-04-22 09:38:33 
 * @Last Modified by: wangyongjie
 * @Last Modified time: 2018-04-22 10:00:51
 */

$(document).ready(function(){
    $("button").click(function(){
        var Content = $(this).siblings("input");
        Content.select();
        document.execCommand("Copy"); 
        alert("复制成功")
    })
})