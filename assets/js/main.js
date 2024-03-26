//1
import { drawProduct } from "./drawProduct.js";
//2
import {buttonSearch,inputSearch, params } from "./variable.js";
const search=()=>{
    params.title=inputSearch.value;
    //title o day la mk dinh nghia ben variable thoi, title hien tren url la nam co dinh o duong dan í
    // inputSearch la tu 1*, value la gia tri cua dc nhap vao trong o
    drawProduct();
    
}
//dc lay tu 1
drawProduct();
buttonSearch.addEventListener("click",function(){
   search();
});
inputSearch.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
    search();
    }
})
// lang nghe xem phim nguwoi dung vua click la phim gi
//end search