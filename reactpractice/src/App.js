import ClickCounter from './componenets/ClickCounter';
import Clocklist from './componenets/Clocklist';
import Counter from './componenets/Counter';
import Form from './componenets/Form';
import HoverCounter from './componenets/HoverCounter';

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
            <br />
            <div>
                <Counter>
                    {(counter, handleChange) => (
                        <ClickCounter count={counter} handleChange={handleChange} />
                    )}
                </Counter>
                <Counter>
                    {(counter, handleChange) => (
                        <HoverCounter count={counter} handleChange={handleChange} />
                    )}
                </Counter>
            </div>
        </>
    );
}

export default App;
