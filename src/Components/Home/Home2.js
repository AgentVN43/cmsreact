import React, { useEffect, useState } from 'react'

export default function Home2() {
    const [pages, setPages] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://e-visaforvietnam.com/wp-json/wp/v2/posts');
            const data = await response.json();
            console.log(data);
            setPages(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const fetchImageDetails = async (mediaId) => {
        try {
          const response = await fetch(`https://e-visaforvietnam.com/wp-json/wp/v2/media/${mediaId}`);
          const imageData = await response.json();
          return imageData.media_details; // Adjust accordingly based on the structure of media_details
        } catch (error) {
          console.error('Error fetching image data:', error);
          return null;
        }
      };

      useEffect(() => {
        const fetchDataAndImages = async () => {
          const pagesWithImages = await Promise.all(
            pages.map(async (page) => {
              if (page.featured_media) {
                const imageDetails = await fetchImageDetails(page.featured_media);
                return { ...page, imageDetails };
              } else {
                return page;
              }
            })
          );
    
          setPages(pagesWithImages);
        };
    
        if (pages.length > 0) {
          fetchDataAndImages();
        }
      }, [pages]);
      
  return (
    // <div className="container">
    //   <h1>Responsive Date</h1>
    //   {Array.isArray(pages) && pages.length > 0 ? (
    //     pages.map((page) => (
       
          
    //       <div key={page.id} className="page">
    //         <h2>{page.title.rendered}</h2>
    //         <div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
    //         <a href={page.link} target="_blank" rel="noopener noreferrer">Read more...</a>
    //       </div>
    //     ))
    //   ) : (
    //     <p>No pages found.</p>
    //   )}
    // </div>
    <div className="container">
      <h1>Responsive Date</h1>
      {Array.isArray(pages) && pages.length > 0 ? (
        pages.map((page) => (
          <div key={page.id} className="page">
            <h2>{page.title.rendered}</h2>
            {page.imageDetails && (
              <img src={page.imageDetails.sizes.thumbnail.source_url} alt={page.title.rendered} />
            )}
            <div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
            <a href={page.link} target="_blank" rel="noopener noreferrer">
              Read more...
            </a>
          </div>
        ))
      ) : (
        <p>No pages found.</p>
      )}
    </div>
    
  )
}
