const actionsBasket = {

  addToBasket: (id) => {
    return async(dispatch, getState) => {

    let sum = 0;
    // Ищем товар в корзие, чтобы увеличить его количество. Заодно получаем новый массив items
    let exists = false;

    const items = getState().basket?.items?.map(item => {
      
      let result = item;
      // в случае если нашли наш товар
      if (item.id === id) {
        exists = true;
        result = {...item, amount: item.amount + 1, selfTotalSum: item.price + item.selfTotalSum};
      }
      // Добавляея в общую сумму
      sum += result.price * result.amount;
      return result
    });

    // Если товар не был найден в корзине, то добавляем его из каталога
    if (!exists) {
      // Поиск товара в каталоге
      const item = getState().catalog.items.find(item => item.id === id);
      items.push({...item, amount: 1, selfTotalSum: item.price});
      // Досчитываем сумму
      sum += item.price;
    }

    dispatch({type: 'basket/add', payload: {items, sum, totalAmount: items.length}});
    }
  },

}

export default actionsBasket;


