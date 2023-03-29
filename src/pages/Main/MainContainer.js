import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiPlus } from 'react-icons/ti';

function MainContainer() {
  let navigate = useNavigate();

  const [list, setList] = useState([]);
  let [page, setPage] = useState(0);


  //리스트조회
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8080/review?page=${page}`);
      const data = await response.json();
      setList(data);
    }
    fetchData();
  }, []);


  useEffect(() => {
    // 사용자 정보
    axios.get(`http://localhost:8080/oauth/user/info`, { withCredentials: true }).then((res) => {
      // console.log('res : ', res.data);
    })
  }, [])


  return (
    <div className='container text-center'>
      <div className='text-end'>
        <TiPlus className='h1 pointer' onClick={() => navigate("/review")} />
      </div>

      {
        list.length > 0 ?
          list.map((review, i) => {
            return (
              <div className='row row-cols-3'>
                <div className='col' key={i}>
                  <Link to={`/review/${review.reviewId}`}>
                    <img className="w-100 mt-5" src={`${process.env.PUBLIC_URL}/assets/${review.category.categoryName}.jpg`} alt={`image${i}`} />
                  </Link>
                </div>
              </div>
            )
          })
          :
          <div className='text-center mt-5'>
            <h3>Not exist review data</h3>
          </div>
      }

    </div>
  );
}

export default MainContainer;
