'use client'


import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../utils/axiosInstance";
import Image from "next/image";

interface Product {
  id: number;
  itemName: string;
  itemImage: string;
  price: number;
}

const SpecialMenu: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axiosInstance.get("/api/product");
  //       // const productData: Product[] = response.data;
  //       // setProducts(productData);
  //     } catch (error) {
  //       setError("Oops! Something went wrong, please refresh.");
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleSeeMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  // const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <div>
      <div className="w-full py-4">
        <div className="text-center">
          <h1 className="sm:text-[50px] text-[29px] text text-center font-medium">Special Menu</h1>
          <p className="sm:text-lg text-center text-sm">
            Discover our specially curated menu, designed to <br className="sm:hidden block"/> delight your taste
            buds <br className="sm:block hidden"/> with unique and seasonal <br className="sm:hidden block"/> dishes
          </p>
        </div>
        {/* <div className="categoryproducts">
          {displayedProducts.map((product) => (
            <div key={product.id}>
              <div className="firstproduct">
                <Image
                  className="productsimg"
                  src={product.itemImage}
                  alt={product.itemName}
                />
                <div className="innerproducts">
                  <small>Ratings</small>
                  <p>{product.itemName}</p>
                  <small>Mcdonalds</small>
                  <div className="productprice">
                    <p className="cartprice">{product.price}</p>
                    <p className="plussign">+</p>
                  </div>
                </div>
              </div>
              {showMore && (
                <div className="secondproduct">
                  <Image
                    className="productsimg"
                    src={product.itemImage}
                    alt={product.itemName}
                    width={500}
                    height={500}
                  />
                  <div className="innerproducts">
                    <small>Ratings</small>
                    <p>{product.itemName}</p>
                    <small>Mcdonalds</small>
                    <div className="productprice">
                      <p className="cartprice">{product.price}</p>
                      <p className="plussign">+</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div> */}
        <p onClick={handleSeeMore} className="seemorecart">
          {showMore ? "Show Less" : "See More"}
        </p>
      </div>
    </div>
  );
};

export default SpecialMenu;
