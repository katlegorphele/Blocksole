import Head from 'next/head';
import ProductCard from '../components/ProductCard';
// import { useSneakerStore } from '../store/sneakerStore';
import {fetchSneakers} from '../store/firestoreService';
import { useState, useEffect } from 'react';

type Sneaker = { //Name must match the name in the firestore
  id: string;
  brand: string;
  model: string;
  colorway: string;
  price: number;
  imageUrl: string[];
};

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);

  useEffect(() => {
    const fetchSneakersData = async () => {
      const sneakersList = await fetchSneakers();
      setSneakers(sneakersList);
    };

    fetchSneakersData();
  }, []);

  return (
    <div>
      <Head>
        <title>Blocksole</title>
        <meta name="description" content="Blocksole Decentralized Sneaker Marketplace" />
      </Head>


      <div className="flex flex-wrap">
        {sneakers.length > 0 ? (
          sneakers.map((sneaker, index) => (
            <ProductCard key={index} index={index} sneaker={sneaker} />
          ))
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl font-semibold text-gray-500">No sneakers to show yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;




