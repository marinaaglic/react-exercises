import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h2>Dog pics</h2>
      <p>Use a dog picture API to display dog images in React</p>
      <ul>Requirements:</ul>
      <li>
        Use the dog.ceo to fetch a random dog image and display that image on
        page load instead of the hardcoded one there now
      </li>
      <li>
        When the dog button is clicked, fetch a new dog image and render it on
        the UI instead
      </li>
      {data.message && <img src={data.message} alt="A random dog" />}
      <button onClick={fetchDogPic}>🐶</button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default DogPics;
