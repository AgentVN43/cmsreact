import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthService from './AuthService';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = AuthService.getUser();
        const token = localStorage.getItem('user')
        console.log(token);

        if (token) {
          const response = await axios.get('https://e-visaforvietnam.com/wp-json/wp/v2/posts', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
          setData(response.data);
        } else {
          // Redirect to login or handle unauthenticated state
          console.error('User not authenticated.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>WordPress Data</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
}
