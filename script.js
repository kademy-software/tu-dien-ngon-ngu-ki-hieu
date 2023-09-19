let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'bà',
        price: 0,
        quantity: 0,
        image: 'database_dic/bà.png',
        
    },
    {
        id: 2,
        name: 'bạn bè',
        price: 0,
        quantiy: 30,
        image: 'database_dic/ban_be.png',
        
    },
    {
        id: 3,
        name: 'bao nhiêu tiền',
 
        quantiy: 30,
        image: 'database_dic/bao_nhieu_tien.png',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 4,
        name: 'bệnh viện',
  
        quantiy: 30,
        image: 'database_dic/benh_vien.png',
      
    },
    {
        id: 5,
        name: 'bí mật',

        image: 'database_dic/bi_mat.png',
       
    },
    {
        id: 6,
        name: 'cảm ơn',

        image: 'database_dic/cam_on.png',
       
    },
    {
        id: 7,
        name: 'đồ vật',

        image: 'database_dic/do_vat.png',
       
    },
    {
        id: 8,
        name: 'đồng ý',

        image: 'database_dic/dong_y.png',
       
    },
    {
        id: 9,
        name: 'đồ vật',

        image: 'database_dic/do_vat.png',
       
    },
    {
        id: 10,
        name: 'đừng',

        image: 'database_dic/dung.png',
       
    },
    {
        id: 11,
        name: 'gia đình',

        image: 'database_dic/family.png',
       
    },
    {
        id: 12,
        name: 'giáo viên',

        image: 'database_dic/giao_vien.png',
       
    },
    {
        id: 13,
        name: 'hạnh phúc',

        image: 'database_dic/hanh_phuc.png',
       
    },
    {
        id: 14,
        name: 'ghét',

        image: 'database_dic/hate.png',
       
    },
    {
        id: 15,
        name: 'kết thúc',

        image: 'database_dic/ket_thuc.png',
       
    },
    {
        id: 15,
        name: 'ngôi sao',

        image: 'database_dic/ngoi_sao.png',
       
    },
    {
        id: 15,
        name: 'phút',

        image: 'database_dic/phút.png',
       
    },
    {
        id: 15,
        name: 'thể dục',

        image: 'database_dic/the_duc.png',
       
    },
    {
        id: 15,
        name: 'mệt mỏi',

        image: 'database_dic/tired.png',
       
    },
    {
        id: 15,
        name: 'tôi yêu bạn',

        image: 'database_dic/toi_yeu_ban.png',
       
    },
    {
        id: 15,
        name: 'trường học',

        image: 'database_dic/truong_hoc.png',
       
    },
    {
        id: 15,
        name: 'vui vẻ',

        image: 'database_dic/vui_ve.png',
       
    },

];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
       

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
       


        return true;
    })
    showProduct(productFilter);
})