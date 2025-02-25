import React from "react";
import Header from "../../components/Header/Header";
import ExplorerMenu from "../../components/ExploreMenu/ExplorerMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExplorerMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
