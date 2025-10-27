import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [image, setImage] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = fetch("https://picsum.photos/v2/list?page=1&limit=10");
      const data = res.json();
      setImage(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <div>Data is Loading</div>;

  console.log(image);

  return (
    <div className="Image-Container">
      {image.map((item) => (
        <img
          className="present-image"
          src={item.download_url}
          key={item.id}
          alt={item.download_url}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
