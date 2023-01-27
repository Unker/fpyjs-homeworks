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
        // return this.#goods.filter(item => item.available);
        console.log(this.#goods)
        const sotrted = this.#goods.filter(item => {
            // let a = item.available;
            // let b = this.filter.test(item.name);
            // console.log(
            //     item.name,
            //     // a,'+', 
            //     b,'=',
            //     // a && b
            // )
            return item.available && this.filter.test(item.name);
        });
        let ret;
        if(sortPrice){
            if(sortDir) ret = sotrted.sort((a,b) => (a.price>b.price)?1:-1);
            else        ret = sotrted.sort((a,b) => (a.price>b.price)?-1:1);
        } else {
            ret = sotrted
        }   
        return ret

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

const good1 = new Good(name="good1a", description="asd", sizes=[1,2,3], price=123.3);
const good2 = new Good(name="g2",    description="qwe", sizes=[1,2,3], price=222.2);
const good3 = new Good(name="good3", description="qwe", sizes=[1,],    price=333.3);
const good4 = new Good(name="good4", description="qwe4",sizes=[1,],    price=44.4, available=true);
const good5 = new Good(name="good5", description="qwe5",sizes=[1,],    price=55.5, available=true);
const good6 = new Good(name="good6", description="qwe6",sizes=[10,],   price=100.5,available=true);
good1.setAvailable(true);
good2.setAvailable(true);

gl1 = new GoodsList(
    filter = /goo*/igu,
    sortPrice=1,
    sortDir=1
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


// console.log(gl1.list)

id4 = good4.id
gl1.remove(id4)

console.log(gl1.list)

// console.log(gl1.filter.test)
