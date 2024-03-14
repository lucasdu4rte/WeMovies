import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  color: #2F2E41;
  background: #ffffff;
  border-radius: 6px;
`

export const Table = styled.table`
  width: 100%;

  th {
    color: #999999;
    font-weight: 700;
    text-align: left;
    padding-bottom: 2rem;
  }

  td {
    padding-bottom: 2rem;
  }
`

export const ProductCard = styled.div`
  display: flex;
  gap: 1rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Image = styled.img`
  width: auto;
  height: 115px;
`

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #2F2E41;

`

export const Footer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 8px;
  padding-top: 1.5rem;


  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const TotalBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const Total = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #999999;
`

export const TotalValue = styled.div`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  font-variant-numeric: tabular-nums;
  color: #2F2E41;
`

export const FinishOrder = styled.button`
  display: grid;
  place-items: center;

  padding: 8px 16px;
  border-radius: 4px;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;

  background: none;
  border: none;
  background: #009EDD;
  color: #ffffff;
  cursor: pointer;
`

export const HR = styled.hr`
  color: #999999;
`
