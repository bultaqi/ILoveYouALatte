import React, { useContext, useEffect, useState } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";

import { useHistory, useParams } from 'react-router-dom';

import './DrinkOrderDelete.css';

export const DrinkOrderDelete = () => {
  const { deleteDrinkOrder, getDrinkOrder } = useContext(DrinkOrderContext);
  const [order, setOrder] = useState({});
  const history = useHistory();
  const {orderId} = useParams();

  useEffect(() => {
    getDrinkOrder(orderId).then(setOrder);
  }, [getDrinkOrder, orderId]);

  const handleDelete = () => {
    deleteDrinkOrder(order.id)
      .then(() => {
        history.push("/history")
      })
  }

  return (
    <div id="drink-order-delete">
      <p>Are you sure you want to delete this order?</p>
      <button onClick={handleDelete}>Confirm Delete</button>
      <button onClick={() => {
        history.push("/history")
      }}>Cancel</button>
    </div>
  );
};

export default DrinkOrderDelete;