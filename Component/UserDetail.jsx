import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../hooks/UseContext";
import { IoArrowBackSharp } from "react-icons/io5";
import { Stepper, Step, StepLabel, StepContent, Button } from "@mui/material";
import EmptyDataShow from "./EmptyDataShow";
import SelectStatus from "./SelectStatus";

import {
  statusBackgroundPattern,
  statusColorPattern,
  shipmentdetailHeading,
  stepperIconData,
} from "../Data/ShipmentConfig";

const UserDetail = () => {
  const { orginalData, setlodder, lodder } = useContext(MyContext);
  const [findDataById, setFindDataById] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  if(lodder==true){
     setTimeout(()=>{
       setlodder(false)
     },1000)
  }

  useEffect(() => {
    if (id && orginalData?.length) {
      const updateData = orginalData.find((obj) => obj.id == id);
      setFindDataById(updateData);
    }
  }, [id, orginalData]);

  if (!findDataById) {
    return <EmptyDataShow/>
  }

  const handelFunc = () => {
    router.push("/");
    setlodder(true);
  };


  const getIconByStatus = (status) => {
  const match = stepperIconData.find(step => step.label === status);
  return match ? match.icon : ""
};

  return (
    <>
      <div className="flex justify-center min-w-[300px] md:h-[100vh] items-center">
        <div className=" w-full md:w-[800px]  border-2 bg-primaryDark border-primaryOutline">
          <div className="flex gap-2.5 items-center border-b-2 px-[20px] py-[15px]">
            <Button
              onClick={handelFunc}
              sx={{ border: "2px solid #282939", borderRadius: "10px" }}
            >
              <IoArrowBackSharp className="text-xl text-white/50" />
            </Button>
            <p className="text-xl text-white/50">Back To Shipment List</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  w-full justify-between px-[20px] py-[15px]">
            <div className=" border-2 border-primaryOutline p-[15px] bg-primaryOverDark">
              <h2 className="text-2xl text mb-[15px]">Shipment Detail</h2>
              <SelectStatus condition={"updateStatus"} palceholder={"Update Shipment Status"} detailDataId={findDataById.id}/>
              <div className="mt-[20px] px-[10px]">
                {shipmentdetailHeading.map((items, index) => {
                  return (
                    <div key={index} className="flex justify-between py-[15px]">
                      <h2 className="text-[17px] text-white/50">
                        {items.label}
                      </h2>
                      {items.isCombined ? (
                        <p className="text-xl">{`${findDataById.origin} → ${findDataById.destination}`}</p>
                      ) : items.isStatus ? (
                        <Button
                          sx={{
                            fontSize: {
                              xs: "12px",
                              sm: "16px",
                            },
                            color: statusColorPattern[findDataById.status],
                            backgroundColor:
                              statusBackgroundPattern[findDataById.status],
                          }}
                        >
                          {findDataById.status}
                        </Button>
                      ) : (
                        <p className="text-xl">{findDataById[items.key]}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" border-2 border-primaryOutline bg-primaryOverDark flex flex-col px-[20px] py-[15px]">
              <div>
                <h2 className="text-xl mb-1.5">📍 Shipment Tracking History</h2>
                <div style={{ maxWidth: 400 }}>
                  <Stepper
                    orientation="vertical"
                    activeStep={stepperIconData.length}
                    nonLinear
                  >
                    {findDataById.trackHistory.map((item, index) => (
                      <Step key={index} active>
                        <StepLabel StepIconComponent={() => <span>{getIconByStatus(item.status)}</span>}>
                          <div className="text-white flex justify-between">
                            <h2>{item.status}</h2>
                            <p>{item.date}</p>
                          </div>
                        </StepLabel>
                        <StepContent TransitionProps={{ unmountOnExit: false }}>
                          <p className="text-white/50 text-[14px]">
                            {item.info}
                          </p>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetail;
