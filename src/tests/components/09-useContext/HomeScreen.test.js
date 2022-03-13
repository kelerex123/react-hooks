import {shallow, mount} from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas con <HomeScreen />', () => {

    const user = {
        name: 'Bryan',
        email: 'correo@gmail.com'
    }
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

})