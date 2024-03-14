import { useNavigate } from 'react-router-dom';
import OrderCompletedSvg from '../../assets/illustrations/OrderCompleted.svg';
import EmptyStateCustom from "../../components/EmptyStateCustom";

function OrderCompletedPage() {
  const navigate = useNavigate()
  const onClickReturnToHome = () => {
    navigate('/');
  }

  return (
    <EmptyStateCustom
      title="Compra realizada com sucesso!"
      imageSrc={OrderCompletedSvg}
      imageAlt='Ilustração homem confirmando com jóia'
      imageHeight='307px'
      imageWidth='auto'
      buttonLabel='VOLTAR'
      onClick={onClickReturnToHome}
    />
  )
}

export default OrderCompletedPage
