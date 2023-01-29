import { useParams } from 'react-router-dom';
import MainContainer from '../Main/MainContainer';

function CategoryContainer(){
    const title = useParams();
    return <MainContainer title={title.category} />;
}

export default CategoryContainer;