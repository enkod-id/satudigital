import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import ProductEdit from '.';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
    useParams: jest.fn()
}))

const response = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "...",
    "images": ["...", "...", "..."]
  }

global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(response)
})

describe('Product Edit Container Testing', () => {

    test('render product edit page and updates product', async () => {

        const id = '1';
        
        (useParams as jest.Mock).mockReturnValue({ id: id});

        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);

        render(
            <MemoryRouter initialEntries={[`/product/edit/${id}`]}>
                <Routes>
                    <Route path='/product/edit/:id' element={<ProductEdit />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => screen.getByDisplayValue('iPhone 9'))

        const name = screen.getByPlaceholderText('Masukan nama produk');
        const price = screen.getByPlaceholderText('Masukan harga produk');

        act(() => {
            fireEvent.change(name, { target: { value : 'iPhone 9'}})
            fireEvent.change(price, { target: { value : 549}})
            fireEvent.click(screen.getByText('Submit'));
        })

        await waitFor(() => expect(navigateMock).toHaveBeenCalledWith('/product'))
    })
})