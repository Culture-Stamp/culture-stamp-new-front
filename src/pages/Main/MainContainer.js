import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function MainContainer() {

  const [list, setList] = useState([]);
  let [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8080/review?page=${page}`).then((res) => {
      setList(res.data.content);
    })
  }, [page]);


  return (
    <div className='container text-center'>
      <div className='row row-cols-3'>
        {
          list.map((review, i) => {
            return (
              <div className='col' key={i}>
                <img className="w-100 mt-5" src={`${process.env.PUBLIC_URL}/assets/${review.category.categoryName}.jpg`} alt={`image${i}`} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MainContainer;
