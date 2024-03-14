import LoaderIcon from '../../assets/icons/Loader';
import * as S from './styles';

const Loader = () => {
  return (
    <S.Container>
      <LoaderIcon />
      <span className='sr-only'>Carregando...</span>
    </S.Container>
  )
};

export default Loader;
