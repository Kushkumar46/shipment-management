import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { MyContext } from "../hooks/UseContext";
import {
  StatusFilterLogic,
  UpdateShipmentStatus,
} from "../utils/SearchFilterLogic";
import toast, { Toaster } from "react-hot-toast";

const SelectStatus = ({ palceholder, condition, detailDataId }) => {
  
  const { setData, orginalData, setorginalData, setlodder }=useContext(MyContext);
  const [Status, setStatus] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setStatus(event.target.value);

    if (condition == "updateStatus") {
      UpdateShipmentStatus(value, setorginalData, detailDataId, setData);
      toast.success(`Status Update ${value}`);
    } else {
      setlodder(true);
      setTimeout(() => {
        const updateStatusByFilter = StatusFilterLogic(value, orginalData);
        setData(updateStatusByFilter);
        setlodder(false);
      }, 1000);
    }
  };

  return (
    <div className=" rounded-[10px] border-2 border-primaryOutline h-[60px]">
      <Toaster position="top-right" />
      <FormControl fullWidth variant="outlined">
        <Select
          value={Status}
          onChange={handleChange}
          displayEmpty
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-select": {
              paddingLeft: "12px",
              paddingTop: "14px",
              paddingBottom: "14px",
              fontSize: "16px",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
        >
          <MenuItem value="" disabled>
            <em className="text-white/40">{palceholder}</em>
          </MenuItem>
          <MenuItem value={"In Transit"}>In Transit</MenuItem>
          <MenuItem value={"Delivered"}>Delivered</MenuItem>
          <MenuItem value={"Delayed"}>Delayed</MenuItem>
          {condition != "updateStatus" && (
            <MenuItem value={"All"}>All</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectStatus;
