import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductListNoQuery from './ProductListNoQuery';

const response = {
    "products": [
        {
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
        },
      ],
    
      "total": 100,
      "skip": 0,
      "limit": 30
}

global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(response)
})

describe('Product List No Query Testing', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // Deprecated
              removeListener: jest.fn(), // Deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
    })
    test('render correctly', async () => {
        render(
            <MemoryRouter initialEntries={['/product']}>
                <Routes>
                    <Route  path='/product' element={<ProductListNoQuery />}/>
                </Routes>
            </MemoryRouter>
        )

        await waitFor(
            () => screen.getByText('iPhone 9')
        );
        expect(screen.getByText('Detail')).toBeDefined()
        expect(screen.getByText('Edit')).toBeDefined()
        expect(screen.getByText('Delete')).toBeDefined()
    })
})