import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Login from "./Login";
import "./Latte.css";
// import { Link } from "react-router-dom";

const Latte = ({ order }) => {
  
  const customerId = JSON.parse(sessionStorage.getItem("customer")).id;
  const history = useHistory();
  
  
  return ( 
    
        <section className="order-history-div">
          {order.custId === customerId ? (
            <div id="latte-order">
              {order.drinkSize ? <p>{order.drinkSize}</p> : <></>}
              {order.hotOrIced ? <p>{order.hotOrIced}</p> : <></>}
              {order.milkChoice ? <p>{order.milkChoice}</p> : <></>}
              {order.milkFoam ? <p>{order.milkFoam}</p> : <></>}
              {order.drinkSyrup ? <p>{order.drinkSyrup}</p> : <></>}
              {order.drinkSweetener ? <p>{order.drinkSweetener}</p> : <></>}
              {order.espressoShots ? <p>{order.espressoShots}</p> : <></>}
              {order.toppings ? <p>{order.toppings}</p> : <></>}
              <button onClick={() => {
                history.push(`/delete/${order.id}`)
              }}>Delete Order</button>
              <button onClick={() => {
                history.push(`/edit/${order.id}`)
              }}>Edit Order</button>
            </div>
          ) : (
           <Login />
          )}  
        </section>

  );
};

export default Latte;
