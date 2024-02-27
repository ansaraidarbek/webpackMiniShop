import render from "./render"
import buy from "./cart"
require("./style.css")
const data = [{'id':1, 'name':'Пылесос', 'price':30000},
    {'id':2, 'name':'PS5', 'price': 298000},
   {'id':3, 'name':'Телефон', 'price':150000},
   {'id':4, 'name':'Зарядка', 'price': 1000} ];
const ul = document.querySelector('ul');
render(ul, data);
buy(ul)