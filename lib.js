'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */

const itemRepeater =
  itemName =>
    count => {
    if (count === 0){
      return []
    }
    const list = itemRepeater(itemName)(count-1)
    list.push(itemName)
    return list
  }
    /**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */

const constructCarts =
  listings =>
    customers => {
      const arr = [{'customer': '', 'shoppingList': []}]
      arr.length = 0

      customers.forEach(customer=> {
        let shoppingList = []
        Object.keys(customer.shoppingList).forEach(item=> {
            shoppingList = shoppingList.concat(itemRepeater(item)(customer.shoppingList[item]))
        }
      )
        arr.push({customer: customer.name, shoppingList: shoppingList})
    })
      return arr
    }
module.exports = {
  listing,
  customer,
  constructCarts
}
