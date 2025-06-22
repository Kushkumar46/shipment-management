const EmptyDataShow=()=>{
     return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-2xl font-medium">{`${"\u274C"}`} No Data Found</p>
        <p className="text-xl text-gray-700 mt-2">
           Please Go Back To Shipment List
        </p>
      </div>
    );
}
export default EmptyDataShow