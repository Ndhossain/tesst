import Clock from './clock';

export default function Clocklist(quantity = []) {
    const arr = quantity.quantity;
    return (
        <div>
            {arr.map((key) => (
                <Clock key={key} />
            ))}
        </div>
    );
}
