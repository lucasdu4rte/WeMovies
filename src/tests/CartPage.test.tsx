import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Providers } from '../providers';
import * as services from '../services/products';

describe("CartPage test", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  });

  test("Should complete the order", async () => {
    const movies = [
      {
        "id": 1,
        "title": "Viúva Negra",
        "price": 9.99,
        "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
      },
    ];

    vi.spyOn(services, 'getProducts').mockResolvedValue(movies)

    render(<Providers />);

    const addToCartButtons = await screen.findAllByText('ADICIONAR AO CARRINHO');
    const cartCount = screen.getByTestId('cart-count');
    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(cartCount);

    const inputNumber = await screen.findByPlaceholderText('Quantidade')
    const incrementButton = await screen.findByText('incrementar')
    const decrementButton = await screen.findByText('decrementar')

    expect(inputNumber).toHaveDisplayValue('1');
    fireEvent.click(incrementButton);
    expect(inputNumber).toHaveDisplayValue('2');
    fireEvent.click(decrementButton);
    expect(inputNumber).toHaveDisplayValue('1');

    const completeOrderButton = await screen.findByText('FINALIZAR PEDIDO');
    fireEvent.click(completeOrderButton)
    await waitFor(async () => {
      expect(await screen.findByText('Compra realizada com sucesso!')).toBeInTheDocument();
    })
  })
})
