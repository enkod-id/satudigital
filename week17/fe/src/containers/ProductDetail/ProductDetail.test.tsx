import { render, screen } from '@testing-library/react';
import ProductDetail from '.';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Testing Product Detail Container', () => {
    test('make sure product detail render the params', () => {
        const id = '112';

        render(
            <MemoryRouter initialEntries={[`/product/${id}`]}>
                <Routes>
                    <Route path='/product/:id' element={<ProductDetail />}/>
                </Routes>
            </MemoryRouter>
        )

        const textElement = screen.getByText(`Ini adalah halaman product detail dengan id: ${id}`)
        expect(textElement).toBeDefined();
    })
})