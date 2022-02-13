import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    render() {
        const { change } = this.props;
        return (
            <button type="submit" onClick={change}>
                Click Here
            </button>
        );
    }
}

export default Button;
