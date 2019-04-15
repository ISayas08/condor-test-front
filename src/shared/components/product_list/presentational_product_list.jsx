import React from "react";
import { Product } from "../product/product";

import "./product_list.scss";

export class PresentationalProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: "3W3qSS6rCck1PJDrPXBv",
          available: "60",
          category: "Lorem",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
          name: "Apples",
          price: "120000"
        },
        {
          id: "3W3qSS6rCck5PJDgPXBv",
          available: "60",
          category: "Lorem",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
          name: "Apples",
          price: "120000"
        },
        {
          id: "3W3qSS6rCckyPJDgPXBv",
          available: "60",
          category: "Lorem",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
          name: "Apples",
          price: "120000"
        },
        {
          id: "3W3qSS6rCuk1PJDgPXBv",
          available: "60",
          category: "Lorem",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
          name: "Apples",
          price: "120000"
        },
        {
          id: "3W3qSS6rCmk1PJDgPXBv",
          available: "60",
          category: "Lorem",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
          name: "Apples",
          price: "120000"
        },
        {
          id: "dpXCtPFbDqAVnqAqT1a1",
          available: "60",
          category: "Fruits",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/pears.jpg?alt=media&token=0fd98ea3-2933-4b5a-9386-2ddb0ff20679",
          name: "Pears 1k",
          price: "1200"
        },
        {
          id: "3W3qSS6rCvk1PJDgPXBv",
          available: "60",
          category: "Lorem",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
          name: "Apples",
          price: "120000"
        },
        {
          id: "dpXCtPFbDmAVnqAqT1a1",
          available: "60",
          category: "Fruits",
          description: "Lorem ipsun dolor sit ament",
          imgURL:
            "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/pears.jpg?alt=media&token=0fd98ea3-2933-4b5a-9386-2ddb0ff20679",
          name: "Pears 1k",
          price: "1200"
        }
      ]
    };

    // this.props
    //   .getProducts()
    //   .then(() => {
    //     this.setState({
    //       products: Object.keys(this.props.products).map(key =>
    //         Object.assign({}, this.props.products[key], { id: key })
    //       )
    //     });
    //   })
    //   .catch(err => {});
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products
          .filter(p => p.category.includes(this.props.filterOptions.category))
          .filter(p =>
            p.name
              .toLowerCase()
              .includes(this.props.filterOptions.toSearch.toLowerCase())
          )
          .map(p => (
            <Product
              key={p.id}
              {...Object.assign(p, {
                onAdd: this.props.addProductToCart
              })}
            />
          ))}
      </div>
    );
  }
}
