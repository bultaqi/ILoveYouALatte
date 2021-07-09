import React, { useContext, useEffect, useState } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";
import './DrinkOrderDelete.css'
import { Link, useHistory, useParams } from 'react-router-dom';

export const DrinkOrderDelete = () => {
  const { deleteDrinkOrder, getDrinkOrder } = useContext(DrinkOrderContext);
  const [order, setOrder] = useState({});
  const history = useHistory();
  const {orderId} = useParams();

  console.log(orderId)
  useEffect(() => {
    getDrinkOrder(orderId).then(setOrder);
  }, []);

  const handleDelete = () => {
    deleteDrinkOrder(order.id)
      .then(() => {
        history.push("/history")
      })
  }

  return (
    <section id="delete-div">
      <div id="areyousure">
      <p>Are you sure you want to delete this order?</p>
      <button onClick={handleDelete}>Confirm Delete</button>
      <button onClick={() => {
        history.push("/history")
      }}>Cancel</button>
    </div>
    </section>
  );
};

export default DrinkOrderDelete;