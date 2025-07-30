import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []); // empty array means run only once when component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
