import React, { Component } from 'react';

import Card from '@bootstrap-styled/v4/lib/Cards/Card';
import CardDeck from '@bootstrap-styled/v4/lib/Cards/CardDeck';
import CardTitle from '@bootstrap-styled/v4/lib/Cards/CardTitle';
import CardText from '@bootstrap-styled/v4/lib/Cards/CardText';
import CardBlock from '@bootstrap-styled/v4/lib/Cards/CardBlock';

class Offers extends Component {

    render() {
        return (
            <CardDeck>
                <Card>
                    <CardBlock>
                        <CardTitle className="text-center">
                            Cultural
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle>
                            Relaxed
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle>
                            Cruise
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle>
                            Luxury
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle>
                            Health
                        </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                </Card>
            </CardDeck>
        )
    }
}

export default Offers;