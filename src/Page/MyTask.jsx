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
    <div>
      <h1 className=" text-5xl italic font-bold mt-10 mb-2 text-center">
        ALL <span className=" text-blue-500">Task</span>
      </h1>
      <div className="divider mb-20"></div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-10 shadow-2xl">
        <table className="table">
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
