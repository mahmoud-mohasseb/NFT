import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonStock from "../utils/ButtonStock";
import { products } from "../utils/fakedata";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import YouTube from "./skletor";

function Products() {
  const [seletedItem, setSeletedItem] = useState("latest");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);

  const filteredData = products.filter((i) => i.category === seletedItem);

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 8);
    }, 1000);
  };

  return (
    <>
      <h4>
        Explorer The<span className="highlighted"> Best NFT</span> Assets
      </h4>
      {/* filter section */}

      <Filter setSeletedItem={setSeletedItem} seletedItem={seletedItem} />

      <Grid container>
        {seletedItem !== "latest"
          ? filteredData.slice(0, totlaProduct).map((item) => (
              <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
                <SingleProduct item={item} />
              </Grid>
            ))
          : products.slice(0, totlaProduct).map((item) => (
              <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
                <SingleProduct item={item} />
              </Grid>
            ))}
      </Grid>

      {loaderSpin && (
        <div onClick={() => loadmorehandler()} className="loadmore">
          <YouTube />
        </div>
      )}
      {
        <div onClick={() => loadmorehandler()} className="loadmore">
          <ButtonStock title="Load More" />
        </div>
      }
    </>
  );
}

export default Products;
