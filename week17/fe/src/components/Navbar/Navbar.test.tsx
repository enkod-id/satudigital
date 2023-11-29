import { waitFor, fireEvent, render, screen } from '@testing-library/react';
import Navbar from '.';
import { BrowserRouter } from 'react-router-dom';

describe('testing navbar', () => {
    test('menu render correctly', async () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>)
        const menus = ['Home','Product','Profile','Signout'];

        await waitFor(() => {
            menus.map( async (menu) => {
                const title = screen.getByText(menu)
                expect(title).toBeDefined();
    
            })
        })
    })
})