import { Product } from '../../@types/Product';
import { useCart } from '../../contexts/CartContext';
import { currencyFormat } from '../../formatters/currency';
import InputNumber from '../InputNumber';
import RemoveButton from '../RemoveButton';
import * as S from './styles';

type ProductItemMobileProps = {
  item: Product
}
const ProductItemMobile = ({ item }: ProductItemMobileProps) => {
  const {
    increment,
    decrement,
    getQuantity,
    removeItem,
    getSubtotalByItem,
  } = useCart()

  return (
    <S.Container>
      <div>
        <S.Image
          src={item.detail.image}
          alt={item.detail.title}
        />
      </div>
      <S.Details>
        <S.GridSuperior>
          <S.Title>{item.detail.title}</S.Title>
          <S.InfoBox>
            <S.Price>{currencyFormat('BRL', item.detail.price)}</S.Price>
            <RemoveButton onClick={() => removeItem(item.id)} />
          </S.InfoBox>
        </S.GridSuperior>
        <S.GridInferior>
          <InputNumber
            value={getQuantity(item.id)}
            decrement={() => decrement(item.id)}
            increment={() => increment(item.id)}
          />
          <div>
            <S.SubTotal>SUBTOTAL</S.SubTotal>
            <S.Price>{currencyFormat('BRL', getSubtotalByItem(item.id))}</S.Price>
          </div>
        </S.GridInferior>
      </S.Details>
    </S.Container>
  )
}

export default ProductItemMobile;
