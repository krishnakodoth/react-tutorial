import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

/* export const Layout = (props) => (
    <Container>
        {props.childern}
    </Container>
) */


class Layout extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        return (
            <Container>
                {this.props.children}                
                </Container>
        );
    }
}

export default Layout;