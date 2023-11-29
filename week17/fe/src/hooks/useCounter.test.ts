import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe('Hooks useCounter test', () => {
    test('test increment function', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1)
    });

    test('test decrement function', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1)
    });

    test('test initial value', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.count).toBe(0)
    });
});