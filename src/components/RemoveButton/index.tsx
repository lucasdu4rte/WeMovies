import { MdDelete } from 'react-icons/md';
import * as S from './styles';

type RemoveButtonProps = {
  onClick: () => void;
}

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <S.Button type="button" onClick={onClick}>
      <MdDelete />
    </S.Button>
  )
}

export default RemoveButton;
