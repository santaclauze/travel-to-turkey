import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from '@bootstrap-styled/v4/lib/Cards/Card';
import CardDeck from '@bootstrap-styled/v4/lib/Cards/CardDeck';
import CardTitle from '@bootstrap-styled/v4/lib/Cards/CardTitle';
import CardText from '@bootstrap-styled/v4/lib/Cards/CardText';
import CardBlock from '@bootstrap-styled/v4/lib/Cards/CardBlock';

import Fa from '@bootstrap-styled/v4/lib/Fa';

class Offers extends Component {

    render() {
        return (
            <CardDeck>
                <Card>
                    <CardBlock>
                        <CardTitle className="text-center">
                            <FontAwesomeIcon icon="mosque" size="3x" />
                            Cultural
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle><FontAwesomeIcon icon="cocktail" size="3x" /></CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle>
                            <FontAwesomeIcon icon="umbrella-beach" size="3x" />
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle>
                            <FontAwesomeIcon icon="spa" size="3x" />
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle><FontAwesomeIcon icon="plus" size="3x" /></CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
            </CardDeck>
        )
    }
}

export default Offers;