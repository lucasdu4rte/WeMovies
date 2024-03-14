import { MdAddShoppingCart } from 'react-icons/md';
import { Movie } from '../../@types/Movie';
import { useCart } from '../../contexts/CartContext';
import { currencyFormat } from '../../formatters/currency';
import * as S from './styles';

export type MovieCardProps = {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { addItem, getQuantity } = useCart()
  const onClick = () => addItem({
    id: movie.id,
    detail: movie,
    quantity: 1,
  })
  const count = getQuantity(movie.id)
  const price = currencyFormat(
    'BRL',
    movie.price
  )

  return (
    <S.Container>
      <S.Details>
        <S.Image src={movie.image} />
        <S.Title>{movie.title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Details>
      <S.Button
        bg={count > 0 ? 'green' : 'blue'}
        onClick={onClick}
      >
        <div className='cart-count'><MdAddShoppingCart />{count}</div>
        ADICIONAR AO CARRINHO
      </S.Button>
    </S.Container>
  )
}

export default MovieCard;
