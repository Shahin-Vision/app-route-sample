"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductCard(props: any) {
  const prod = props.product;
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState({});

  const selectProd = () => {
    console.log("selecting Prod: ", prod);
    setSelectedProduct(prod);
  };

  // const navigationWithFilter = () => {
  //   let searchParams = '';
  //   if(price != null){
  //       searchParams = searchParams + 'price-from' + 10;
  //     } if(rating){
  //       searchParams = searchParams + '&rating=' + 4;
  //     }
  //     router.push('/products?'+ searchParams)
  // }

  return (
    <div className="border">
      <Link href={"/products/" + prod.id} >
        <div className="card" style={{ width: "14rem", height: "14em"}}>
          <img src={prod.image} className="card-img-top h-50 w-75 object-fit-contain m-2" alt={prod.title} />
          <div className="card-body">
            <p className="card-text" style={{fontSize:"0.8em"}}>{prod.title}</p>
          </div>
        </div>
      </Link>
      <button 
        className="btn btn-primary w-100 mb-2"
        onClick={() => {
          router.push(`/products/${prod.id}`, {
            scroll: false,
          });
        }}
      >
        Details
      </button> <br/>
      <button
        className="btn btn-success w-100"
        style={{fontSize:"0.8rem"}}
        onClick={() => {
          router.push("/products?title=" + prod.title, {
            scroll: true,
          });
        }}
      >
        Same page navigation sample
      </button>
    </div>
  );
}



// "use client"

// import Link from "next/link";
// import { useState } from "react";

// export default function ProductCard(props:any){
//     const prod = props.product;

//     const [selectedProducts, setSelectedProduct] = useState({});

//     const selectProd = () => {
//         setSelectedProduct(prod);
//     }

//     return (
// <Link href={'/products/' + prod.id} >
//     <div className="card" onClick={selectProd}>
//         <img
//             className="card-img-top"
//             src={prod.image}
//             alt={prod.title}
//         />
//         <div className="card-body">
//             <h4 className="card-title">{prod.title}</h4>
//             <p className="card-text">Text</p>
//         </div>
//     </div>

// </Link>
//     )
// }