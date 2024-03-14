import * as S from './styles';

type EmptyStateProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageHeight: string;
  imageWidth: string;
  buttonLabel: string;
  onClick: () => void;
}

const EmptyStateCustom = ({
  title,
  buttonLabel,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  onClick,
}: EmptyStateProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <div>
        <img
          src={imageSrc}
          alt={imageAlt}
          height={imageHeight}
          width={imageWidth}
        />
      </div>
      <S.Button onClick={onClick}>
        {buttonLabel}
      </S.Button>
    </S.Container>
  )
}

export default EmptyStateCustom;
