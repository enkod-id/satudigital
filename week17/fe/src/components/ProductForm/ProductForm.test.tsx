import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ProductForm from '.'

describe('Product Form Test', () => {
    const mockProps = {
        onSubmit : jest.fn()
    }

    test('field product name render correctly', async () => {
        render(<ProductForm onSubmit={mockProps.onSubmit}/>)
        const title = screen.getByText('Nama Produk')
        const form = screen.getByPlaceholderText('Masukan nama produk')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('field product price render correctly', async () => {
        render(<ProductForm onSubmit={mockProps.onSubmit}/>)
        const title = screen.getByText('Harga Produk')
        const form = screen.getByPlaceholderText('Masukan harga produk')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('button submit render correctly', async () => {
        render(<ProductForm onSubmit={mockProps.onSubmit}/>)
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    test('onSubmit works correctly', async () => {
        render(<ProductForm onSubmit={mockProps.onSubmit} />);
        const title = screen.getByPlaceholderText('Masukan nama produk') as HTMLInputElement;
        const price = screen.getByPlaceholderText('Masukan harga produk') as HTMLInputElement;
        const submitButton = screen.getByText('Submit');

        fireEvent.change(title, { target: { value: 'contoh produk' } });
        fireEvent.change(price, { target: { value: '15000' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockProps.onSubmit).toHaveBeenCalledTimes(1);
            expect(mockProps.onSubmit).toHaveBeenCalledWith({
                title: 'contoh produk',
                price: '15000',
            });
        });
    })

})