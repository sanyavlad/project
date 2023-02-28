// 1. Получить данные о товарах из БД 
//....data=>transformData(data)
const getData = () => {
    //1.Запрос
    //2.Получили data
    const data = [
        {"type":"header","version":"5.0.4","comment":"Export to JSON plugin for PHPMyAdmin"},
        {"type":"database","name":"ishopnew"},
        {"type":"table","name":"product","database":"ishopnew","data":
        [
        {"id":"1","category_id":"6","brand_id":"1","title":"Casio MRP-700-1AVEF","alias":"casio-mrp-700-1avef","content":null,"price":"300","old_price":"0","status":"1","keywords":null,"description":null,"img":"p-1.png","hit":"0"},
        {"id":"2","category_id":"6","brand_id":"1","title":"Casio MQ-24-7BUL","alias":"casio-mq-24-7bul","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<\/p>\n\n                                            <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.<\/p>","price":"70","old_price":"80","status":"1","keywords":null,"description":null,"img":"p-2.png","hit":"1"},
        {"id":"3","category_id":"6","brand_id":"1","title":"Casio GA-1000-1AER","alias":"casio-ga-1000-1aer","content":null,"price":"400","old_price":"0","status":"1","keywords":null,"description":null,"img":"p-3.png","hit":"1"},
        {"id":"4","category_id":"7","brand_id":"2","title":"Citizen JP1010-00E","alias":"citizen-jp1010-00e","content":null,"price":"400","old_price":"0","status":"1","keywords":null,"description":null,"img":"p-4.png","hit":"1"},
        {"id":"5","category_id":"7","brand_id":"2","title":"Citizen BJ2111-08E","alias":"citizen-bj2111-08e","content":null,"price":"500","old_price":"0","status":"1","keywords":null,"description":null,"img":"p-5.png","hit":"1"},
        {"id":"6","category_id":"7","brand_id":"2","title":"Citizen AT0696-59E","alias":"citizen-at0696-59e","content":null,"price":"350","old_price":"355","status":"1","keywords":null,"description":null,"img":"p-6.png","hit":"1"},
        {"id":"7","category_id":"6","brand_id":"3","title":"Q&Q Q956J302Y","alias":"q-and-q-q956j302y","content":null,"price":"20","old_price":"0","status":"1","keywords":null,"description":null,"img":"p-7.png","hit":"1"},
        {"id":"8","category_id":"6","brand_id":"4","title":"Royal London 41040-01","alias":"royal-london-41040-01","content":null,"price":"90","old_price":"0","status":"1","keywords":null,"description":null,"img":"p-8.png","hit":"1"},
        {"id":"9","category_id":"6","brand_id":"4","title":"Royal London 20034-02","alias":"royal-london-20034-02","content":null,"price":"110","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"10","category_id":"6","brand_id":"4","title":"Royal London 41156-02","alias":"royal-london-41156-02","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<\/p>\n\n                                            <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.<\/p>","price":"100","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"1"},
        {"id":"11","category_id":"3","brand_id":"2","title":"Тестовый товар","alias":"testovyy-tovar","content":"контент...","price":"10","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"12","category_id":"7","brand_id":"2","title":"Часы 1","alias":"chasy-1","content":null,"price":"100","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"13","category_id":"7","brand_id":"2","title":"Часы 2","alias":"chasy-2","content":null,"price":"105","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"14","category_id":"7","brand_id":"2","title":"Часы 3","alias":"chasy-3","content":null,"price":"110","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"15","category_id":"7","brand_id":"2","title":"Часы 4","alias":"chasy-4","content":null,"price":"115","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"16","category_id":"7","brand_id":"2","title":"Часы 5","alias":"chasy-5","content":null,"price":"115","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"17","category_id":"7","brand_id":"2","title":"Часы 6","alias":"chasy-6","content":null,"price":"120","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"20","category_id":"7","brand_id":"2","title":"Часы 7","alias":"chasy-7","content":null,"price":"120","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"21","category_id":"7","brand_id":"2","title":"Часы 8","alias":"chasy-8","content":null,"price":"120","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"22","category_id":"7","brand_id":"2","title":"Часы 9","alias":"chasy-9","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"23","category_id":"7","brand_id":"2","title":"Часы 10","alias":"chasy-10","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"24","category_id":"7","brand_id":"2","title":"Часы 11","alias":"chasy-11","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"25","category_id":"7","brand_id":"2","title":"Часы 12","alias":"chasy-12","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"26","category_id":"7","brand_id":"2","title":"Часы 13","alias":"chasy-13","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"27","category_id":"7","brand_id":"2","title":"Часы 14","alias":"chasy-14","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"28","category_id":"7","brand_id":"2","title":"Часы 15","alias":"chasy-15","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"29","category_id":"7","brand_id":"2","title":"Часы 16","alias":"chasy-16","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"30","category_id":"7","brand_id":"2","title":"Часы 17","alias":"chasy-17","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"31","category_id":"7","brand_id":"2","title":"Часы 18","alias":"chasy-18","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"32","category_id":"7","brand_id":"2","title":"Часы 19","alias":"chasy-19","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"},
        {"id":"33","category_id":"7","brand_id":"2","title":"Часы 20","alias":"chasy-20","content":null,"price":"125","old_price":"0","status":"1","keywords":null,"description":null,"img":"no_image.jpg","hit":"0"}
        ]
        }
        ];
    //3.Возвратить    
    return data;
}

// 2. Данные получены. Распаковать данные
const transformData = (data) => {
    const productsData = data[2].data;
    return productsData;
}
    

// 3. Отрендерить данные на странице
const renderData = (data) => {
   
    data.forEach( (elem) => {
        /* let productMarkup = `
        <div class="col-md-3 product-left">
            <div class="product-main simpleCart_shelfItem">
                <a href="single.html" class="mask"><img class="img-responsive zoom-img" src="images/${elem.img}" alt="" /></a>
                <div class="product-bottom">
                    <h3>${elem.title}</h3>
                    <p>Explore Now</p>
                    <h4><a class="item_add" href="#"><i></i></a> <span class=" item_price">$ ${elem.price}</span></h4>
                </div>
                ${ (elem.old_price != 0) ? 
                `<div class="srch">
                <span> -${Math.round(100 - elem.price * 100 / elem.old_price)}% </span>
            </div>` : ""}
                
            </div>
        </div>
        `; */
        let productMarkup = `
        <div data-sid='${elem.id}' class="col-md-3 product-left">
            <div class="product-main simpleCart_shelfItem">
                <a href="single.html" class="mask"><img class="img-responsive zoom-img" src="images/${elem.img}" alt="" /></a>
                <div class="product-bottom">
                    <h3>${elem.title}</h3>
                    <p>Explore Now</p>
                    <h4><a class="item_add" href="#"><i></i></a> <span class=" item_price">$ ${elem.price}</span></h4>
                </div>
                
                ${
                    elem.old_price != 0 &&

                    `<div class="srch">
                        <span> -${Math.round(100 - elem.price * 100 / elem.old_price)}% </span>
                    </div>`
                }
                
            </div>
        </div>
        `;
        // elem.title;
        // let div = document.createElement('div');
        // div.classList.add('test');
        // document.querySelector('prod')?.append(div);

        
        document.querySelector('.product .product-one').insertAdjacentHTML('beforeend', productMarkup);
        
    } );
    
}


const rowData = getData();
const productsData = transformData(rowData);
renderData(productsData);




