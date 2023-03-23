import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiPlus } from 'react-icons/ti';

function MainContainer() {
  let navigate = useNavigate();

  const [list, setList] = useState([]);
  let [page, setPage] = useState(0);

  let [id, setId] = useState('');
  let [email, setEmail] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:8080/review?page=${page}`).then((res) => {
      setList(res.data.content);
    })
  }, [page]);

  useEffect(() => {
    axios.get(`http://localhost:8080/oauth/user/info`, { withCredentials: true }).then((res) => {
      console.log('res : ', res.data);
      setId(res.data.nickname);
      setEmail(res.data.email);
    })
  }, [])


  return (
    <div className='container text-center'>
      로그인 정보 <br />
      이메일 : {email} <br />
      닉넴 : {id}
      <div className='text-end'>
        <TiPlus className='h1 pointer' onClick={() => navigate("/review")} />
      </div>
      <div className='row row-cols-3'>
        {
          list.map((review, i) => {
            return (
              <div className='col' key={i}>
                <Link to={`/review/${review.reviewId}`}>
                  <img className="w-100 mt-5" src={`${process.env.PUBLIC_URL}/assets/${review.category.categoryName}.jpg`} alt={`image${i}`} />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MainContainer;
