/* TASK
Use a dog picture API to display dog images in React
Reaquirements:
-Use the dog.ceo to fetch a random dog image and display 
    that image on page load instead of the hardcoded one there now
-When the dog button is clicked, fetch a new dog image and render it on the UI instead
*/

import { useEffect, useState } from "react";

type ResponseType = {
  message: string;
  status: string;
};

const DogPics = () => {
  const [data, setData] = useState<ResponseType>({
    message: "",
    status: "success",
  });

  const fetchDogPic = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const jsonResponse: ResponseType = await response.json();
      setData(jsonResponse);
    } catch (error) {
      console.log("Error fetching data ", error);
    }
  };
  useEffect(() => {
    fetchDogPic();
  }, []);
  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      {data.message && <img src={data.message} alt="A random dog" />}
      <button onClick={fetchDogPic}>🐶</button>
    </div>
  );
};

export default DogPics;
