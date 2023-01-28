const e = require("express");

class Good {
    /*
    id            Код товара
    name          Наименование
    description   Описание
    sizes         массив возможных размеров
    price         цена товара
    available     Признак доступности для продажи
    */
    constructor (id, name, description, sizes, price, available=false) {
        this.name = name;
        this.description = description ;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
        this.id = id;
    }

    setAvailable(isAvailable) {
        this.available = !!isAvailable;
    }
}

// класс для хранения каталога товаров со свойствами
class GoodsList {
    /*
    #goods       массив экземпляров объектов класса Good (приватное поле)
    filter       регулярное выражение используемое для фильтрации товаров по полю name
    sortPrice    булево значение, признак включения сортировки по полю Price
    sortDir      булево значение, признак направления сортировки по полю Price 
    (true - по возрастанию, false - по убыванию)
    */
    #goods = [];
    constructor (filter, sortPrice, sortDir) {
        this.filter = filter;
        this.sortPrice = sortPrice ;
        this.sortDir = sortDir;
    }

    // возвращает массив доступных для продажи товаров в соответствии с установленным фильтром 
    // и сортировкой по полю Price
    get list() {
        const filtered = this.#goods.filter(item =>  this.filter.test(item.name) && item.available);
        if(!sortPrice){
            return filtered
        } else {
            if(this.sortDir) return filtered.sort((a,b) => (a.price>b.price)?1:-1);
            else        return filtered.sort((a,b) => (a.price<b.price)?1:-1);
        }  
    }   

    // добавление товара в каталог
    add(good) {
        this.#goods.push(good)
    }          

    // удаление товара из каталога по его id
    remove(id) {
        this.#goods = this.#goods.filter(item => item.id !== id);
    }
}

// класс дочерний от Good, для хранения данных о товаре в корзине с дополнительным свойством
class BasketGood extends Good {
    constructor (good) {
        if (good instanceof Good) {
            super(
                id          =good.id,
                name        =good.name,
                description =good.description,
                sizes       =good.sizes,
                price       =good.price,
                available   =good.available,
            )
            this.amount = 1;
        } else {
            throw new Error(`parameter 'good' is not instance of ${Good}`);
        }
    }
}

// класс для хранения данных о корзине товаров со свойствами
class Basket {
    constructor (goods) {
        this.goods = goods;
    }

    // возвращает общее количество товаров в корзине
    get totalAmount() {
        return this.goods.reduce( (sum, current ) => sum.amount + current.amount );
    }
        
    // возвращает общую стоимость товаров в корзине
    get totalSum() {
        return this.goods.reduce( (sum, current ) => sum.amount*sum.price + current.amount*current.price );
    }   

    // Добавляет товар в корзину, если товар уже есть увеличивает количество
    add(good, amount) {
        // проверяем наличие товара в корзине
        let index = this.goods.indexOf(good)
        if (index>=0){
            console.log("change amount")
            this.goods[index].amount += amount;
        } 
        else {
            console.log("push item")
            good.amount = amount;
            this.goods.push(good);

        }
    }    

}

const good1 = new Good(id=1, name="good1a",description="asd", sizes=[1,2,3], price=123.3);
const good2 = new Good(id=2, name="g2",    description="qwe", sizes=[1,2,3], price=222.2);
const good3 = new Good(id=3, name="good3", description="qwe", sizes=[1,],    price=333.3);
const good4 = new Good(id=4, name="good4", description="qwe4",sizes=[1,],    price=44.4, available=true);
const good5 = new Good(id=5, name="good5", description="qwe5",sizes=[1,],    price=55.5, available=true);
const good6 = new Good(id=6, name="good6", description="qwe6",sizes=[10,],   price=100.5,available=true);
good1.setAvailable(true);
good2.setAvailable(true);

gl1 = new GoodsList(
    filter = /goo/iu,
    sortPrice=1,
    sortDir=1
);
gl2 = new GoodsList(
    filter = /goo/iu,
    sortPrice=1,
    sortDir=0
);

// console.log(good1)
// console.log(good2)
// console.log(gl1.list)
gl1.add(good1)
gl1.add(good2)
gl1.add(good3)
gl1.add(good4)
gl1.add(good5)
gl1.add(good6)

gl2.add(good1)
gl2.add(good2)
gl2.add(good3)
gl2.add(good4)
gl2.add(good5)
gl2.add(good6)

id4 = good4.id
gl1.remove(id4)

// console.log(gl1.list)
// console.log(gl2.list)

bg1 = new BasketGood(good1)
// console.log(bg1)

// bg2 = new BasketGood(123)
// console.log(bg2)

bg3 = new BasketGood(good3)
bg3.amount=10
// console.log(bg3)
bg4 = new BasketGood(good4)

basket = new Basket([bg1, bg3])
console.log(basket)
basket.add(bg4, amount=2)
basket.add(bg1, amount=3)
console.log(basket)





// console.log(`totalAmount in basket =`, basket.totalAmount)
// console.log(`totalSum in basket =`, basket.totalSum)