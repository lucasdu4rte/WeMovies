import { MouseEvent } from 'react';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import * as S from './styles';

type InputNumberProps = {
  value: number;
  decrement: (event: MouseEvent<HTMLButtonElement>) => void;
  increment: (event: MouseEvent<HTMLButtonElement>) => void;
}

const InputNumber = ({ decrement, increment, value }: InputNumberProps) => {
  return (
    <S.Container>
      <S.SideButton onClick={decrement}>
        <MdRemoveCircleOutline />
        <span className="sr-only">decrementar</span>
      </S.SideButton>
      <S.Input
        type="number"
        placeholder='Quantidade'
        value={value}
        readOnly
      />
      <S.SideButton onClick={increment}>
        <MdAddCircleOutline />
        <span className="sr-only">incrementar</span>
      </S.SideButton>
    </S.Container>
  )
}

export default InputNumber
