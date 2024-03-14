import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 2rem;
`

export const Image = styled.img`
  width: auto;
  height: 82px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`

export const GridSuperior = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 16px;
  align-items: center;
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const GridInferior = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  align-items: center;
`

export const SubTotal = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 19.07px;
  color: #999999;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #2F2E41;
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19.07px;
  color: #2F2E41;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

