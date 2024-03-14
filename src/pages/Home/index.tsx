import { useQuery } from "@tanstack/react-query"
import EmptyCart from '../../assets/illustrations/EmptyCart.svg'
import EmptyStateCustom from "../../components/EmptyStateCustom"
import Loader from "../../components/Loader"
import MovieCard from "../../components/MovieCard"
import { getProducts } from "../../services/products"
import * as S from "./styles"

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getProducts
  })

  const onClickReload = () => {
    window.location.reload()
  }

  return (
    <>
      {isLoading && <Loader />}

      {data?.length === 0 && isLoading === false && (
        <EmptyStateCustom
          title='Parece que não há nada por aqui :('
          imageSrc={EmptyCart}
          imageAlt='Mulher segurando bolsa'
          imageHeight='264px'
          imageWidth='auto'
          buttonLabel='Recarregar a página'
          onClick={onClickReload}
        />
      )}

      <S.List>
        {data?.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </S.List>
    </>
  )
}

export default HomePage
