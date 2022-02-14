import React from 'react';
import Button from './Button';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    // eslint-disable-next-line react/no-unused-state
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleClick = () => {
        const { locale } = this.state;
        // eslint-disable-next-line no-unused-expressions
        locale === 'bn-BD'
            ? this.setState({
                  locale: 'en-US',
              })
            : this.setState({
                  locale: 'bn-BD',
              });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1>The time is {date.toLocaleTimeString(locale)}</h1>
                <Button change={this.handleClick} />
            </div>
        );
    }
}

export default Clock;
