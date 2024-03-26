
import { API_PRODUCT } from "./constants.js";
import { fetchApi } from "./fetchApi.js";
//1
import { product,params } from "./variable.js";

export const drawProduct=()=>{
const api=`${API_PRODUCT}?title=${params.title}`;
//params import tu 1
fetchApi(api)
.then(data=>{
    
    const arrayHTML=data.map(item=>{
        return `
        <div class="product_item">
            <div class="product_image">
                <img src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474076SPG/cach-doi-dinh-dang-anh-jpg-truc-tiep-tren-iphone_022454763.jpg" alt="${item.title}"/>
                <div class="product_percent">
                    ${item.discountPercentage}%
                </div>
            </div>
            <div class="product_content">
                <h3 class="product_title">${item.title}</h3>
                <div class="product_meta">
                    <div class="product_price">
                        ${item.price}
                    </div>
                    <div class="product_stock">
                        Còn lại: ${item.stock}
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    const stringHTML=arrayHTML.join("");
    console.log(stringHTML);
    product.innerHTML=stringHTML;
})

}