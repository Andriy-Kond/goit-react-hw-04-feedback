// Коли в хуках треба зробити стейт з кількома станами, а не писати окремі стани (наприклад, для при fetch для зберігання результату і помилки в одному місці) є useReducer (прийшов з Redax):
// const [state, dispatch] = useReducer(reducer, initialState, init);
// reducer - функція
// initialState - початковий стан. Наприклад нуль.
// state - збережений стан (будь що - масив, об'єкт, примітив)
// Приклад:
import { useReducer, useState } from 'react';
function countReducer() {}
const [count, setCount] = useReducer(countReducer, 0, init);
// Звичайний хук useState для порівняння:
// const [count, setCount] = useState(0);
// init - початкове значення, якщо його треба вираховувати з функції. Наприклад, забирати з localStorage.
function init(param) {
  return param + 5;
}
