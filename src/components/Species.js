import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const Species = ({data}) => {
    return (
        <>
            <h1>Species</h1>
            <Grid columns={4}>
                {data.map((species, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{species.name}</Card.Header>
                                    <Card.Description>
                                    <h4>Classification {species.classification}</h4>
                                    <h4>Shows up in movie(s): {species.films.length}</h4>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })
                }
            </Grid>
        </>
    )
}

export default Species;
