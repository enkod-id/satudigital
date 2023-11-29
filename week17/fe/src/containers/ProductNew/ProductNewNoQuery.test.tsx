import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import ProductNewNoQuery from './ProductNewNoQuery';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}))

describe('Product New Container testing', () => {
    test('renders product form and submits new product', async () => {
        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);

        render(
          <MemoryRouter>
            <ProductNewNoQuery />
          </MemoryRouter>
        );
      
        global.fetch = jest.fn().mockResolvedValue({
          json: () => Promise.resolve({}),
        });
      
        act(() => {
            fireEvent.change(screen.getByPlaceholderText('Masukan nama produk'), { target: { value: 'New Product' } });
            fireEvent.change(screen.getByPlaceholderText('Masukan harga produk'), { target: { value: '20' } });
        
            fireEvent.click(screen.getByText('Submit'));
        })
      
        await waitFor(() => expect(navigateMock).toHaveBeenCalledWith('/product'))
      });
})