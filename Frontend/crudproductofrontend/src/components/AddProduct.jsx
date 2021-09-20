import React, { useState, Fragment } from "react";
import "./Styles.css";

import { useForm } from "react-hook-form";

const HOST_API = "http://localhost:8080/api";

const AddProduct = (props) => {
  const [product, setProduct] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setProduct({...product, data});
    console.log(data);
    e.target.reset();

    const request = {
      id: null,
      name: product.name,
      code: product.code,
      price: product.price,
      stock: product.stock,
    };

    fetch(HOST_API + "/todos", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      
    })
  };




  return (
    <Fragment>
      <h1> PRODUCTOS </h1>
      <h2>Añadir productos</h2>
      <p> Llene la siguiente información para agregar un producto: </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: { value: true, message: "Nombre requerido" },
          })}
        />
        <div>{errors?.name?.message}</div>
        <label>Código</label>
        <input
          type="text"
          name="code"
          {...register("code", {
            required: { value: true, message: "Valor requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>
        <label>Precio</label>
        <input
          type="text"
          name="price"
          {...register("price", {
            required: { value: true, message: "Valor requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>
        <label>Cantidad</label>
        <input
          type="number"
          name="amount"
          {...register("amount", {
            required: { value: true, message: "Valor requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>

        <button type="submit">Agregar Producto</button>
      </form>
    </Fragment>
  );
};

export default AddProduct;
