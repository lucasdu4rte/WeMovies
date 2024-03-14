import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  background: #ffffff;
  border-radius: 4px;
  padding-top: 4rem;
  padding-bottom: 6rem;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #2F2E41;
`

export const Button = styled.button`
  font-size: 0.8rem;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  background: #009EDD;
  padding: 0.8rem 2rem;
  cursor: pointer;
`
