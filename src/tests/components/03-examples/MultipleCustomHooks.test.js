import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {

    

    

    test('debe de mostrarse correctamente', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar la informacion', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: [{
                author: 'Bryan',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

       expect(wrapper.find('.alert').exists()).toBe(false);
       expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Bryan');

    })

})