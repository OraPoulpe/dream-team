import { it, describe, expect } from '@jest/globals'
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/pages/Home/Home';

describe('Общие требования', () => {
    it('название магазина в шапке должно быть ссылкой на главную страницу', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        );

        const header = screen.queryByRole('link', { name: /Example store/i });
        expect(header).toHaveAttribute('href', '/');
    });
});