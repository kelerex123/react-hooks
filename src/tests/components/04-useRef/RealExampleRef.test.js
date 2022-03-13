
import {shallow} from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'

describe('Pruebas en <RealExampleRef />', () => { 

    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<RealExampleRef />);
        
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');

        expect(wrapper.find(MultipleCustomHooks).exists()).toBe(true);

    })

})