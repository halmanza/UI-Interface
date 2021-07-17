import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import avatar from "../static/profilealmanza.jpg";



const GridPadded = () => (
  
    <Grid columns={3} padding stackable="true" textAlign="center">
      <Grid.Column color="black">
          <h2>Background</h2>
          <Card color="blue" href="https://github.com/halmanza" centered>
        <Image
          src={avatar}
          alt="image of Anthony Almanza, image is link to his GitHub Account"
        />
        <Card.Content textAlign="left">
          <Card.Header>Anthony Almanza</Card.Header>
          <Card.Description>
            Arizona Web developer who enjoys the intersection of design and
            logic. He enjoys all things HTML,CSS, JavaScript, React
          </Card.Description>
        </Card.Content>
        <Card.Meta>Coniousser of coffee, code, and rock climbing.</Card.Meta>
      </Card>
      </Grid.Column>

      <Grid.Column color="red">
          <h2>Experience</h2>
        <p>Testing the grid column</p>
      </Grid.Column >

      <Grid.Column color="blue">
          <h2>Hobbies</h2>
        <p>Testing the last grid column</p>
      </Grid.Column>
    </Grid>
  
);

const About = () => {
  return (<div >
   
    <GridPadded />
    </div>
  );
};

export default About;
