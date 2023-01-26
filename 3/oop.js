class Good {
    /*
    id            Код товара
    name          Наименование
    description   Описание
    sizes         массив возможных размеров
    price         цена товара
    available     Признак доступности для продажи
    */
    static id = 0;
    constructor (name, description, sizes, price, available=false) {
        this.id = Good.id++;
        this.name = name;
        this.description = description ;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable(isAvailable) {
        this.available = !!isAvailable;
    }
}

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

    // возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
    get list() {
        // return this.#goods.forEach(item => {
        //     console.log(item)
        //     item.available
        // });
        console.log(this.prototype)
        let tmp =  this.#goods.filter(item => {
            console.log(item)
            // item.available 
            true;
        });
        console.log(tmp)

        return
    }   

    // добавление товара в каталог
    add(good) {
        this.#goods.push(good)
    }          

    // удаление товара из каталога по его id
    remove(id) {

    }
}

good1 = new Good(
    name="good1",
    description="asd",
    sizes=[1,2,3],
    price=123.3,
);
good1.setAvailable(true);

good2 = new Good(
    name="good2",
    description="qwe",
    sizes=[1,2,3],
    price=222.2,
);

good3 = new Good(
    name="good3",
    description="qwe",
    sizes=[1,],
    price=333.3,
);

gl1 = new GoodsList(
    filter = /goo/igu,
    sortPrice=1,
    sortDir=1
);

// console.log(good1)
// console.log(good2)
// console.log(gl1.list)
gl1.add(good3)
gl1.add(good1)
console.log(gl1.list)
