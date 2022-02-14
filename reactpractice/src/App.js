import Clocklist from './componenets/Clocklist';
import Form from './componenets/Form';

function App() {
    const quantity = [1, 2, 3];
    return (
        <>
            <div>
                <Clocklist quantity={quantity} />
            </div>
            <div>
                <Form />
            </div>
        </>
    );
}

export default App;
