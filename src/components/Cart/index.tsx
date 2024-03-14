import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import EmptyCartSvg from '../../assets/illustrations/EmptyCart.svg';
import { useCart } from '../../contexts/CartContext';
import { currencyFormat } from '../../formatters/currency';
import EmptyStateCustom from '../EmptyStateCustom';
import InputNumber from '../InputNumber';
import ProductItemMobile from '../ProductItemMobile';
import RemoveButton from '../RemoveButton';
import * as S from './styles';

const Cart = () => {
  const {
    items,
    increment,
    decrement,
    clearCart,
    getQuantity,
    removeItem,
    getTotal,
    getSubtotalByItem,
  } = useCart()

  const navigate = useNavigate()

  const onClickFinishOrder = () => {
    clearCart()
    navigate('/order-completed')
  }

  const onClickNavigateToHome = () => {
    navigate('/')
  }

  if (items.length) {
    return (
      <S.Container>
        {isMobile && items.map(item => (
          <ProductItemMobile key={item.id} item={item} />
        ))}
        {!isMobile && (
          <S.Table>
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th>
                  <span className='sr-only'>
                    AÇÕES
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <S.ProductCard>
                      <S.Image src={item.detail.image} alt="Product" />
                      <S.Details>
                        <strong>{item.detail.title}</strong>
                        <strong>{currencyFormat('BRL', item.detail.price)}</strong>
                      </S.Details>
                    </S.ProductCard>
                  </td>
                  <td>
                    <InputNumber
                      value={getQuantity(item.id)}
                      decrement={() => decrement(item.id)}
                      increment={() => increment(item.id)}
                    />
                  </td>
                  <td>
                    <S.Price>{currencyFormat('BRL', getSubtotalByItem(item.id))}</S.Price>
                  </td>
                  <td>
                    <RemoveButton onClick={() => removeItem(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        )}

        <S.HR />

        <S.Footer>
          <S.FinishOrder onClick={onClickFinishOrder}>
            FINALIZAR PEDIDO
          </S.FinishOrder>
          <S.TotalBlock>
            <S.Total>
              Total
            </S.Total>
            <S.TotalValue>
              {currencyFormat('BRL', getTotal())}
            </S.TotalValue>
          </S.TotalBlock>
        </S.Footer>
      </S.Container>
    )
  }

  return (
    <EmptyStateCustom
      title='Parece que não há nada por aqui :('
      imageSrc={EmptyCartSvg}
      imageAlt='Mulher segurando bolsa'
      imageHeight='264px'
      imageWidth='auto'
      buttonLabel='Recarregar a página'
      onClick={onClickNavigateToHome}
    />
  )
}

export default Cart;
