import {shallow} from 'enzyme'
import { HookApp } from '../HookApp'

describe('Prueba en <HookApp />', () => {

    test('debe hacer match con snapshot', () => {

        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();

    })

})