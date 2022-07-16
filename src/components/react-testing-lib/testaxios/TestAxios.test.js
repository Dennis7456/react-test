import React from "react";
import { ReactDOM } from "react";
import TestAxios from "./TestAxios";
import { render, waitFor, cleanup } from '@testing-library/react';

import axiosMock from 'axios';

afterEach(cleanup);


describe('useEffect', () => {

})

it('Async axios request works', async () => {
    axiosMock.get.mockResolvedValue({ data: { title: 'some title' }})

    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const { getByText, getByTestId, rerender } = render(<TestAxios url={url} />);

    expect(getByText(/...Loading/i).textContent).toBe('...Loading')

    const resolvedEl = await waitFor(() => getByTestId('title'))

   // await act( async () => render(<TestApp/>)); TODO

    expect((resolvedEl).textContent).toBe('some title');

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);

})