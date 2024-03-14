import { MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Container } from "../Container";
import * as S from "./styles";

const CartBlock = () => {
  const { getItemsCount } = useCart()
  const itemsCount = getItemsCount();

  return (
    <S.Cart>
      <div className="block-details">
        <div className="description">
          Meu Carrinho
        </div>
        <div className="item-count" data-testid="cart-count">
          {itemsCount} itens
        </div>
      </div>
      <div>
        <MdOutlineShoppingBasket />
      </div>
    </S.Cart>
  )
}

const Header = () => {
  return (
    <S.Container>
      <Container>
        <S.Flex>
          <Link to="/">
            <S.Logo>WeMovies</S.Logo>
          </Link>
          <Link to="/cart">
            <CartBlock />
          </Link>
        </S.Flex>
      </Container>
    </S.Container>
  )
};

export default Header;
