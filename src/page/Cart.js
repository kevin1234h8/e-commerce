import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";
import Brand from "../ui/Brand";
import Tags from "../ui/Tags";
import Heading from "../ui/Heading";
import Filter from "../ui/Filter";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { removeItem, getTotal, increment, decrement } from "../features/Cart";
import StripeCheckout from "react-stripe-checkout";
import Image from "../assets/sitting.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
const Cart = ({ user }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState(5);
  const [order, setOrder] = useState("");
  const { items, total } = useSelector((state) => state.cart);
  console.log(shipping);
  const [stripeToken, setStripeToken] = useState("");
  const KEY =
    "pk_test_51M43cHGFyTYGVkKRLvSGfOAz9C2z1ojPvNr8e0sogQgICRPZKZnrbl0QNJAuz9C52jeGu6tt7MFJjfbaEV9WeBBM00YSexUMUT";

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    dispatch(getTotal());
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const sendData = async () => {
      const res = await axios.post(
        "http://localhost:5000/payment",
        {
          tokenId: stripeToken.id,
          amount: total * 100,
        },
        { withCredentials: true }
      );
      setOrder(res.data);
      items = [];
    };
    sendData();
  }, [stripeToken, total]);

  return (
    <div>
      <Navbar user={user} />
      <Brand user={user} />
      <Tags />
      <Heading />
      <Filter />
      <div className="p-8 flex">
        <div className="product">
          <table className="table-auto w-full ">
            <thead className="text-left">
              <tr>
                <th className="font-bold">Product</th>
                <th className="font-bold">Price</th>
                <th className="font-bold">Qtc</th>
                <th className="font-bold">Total</th>
              </tr>
            </thead>
            {items?.length === 0 ? (
              <div className="flex text-2xl ">No product in cart right now</div>
            ) : (
              <tbody>
                {items?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Link to={`/product/${item.id}`}>
                          <img
                            className="w-40 rounded-lg h-40 object-contain"
                            src={item?.thumbnail}
                            alt=""
                          />
                        </Link>
                      </td>
                      <td>
                        $
                        {Math.floor(
                          item?.price -
                            (item?.price * item?.discountPercentage) / 100
                        )}
                      </td>
                      <td>
                        <div className="flex items-center justify-around">
                          <div>
                            <ArrowDropDownIcon
                              onClick={() => {
                                if (item.quantity === 1) {
                                  dispatch(removeItem({ id: item.id }));
                                }
                                dispatch(decrement({ id: item.id }));
                              }}
                              fontSize="large"
                              className="text-[#6A983C]"
                            />
                          </div>

                          <div>{item?.quantity}</div>
                          <div>
                            <ArrowDropUpIcon
                              onClick={() =>
                                dispatch(increment({ id: item.id }))
                              }
                              fontSize="large"
                              className="text-[#6A983C]"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        $
                        {Math.floor(
                          item?.price -
                            (item?.price * item?.discountPercentage) / 100
                        )}
                      </td>
                      <td>
                        <DeleteIcon
                          onClick={() => dispatch(removeItem({ id: item.id }))}
                          className="text-[#6A983C] cursor-pointer"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
        <div className="categories bg-slate-100 p-8 rounded-lg">
          <div className=" text-2xl font-bold mb-4">Order Summary</div>
          <div className="flex items-center justify-between">
            <div className="my-4 font-bold">ITEMS {items?.length}</div>
            <div>${Math.floor(total + shipping)}</div>
          </div>
          <div>
            <div className="font-bold my-4">SHIPPING</div>
            <select
              name=""
              id=""
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
              className="outline-none px-4 py-2 rounded-[12px] appearance-none my-4 cursor-pointer w-full"
            >
              <option value={5}>Standart delivery $5</option>
              <option value={10}>Medium delivery $10</option>
              <option value={15}>Fast delivery $15</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold my-4">PROMO CODE</div>
            <input
              type="text"
              placeholder="Enter your code..."
              className="outline-none px-4 py-2 w-full rounded-[12px] appearance-none my-4 cursor-pointer"
            />
            <button className="my-4 border-2 px-4 py-2 rounded-[12px] bg-[#fa7474] text-white">
              Apply
            </button>
          </div>

          <div className="flex items-center justify-between my-4">
            <div className="font-bold">TOTAL COST</div>
            <div className="font-bold">${Math.floor(total + shipping)}</div>
          </div>
          <div>
            <StripeCheckout
              token={onToken}
              stripeKey={KEY}
              name="KEVIN SHOP"
              image={Image}
              description={`Your total is $${total}`}
              amount={total * 100 + shipping}
              billingAddress
              shippingAddress
            >
              <button className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150">
                CHECKOUT
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
