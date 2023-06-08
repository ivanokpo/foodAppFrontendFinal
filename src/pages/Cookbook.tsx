import React from "react";
import AddRecipe from "../components/AddRecipe";

//class for cookbook page
const Cookbook = ({ backendUrl }: { backendUrl: any }) => {
  return <AddRecipe backendUrl={backendUrl} />;
};

export default Cookbook;
