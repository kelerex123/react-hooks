import {shallow, mount} from 'enzyme'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas con <LoginScreen />', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de ejecutarse el setUser con el argumento esperado', () => {

        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({
            id: 4568686,
            name:'Super'
        });

    })

})