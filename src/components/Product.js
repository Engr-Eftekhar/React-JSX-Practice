import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge text-bg-secondary">৳{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"

            onClick={ ()=> {props.increamentQuantity(props.index);}}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
