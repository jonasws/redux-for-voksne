// Import React
import React from "react";

import * as recompose from "recompose";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Appear,
  Image,
  CodePane,
  BlockQuote,
  Cite,
  Deck,
  Notes,
  Heading,
  ListItem,
  List,
  Layout,
  Fit,
  Fill,
  Quote,
  Slide,
  Text,
  ComponentPlayground
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import the image preloader
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

// Images to be used in the presentation
const images = {
  designPatternsCover: require("./images/cover-design-patterns.jpg"),
  youDontKnowJsCover: require("./images/you-dont-know-js.png")
};

preloader(images);

// Custom components, other defaults for this presentation etc

const AmaticHeading = recompose.withProps({
  textFont: "Amatic SC"
})(Heading);

const CustomPlayground = recompose.withProps({
  scope: {
    styled,
    recompose
  },
  theme: "light",
  height: "20rem"
})(ComponentPlayground);

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit>
        "Redux for voksne"
      </Heading>
      <Text margin="2rem">- patterns i React-verden</Text>
    </Slide>

    <Slide>
      <Heading size={2}>Yours truly</Heading>
      <List>
        <ListItem>Jonas Strømsodd</ListItem>
        <ListItem>Jobbet "alt for mye" med React siden 2015</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={2}>Patterns 101</Heading>
      <Appear>
        <Text margin="2rem">aka "rykk tilbake til start"</Text>
      </Appear>
    </Slide>

    <Slide>
      <Text>Patterns er noe man leser om i bøker:</Text>
      <Layout>
        <Fill>
          <Image src={images.designPatternsCover} height="500px" />
        </Fill>

        <Fill>
          <Image src={images.youDontKnowJsCover} height="500px" />
        </Fill>
      </Layout>
    </Slide>

    <Slide>
      <Text>Hva kjennetegner så et pattern?</Text>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Text textColor="tertiary" italic>
        - Learning JavaScript design patterns
      </Text>
      <List>
        <Appear>
          <ListItem>Patterns are proven solutions</ListItem>
        </Appear>
        <Appear>
          <ListItem>Patterns can be easily reused</ListItem>
        </Appear>
        <Appear>
          <ListItem>Patterns can expressive</ListItem>
        </Appear>
      </List>
    </Slide>

    <Slide notes="Ikke gjenferd..">
      <Text>"Ting som går igjen"</Text>
    </Slide>

    <Slide>
      <Heading size={3}>Patterns ohoy!</Heading>
    </Slide>

    <Slide>
      <Notes>
        <ul>
          <li>Default export</li>
          <li>Named exports</li>
          <li>Upper snake case</li>
        </ul>
      </Notes>
      <AmaticHeading size={3}>Ducks pattern</AmaticHeading>
      <CodePane
        theme="light"
        lang="javascript"
        source={require("./demos/ducks-pattern.js.raw")}
      />
    </Slide>

    <Slide>
      <Text>Action-pair</Text>
      <CodePane
        theme="light"
        lang="javascript"
        source={require("./demos/ducks-pattern.js.raw")}
      />
    </Slide>

    <Slide />

    <Slide>
      <CustomPlayground code={require("./demos/Comp1.js.raw")} />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Typography
      </Heading>
      <Heading size={1} textColor="secondary">
        Heading 1
      </Heading>
      <Heading size={2} textColor="secondary">
        Heading 2
      </Heading>
      <Heading size={3} textColor="secondary">
        Heading 3
      </Heading>
      <Heading size={4} textColor="secondary">
        Heading 4
      </Heading>
      <Heading size={5} textColor="secondary">
        Heading 5
      </Heading>
      <Text size={6} textColor="secondary">
        Standard text
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Standard List
      </Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>
  </Deck>
);

export default Presentation;
