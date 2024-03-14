import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Providers } from '../providers';
import * as services from '../services/products';

describe("Homepage test", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  });

  test("Should show empty state", async () => {
    vi.spyOn(services, 'getProducts').mockResolvedValue([])

    render(<Providers />);

    await waitFor(() => {
      expect(screen.getByText(/Parece que não há nada por aqui/i)).toBeInTheDocument();
    });
  })

  test("Should show the movie list", async () => {
    const movies = [
      {
        "id": 1,
        "title": "Viúva Negra",
        "price": 9.99,
        "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
      },
      {
        "id": 2,
        "title": "Shang-chi",
        "price": 30.99,
        "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
      },
      {
        "id": 3,
        "title": "Homem Aranha",
        "price": 29.9,
        "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
      },
    ];

    vi.spyOn(services, 'getProducts').mockResolvedValue(movies)

    render(<Providers />);

    await waitFor(() => {
      movies.forEach(movie => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
      });
    });
  })

  test("Should add a movie on cart", async () => {
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
    fireEvent.click(addToCartButtons[0]);

    const cartCount = screen.getByTestId('cart-count');``
    expect(cartCount).toHaveTextContent('1 itens');
  })

  test("Should add multiple movies on cart", async () => {
    const movies = [
      {
        "id": 1,
        "title": "Viúva Negra",
        "price": 9.99,
        "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
      },
      {
        "id": 2,
        "title": "Shang-chi",
        "price": 30.99,
        "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
      },
    ];

    vi.spyOn(services, 'getProducts').mockResolvedValue(movies)

    render(<Providers />);

    const addToCartButtons = await screen.findAllByText('ADICIONAR AO CARRINHO');
    const cartCount = screen.getByTestId('cart-count');

    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(addToCartButtons[0]);

    expect(addToCartButtons[0]).toHaveTextContent('2');

    expect(cartCount).toHaveTextContent('2 itens');

    fireEvent.click(addToCartButtons[1]);
    fireEvent.click(addToCartButtons[1]);

    expect(addToCartButtons[1].textContent).toContain('2');
    expect(cartCount).toHaveTextContent('4 itens');
  })
})
