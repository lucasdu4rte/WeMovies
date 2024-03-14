import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .block-details {
    display: flex;
    flex-direction: column;
    align-items: end;

    .description{
      display: none;
      font-size: 0.875rem;
      font-weight: 600;

      @media (min-width: 768px) {
        display: block;
      }
    }
    .item-count {
      color: #999999;
      font-size: 0.75rem;
      font-weight: 600;
    }
  }
`
