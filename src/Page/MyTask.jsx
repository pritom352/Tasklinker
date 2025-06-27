import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useLoaderData } from "react-router";
import MyTaskCard from "../Components/MyTaskCard";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const myUplodes = useLoaderData();
  const myAllData = myUplodes.filter((data) => data.email == user.email);
  const [myData, setMyData] = useState(myAllData);
  return (
    <div className="my-20">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl  italic font-bold  mb-2 text-center">
        <span className="text-blue-500">My Postde</span> Task
      </h1>
      <div className="divider  mb-15 "></div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-10 shadow-2xl">
        <table className="table bg-base-200">
          <thead>
            <tr>
              <th className=" text-center">no</th>
              <th className=" text-center">Task Name</th>
              <th className=" text-center">Category</th>
              <th className=" text-center">Budget</th>
              <th className=" text-center">Button's</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((data, index) => (
              <MyTaskCard
                data={data}
                myData={myData}
                setMyData={setMyData}
                index={index}
                key={data._id}
              ></MyTaskCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;
