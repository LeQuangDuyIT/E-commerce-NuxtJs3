const cart = ref([]);
const cartTotal = ref({ quantity: 0, amount: 0 });

const handleAdd = product => {
  const existingItem = cart.value.find(item => item.id === product.id);
  if (!existingItem) {
    const newItem = {
      ...product,
      quantity: 1
    };
    cart.value.push(newItem);
  } else {
    existingItem.quantity += 1;
  }
  handleGetTotal();
};

const handleChangeQuantity = (id, unit) => {
  const existingItem = cart.value.find(item => item.id === id);
  if (unit === -1 && existingItem.quantity === 1) return;
  existingItem.quantity += unit;
  handleGetTotal();
};

const handleDeleteItem = id => {
  const updatedCart = cart.value.filter(item => item.id !== id);
  cart.value = updatedCart;
  handleGetTotal();
};

const handleGetTotal = () => {
  cartTotal.value = cart.value.reduce(
    (result, item) => ({
      quantity: result.quantity + item.quantity,
      amount: result.amount + item.price * item.quantity
    }),
    { quantity: 0, amount: 0 }
  );
};

export const useCart = () => {
  return { cart, handleAdd, cartTotal, handleChangeQuantity, handleDeleteItem };
};
