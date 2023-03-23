import NewRecipe from "@/Components/sideComponents/NewRecipe";
const AddRecipe = () => {
  const getData = (data) => {
    console.log(data);
  };
  return <NewRecipe giveData={getData} />;
};

export default AddRecipe;
