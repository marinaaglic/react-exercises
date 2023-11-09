/* TASK
Use a dog picture API to display dog images in React
Reaquirements:
-Use the dog.ceo to fetch a random dog image and display 
    that image on page load instead of the hardcoded one there now
-When the dog button is clicked, fetch a new dog image and render it on the UI instead
*/

const DogPics = () => {
  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      <img src="https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg" />
      <button>🐶</button>
    </div>
  );
};

export default DogPics;
