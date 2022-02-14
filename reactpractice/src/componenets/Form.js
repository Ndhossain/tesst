import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Form extends React.Component {
    state = {
        title: '',
    };

    handlechange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    render() {
        const { title } = this.state;
        return (
            <>
                <br />
                <form action="form">
                    <input
                        type="text"
                        placeholder="Enter Text"
                        value={title}
                        onChange={this.handlechange}
                    />
                    <input type="submit" name="Submit" />
                </form>
            </>
        );
    }
}
