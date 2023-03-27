import NewRecipe from "@/Components/sideComponents/NewRecipe";
import { useRouter } from "next/router";
const AddRecipe = () => {
  async function getData(formData) {
    // connecting to out handler in api folder
    const response = await fetch("/api/new-recipe", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return <NewRecipe giveData={getData} />;
};

export default AddRecipe;
