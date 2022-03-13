import { renderHook, act} from '@testing-library/react-hooks';
import {shallow} from 'enzyme';
import { useCounter } from '../../hooks/useCounter';

describe('Prueba en useCounter', () => {

    test('debe de retornar valores por defecto', () => {

        const {result} = renderHook( () => useCounter());
        
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');


    })

    test('debe de tener el counter en el valor que se paso', () => {

        const value = 20;
        const {result} = renderHook( () => useCounter(value));
        
        expect(result.current.counter).toBe(value);
  
    })

    test('debe de incrementar el counter en 1', async () => {

        const value = 20;
        const {result} = renderHook( () => useCounter(value));
        const {increment} = result.current;

        act( () => {
            increment();
        })

        expect(result.current.counter).toBe(value+1);
  
    })

    test('debe de disminuir en 1 el counter', async () => {

        const value = 20;
        const {result} = renderHook( () => useCounter(value));
        const {decrement} = result.current;

        act( () => {
            decrement();
        })

        expect(result.current.counter).toBe(value-1);
  
    })

    test('debe de resetearse el counter', async () => {

        const value = 20;
        const {result} = renderHook( () => useCounter(value));
        const {increment, reset} = result.current;

        act( () => {
            increment();
            reset()
        })

        expect(result.current.counter).toBe(value);
  
    })
})