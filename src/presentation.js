// Import React
import React from "react";

import * as recompose from "recompose";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Appear,
  Image,
  CodePane as CodePaneBase,
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
  S,
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
  fluxDiagram: require("./images/flux-diagram.png"),
  reduxDiagram: require("./images/redux-diagram.png"),
  designPatternsCover: require("./images/cover-design-patterns.jpg"),
  youDontKnowJsCover: require("./images/you-dont-know-js.png")
};

preloader(images);

// Custom components, other defaults for this presentation etc

const AmaticHeading = recompose.withProps({
  textFont: "Amatic SC"
})(Heading);

const CodePane = recompose.withProps({
  textSize: "2rem",
  overflow: "auto",
  height: "100vh"
})(CodePaneBase);

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
      <Notes>
        Dette er i utgangspunktet ikke et Redux-foredrag!. Viktig å påpeke dette
        tidlig.
      </Notes>
      <Heading size={2}>Yours truly</Heading>
      N
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
      </Layout>
    </Slide>

    <Slide>
      <Heading size={2}>Hva kjennetegner så et pattern?</Heading>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="gold" italic>
        Learning JavaScript design patterns:
      </Heading>
      <List>
        <Appear>
          <ListItem>Patterns are proven solutions</ListItem>
        </Appear>
        <Appear>
          <ListItem>Patterns can be easily reused</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Patterns can be <S type="italic">expressive</S>
          </ListItem>
        </Appear>
      </List>
    </Slide>

    <Slide notes="Ikke gjenferd..">
      <Heading size={2}>"Ting som går igjen"</Heading>
    </Slide>

    <Slide>
      <Heading italic size={2} margin="0 0 2rem 0">
        "Patterns that inspired redux"
      </Heading>
      <Appear>
        <Text textColor="red">Dette er ikke en bok...</Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading size={2}>Men først:</Heading>
    </Slide>

    <Slide>
      <Image src={images.reduxDiagram} />
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

    <Slide>
      <Image src={images.fluxDiagram} height="50vh" />
    </Slide>

    <Slide bgColor="secondary" transition={["fade"]}>
      <Heading size={2} textColor="primary" italic>
        One pattern to rule them all
      </Heading>
    </Slide>

    <Slide>
      <Notes>
        Dan Abramov gjorde oss alle en tjeneste med å "mane frem" en
        spesialisert inkarnasjon av Flux
      </Notes>
      <Heading size={2} italic margin="0 0 2rem 0">
        Reducer pattern
      </Heading>
      <Appear>
        <Text>Dette er ikke noe nytt!</Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading size={3}>
        A reducer is something that iterates over a collection of items and gets
        a final result out of it.
      </Heading>
    </Slide>

    {/* Ja, denne er tom! */}
    <Slide bgColor="secondary" transiton={["spin"]} />

    <Slide>
      <Heading size={3}>Patterns ohoy!</Heading>
    </Slide>

    <Slide>
      <List>
        <ListItem>Organisering av kode</ListItem>
        <ListItem>Hvor og hvordan actions dispatches</ListItem>
        <ListItem>Navngivning</ListItem>
      </List>
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
        overflow="auto"
        height="120vh"
        theme="light"
        textSize="2rem"
        lang="javascript"
        source={require("./demos/ducks-pattern.js.raw")}
      />
    </Slide>

    <Slide>
      <Notes>Rama shiz osv</Notes>
      <Text>Mindre boilerplate med Ramda-magi {"<3"}</Text>{" "}
      <CodePane
        overflow="auto"
        height="120vh"
        theme="light"
        textSize="2rem"
        lang="javascript"
        source={require("./demos/reducing-boilerplate-ramda.js.raw")}
      />
    </Slide>

    <Slide>
      <Notes>Kutte ned boilerplate og switch-ting</Notes>
      <Text>Da kan reducer forenkles litt:</Text>
      <CodePane
        overflow="auto"
        height="120vh"
        theme="light"
        textSize="2rem"
        lang="javascript"
        source={require("./demos/reducing-boilerplate.js.raw")}
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
      <Notes>"Proved solution"</Notes>
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

    <Slide>
      <Heading size={3}>"Further learning"</Heading>
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
