const verbose = true;

const goods = [
    /*
    id            Код товара
    name          Наименование
    description   Описание
    sizes         массив возможных размеров
    price         цена товара
    available     Признак доступности для продажи
    */
    {
        id: 0,
        name: 'name0',
        description: 'qwe0',
        sizes: 12300,
        price: 100.01,
        available: true,
    },
    {
        id: 1,
        name: 'name1',
        description: 'qwe1',
        sizes: 123,
        price: 111.11,
        available: true,
    },
    {
        id: 2,
        name: 'name2',
        description: 'qwe2',
        sizes: 22,
        price: 222.22,
        available: true,
    },
    {
        id: 3,
        name: 'name3',
        description: 'qwe3',
        sizes: 12333,
        price: 333.33,
        available: true,
    },
    {
        id: 4,
        name: 'name4',
        description: 'qwe4',
        sizes: 12344,
        price: 444.44,
        available: true,
    },
    {
        id: 5,
        name: 'name5',
        description: 'qwe5',
        sizes: 12355,
        price: 55.55,
        available: true,
    },
]

const basket = [
    /*
    good           ссылка на товар в каталоге
    amount         количество товара в корзине
    */
    {
        good: goods[0],
        amount: 5,
    },
    {
        good: goods[3],
        amount: 2,
    },
]

// функция добавления товара в корзину
function appendToBasket(good, amount=1) {
    basket.push({
        good:good,
        amount:amount,
    })
}

// функция удаления одного товара из корзины
function delFromBasket(good, amount=1) {
    basket.push({
        good:good,
        amount:amount,
    })
}

// функция полной очистки корзины
function clearBasket() {
    basket.splice(0,basket.length);
}

// Функция вычисления общего количества и стоимости товаров в корзине. 
// Функция возвращает объект, содержащий поля:
// totalAmount    Общее количество товаров в корзине
// totalSumm      Общая стоимость товаров в корзине
function calcTotalsFromBasket() {
    let totalAmount = 0;
    let totalSumm = 0;
    basket.forEach(function(item) {
        totalAmount += item.amount;
        totalSumm += item.amount*item.good.price;
    });
    return {totalAmount:totalAmount, totalSumm:totalSumm}
}


if(verbose) console.log("=-=-=-=-=-=-= Before clearing=-=-=-=-=-=-= \n", basket)
clearBasket()
if(verbose) console.log("=-=-=-=-=-=-= After clearing=-=-=-=-=-=-= \n", basket)
appendToBasket(goods[2])
appendToBasket(goods[4],3)
appendToBasket(goods[4],1)
if(verbose) console.log("=-=-=-=-=-=-= Add good=-=-=-=-=-=-= \n", basket)
console.log(calcTotalsFromBasket())