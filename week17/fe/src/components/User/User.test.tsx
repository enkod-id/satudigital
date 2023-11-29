import { render, waitFor } from '@testing-library/react';
import AppProvider , { AppContext } from '../../Provider/AppProvider';
import User from '.';
// import axios from axios;

const mockResponse = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "email": "atuny0@sohu.com",
}

// jest.mock('axios')

global.fetch = jest.fn().mockResolvedValue({
    json: async () => (mockResponse),
});

describe('User component test', () => {
    test('test component render correctly', async () => {

        // const mockedAxios = axios as jest.Mocked<typeof axios>
        // const mockedUser = mockedAxios.get.mockReturnValueOnce(mockResponse)
        // expect(mockedUser).toHaveBeenCalledWith(1)

        const setUser = jest.fn();

        const { getByText } = render(
            <AppProvider>
                <AppContext.Provider value={{ setUser, user: undefined }}>
                    <User />
                </AppContext.Provider>
            </AppProvider>
        )

        const firstName = getByText('First Name:')
        const lastName = getByText('Last Name:')
        const email = getByText('Email:')

        expect(firstName).toBeDefined();
        expect(lastName).toBeDefined();
        expect(email).toBeDefined();
    })

    test('render user information correctly', async () => {
        const setUser = jest.fn();

        render(
            <AppProvider>
                <AppContext.Provider value={{ setUser, user: undefined }}>
                    <User />
                </AppContext.Provider>
            </AppProvider>
        )

        await waitFor(() => {
            expect(setUser).toHaveBeenCalledTimes(1)
            expect(setUser).toHaveBeenCalledWith(expect.objectContaining(mockResponse))
        });


    })
})