import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const Films = ({data}) => {
    return (
    <>
        <h1>Films</h1>
        <Grid columns={3}>
            {data.map((films, i) => {
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{films.title}</Card.Header>
                                <Card.Description>
                                <h4>Part {films.episode_id}</h4>
                                <h4>Release date: {films.release_date}</h4>
                                <h4>Dirctor: {films.director}</h4>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })
            }
        </Grid>
    </>
    );
}

export default Films;

