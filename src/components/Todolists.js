import React, { useState } from "react";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData((listData) => {
      const updatedlistData = [...listData, activity];
      setActivity("");
      return updatedlistData;
    });
  }

  function removeactivity(index) {
    setlistData((prevListData) => {
      const updatedListData = prevListData.filter((_, i) => i !== index);
      return updatedListData;
    });
  }

  return (
    <>
      <div className="md:container md:mx-auto">
        <div>
          <h1 className="text-blue-300 border-lime-500 font-bold text-center text-4xl underline decoration-double ...">
            Todo list App
          </h1>
        </div>
        <div>
          <input
            type="text"
            className="placeholder:italic placeholder:text-slate-400 w-3/4 my-10 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Add your today tasks"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={addActivity}
          >
            Add to list
          </button>
        </div>
        <p className="text-4xl-center font-bold">Your List is here :</p>
        {listData != null &&
          listData.map((data, i) => {
            return (
              <p key={i} className="bg-gray-100 p-2 rounded-md mb-2 shadow-sm">
                {data}
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  onClick={() => removeactivity(i)}
                >
                  Remove
                </button>
              </p>
            );
          })}
      </div>
    </>
  );
}

export default Todolist;
