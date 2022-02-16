import { render, screen } from '@testing-library/react';
import Loader from '../../components/Loader/Loader';


test('render Loading text', () => {
    render(<Loader/>);
    const loaderElement = screen.getByText('Loading...');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toBeVisible();
});