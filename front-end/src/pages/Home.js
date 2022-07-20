import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Card from "../components/Home/Card";
import '../styles/Home.css'
import '../styles/Banner.css'
import Image from '../assets/img/IMGHOME.png'
import UseCallData from '../UseCallData';
import Loader from '../components/Loader';

function Home() {
  const data = UseCallData();
  const text = "Chez vous, partout et ailleurs";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

  return (
    <main>
      <Banner image={Image} text={text} />
      {isLoading ? (
        <Loader />
      ) : (
        <Card data={data} />
      )}
    </main>
  );
}

export default Home;
