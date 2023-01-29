import styled from 'styled-components';

// 임시 이미지 import
import Img1 from '../../assets/images/1.jpg';
import Img2 from '../../assets/images/2.jpg';
import Img3 from '../../assets/images/3.jpg';
import Img4 from '../../assets/images/4.jpg';
import Img5 from '../../assets/images/5.jpg';
import Img6 from '../../assets/images/6.jpg';
import Img7 from '../../assets/images/7.jpg';
import Img8 from '../../assets/images/8.jpg';
import Img9 from '../../assets/images/9.jpg';
import Header from '../../components/Header/Header';

function MainContainer({title}) {
  return (
    <MainBackground>
      <Header title={title} />
      <MainSection>
        <Container>
          <Thumbnail>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img1} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img2} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img3} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img4} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img5} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img6} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img7} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img8} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
            <ThumbnailItem>
              <img className="thumbnailImg" src={Img9} alt="image1" />
              <div className="thumbnailText">Movie</div>
            </ThumbnailItem>
          </Thumbnail>
        </Container>
      </MainSection>
    </MainBackground>
  );
}

// 전체 CSS 적용
const MainBackground = styled.div`
  width: 100vw;
  height: 100%;
  margin-left: calc(-50vw + 50%);
  text-align: center;
  background: #e5e7eb;
`;

// 메인 부분
const MainSection = styled.section`
  position: relative;
  top: 310px;
  //top: 50px;
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Container = styled.div`
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Thumbnail = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    width: auto;
    margin: 0;
  }
`;

const ThumbnailItem = styled.div`
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  font-size: 32px;

  cursor: pointer;

  .thumbnailImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnailText {
    position: absolute;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    opacity: 0.7;
  }

  &:hover .thumbnailText {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: visible;
  }
`;

export default MainContainer;
