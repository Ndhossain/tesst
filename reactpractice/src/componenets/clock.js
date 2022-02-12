import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        const proper = this.props;
        return <h1>The time is {new Date().toLocaleTimeString(proper.locale)}</h1>;
    }
}

export default Clock;
