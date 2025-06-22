import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../hooks/UseContext";
import { useRouter } from "next/router";
import {
  statusBackgroundPattern,
  statusColorPattern,
} from "../Data/ShipmentConfig";

const UserList = () => {

  const { Data, setlodder, setUserDetailData } = useContext(MyContext);
  const router = useRouter();

  const handelFuncUserDetail = (obj) => {
    router.push(`/User/${obj.id}`);
    setUserDetailData(obj);
    setlodder(true);
  };

  return (
    <>
    <div className="mt-[20px] bg-primaryDark px-[10px] md:px-[20px] py-[15px] flex flex-col gap-2.5">
      <p className="text-[20px]">Shipment Record</p>
      <TableContainer sx={{ width: "100%" }}>
        <Table>
          <TableHead sx={{ border: "2px solid #282939", height: "0px" }}>
            <TableRow sx={{ backgroundColor: "#282939" }}>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  color: "#999999",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  color: "#999999",
                }}
              >
                Sender & Recevier
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  color: "#999999",
                }}
              >
                Origin & Destination
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  color: "#999999",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  color: "#999999",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{ border: "2px solid #282939", backgroundColor: "#06071A" }}
          >
            {Data.map((obj, index) => {
              const {
                id,
                sender,
                receiver,
                origin,
                destination,
                date,
                status,
              } = obj;
              return (
                <>
                  <TableRow
                    key={index}
                    sx={{ "&:hover": { backgroundColor: "#282939" } }}
                    onClick={() => {
                      handelFuncUserDetail(obj);
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        color: "#999999",
                      }}
                    >
                      {id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        color: "#999999",
                      }}
                    >
                      <span className="text-white/70">from: </span>
                      {sender} <br />{" "}
                      <span className="text-white/70">to: </span>
                      {receiver}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        color: "#999999",
                      }}
                    >
                      {origin} <br />
                      {"\u2192"} {destination}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        color: "#999999",
                      }}
                    >
                      {date}
                    </TableCell>
                    <TableCell>
                      <Button
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "16px",
                          },
                          color: statusColorPattern[status],
                          backgroundColor: statusBackgroundPattern[status],
                        }}
                      >
                        {status}
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    {Data.length==0 && (
        <div className="text-2xl text-white/50 mt-[20px] text-center">{`${"\u274C"}`} No Data Found</div>
      )}
    </>
  );
};

export default UserList;
