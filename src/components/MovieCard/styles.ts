import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #ffffff;
  border-radius: 6px;
  padding: 1rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Image = styled.img`
  width: 147px;
  height: 188px;
`

export const Title = styled.div`
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`

export const Price = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
`
type ButtonProps = {
  bg?: 'blue' | 'green'
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  color: #ffffff;
  font-weight: 700;
  font-size: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  background: #009EDD;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  ${props => props.bg === 'green' && css`
    background: #039B00;
  `}

  .cart-count {
    display: flex;
    align-items: center;
    gap: 3.4px;
  }
`
