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
    seconary: "#010121",
    tertiary: "#1F2022",
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
  youDontKnowJsCover: require("./images/you-dont-know-js.png"),
  confusedGif: "https://media.giphy.com/media/2YflHLtLeUbhhVoMCm/giphy.gif"
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
      <Text italic textSize="4rem" margin="0 0 2rem 0">
        "Patterns that inspired redux"
      </Text>
      <Appear>
        <Text>Dette er ikke en bok...</Text>
      </Appear>
    </Slide>

    <Slide>
      <Notes>
        <ol>
          <li>1. CQRS - "mange" synder mot denne (purity)</li>
          <li>2. Elm - mye å lære av måten ting nærmest "må" gjøres</li>
          <li>3. "Pattern, schmattern"</li>
        </ol>
      </Notes>
      <List>
        <ListItem italic>Command query responsibility segregation</ListItem>
        <ListItem>"the Elm architecture"</ListItem>
        <ListItem>Flux</ListItem>
        <ListItem>Event sourcing</ListItem>
      </List>
    </Slide>

    <Slide bgColor="secondary" transition={["fade"]}>
      <Heading size={2} textColor="primary" italic>
        One pattern to rule them all
      </Heading>
    </Slide>

    <Slide>
      <Notes>
        Dan Abramov gjorde oss alle en tjeneste med å "fremmane spesialisert
        inkarnasjon av Flux
      </Notes>
      <Text textSize="4rem" italic margin="0 0 2rem 0">
        Reducer pattern
      </Text>
      <Appear>
        <Text>Dette er ikke noe nytt!</Text>
      </Appear>
    </Slide>

    <Slide bgColor="secondary" transiton={["spin"]}>
      <Image src={images.confusedGif} height="500px" />
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
      <AmaticHeading size={3}>"Triple threat"</AmaticHeading>
      <CodePane
        theme="light"
        lang="javascript"
        source={require("./demos/action-name-triple.js.raw")}
      />
    </Slide>
    <Slide>
      <AmaticHeading size={3}>Thunking</AmaticHeading>
      <CodePane
        theme="light"
        lang="javascript"
        source={require("./demos/thunk-flow.js.raw")}
      />
    </Slide>

    <Slide>
      <Notes>
        Angular 1 - React (local state) - Redux (state in "one place") - State
        where it makes sense
      </Notes>
      <Text>Redux vs setState</Text>
    </Slide>

    {/* <Slide>
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
        </Slide> */}
  </Deck>
);

export default Presentation;
