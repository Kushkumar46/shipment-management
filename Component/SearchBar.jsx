import { TextField, InputAdornment } from "@mui/material";
import { RiSearch2Line } from "react-icons/ri";
import { useContext } from "react";
import { MyContext } from "../hooks/UseContext";
import { SearchLogic } from "../utils/SearchFilterLogic";
const SearchBar = () => {
  const { setData, orginalData, setlodder } = useContext(MyContext);

  const handelSearchFunc = (e) => {
    setlodder(true);
    const inputValue = e.target.value;
    setTimeout(() => {
      const updateSearchData = SearchLogic(inputValue, orginalData);
      setData(updateSearchData);
      setlodder(false);
    }, 1000);
  };

  return (
    <div className=" w-[70%] sm:w-[50%]">
      <TextField
        onChange={handelSearchFunc}
        placeholder="Search..."
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RiSearch2Line className="text-2xl text-white" />
            </InputAdornment>
          ),
          sx: {
            paddingLeft: "20px",
            color: "white",
            "& input": {
              color: "white",
              "&::placeholder": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          fontSize: "20px",
          border: "2px solid #282939",
          borderRadius: "10px",
          "& fieldset": {
            border: "none",
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
