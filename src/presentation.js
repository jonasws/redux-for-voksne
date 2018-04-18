// Import React
import React from "react";

import * as recompose from "recompose";

// Import Spectacle Core tags
import {
  Appear,
  Link,
  Image,
  CodePane as CodePaneBase,
  Code,
  Deck,
  Notes,
  Heading,
  ListItem,
  List,
  Layout,
  Fill,
  S,
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
  overflow: "auto",
  height: "70vh"
})(CodePaneBase);

const CustomPlayground = recompose.withProps({
  scope: {
    ...recompose
  },
  theme: "light",
  height: "120vh"
})(ComponentPlayground);

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide bgColor="secondary" transition={["fade"]} />
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={1} fit>
        "Redux for grown-ups"
      </Heading>
      <Text margin="2rem">- patterns in the React "domain"</Text>
    </Slide>

    <Slide>
      <Notes>
        Dette er i utgangspunktet ikke et Redux-foredrag!. Viktig å påpeke dette
        tidlig.
      </Notes>
      <Heading size={2}>Yours truly</Heading>
      <List>
        <ListItem>Jonas Strømsodd</ListItem>
        <ListItem>Working "way too much" with React since 2015</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={2}>Patterns 101</Heading>
    </Slide>

    <Slide>
      <Text>Patterns is something you read about in books:</Text>
      <Layout>
        <Fill>
          <Image src={images.designPatternsCover} height="500px" />
        </Fill>
      </Layout>
    </Slide>

    <Slide>
      <Heading size={2}>How to identify a pattern?</Heading>
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
        <Text>This is really nothing new!</Text>
      </Appear>
    </Slide>

    <Slide>
      <Text textSize="4rem" italic>
        A reducer is something that iterates over a collection of items and gets
        a final result out of it.
      </Text>
    </Slide>

    <Slide>
      <Text>
        <Code textSize="5rem">{"(state, action) => newState"}</Code>
      </Text>
    </Slide>

    {/* Ja, denne er tom! */}
    <Slide bgColor="secondary" transiton={["spin"]} />

    <Slide>
      <Heading size={3}>Patterns ohoy!</Heading>
    </Slide>

    <Slide>
      <List>
        <ListItem>Structuring our codebase</ListItem>
        <ListItem>When, where and how to dispatch actions</ListItem>
        <ListItem>Naming things</ListItem>
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
      <AmaticHeading size={4} margin="-10vh 0 0 0">
        Ducks pattern
      </AmaticHeading>
      <CodePane
        overflow="auto"
        height="120vh"
        theme="light"
        textSize="1.5rem"
        lang="javascript"
        source={require("./demos/ducks-pattern.js.raw")}
      />
    </Slide>

    <Slide>
      <AmaticHeading size={3} margin="-10vh 0 0 0">
        "Triple threat"
      </AmaticHeading>
      <CodePane
        textSize="1.5rem"
        theme="light"
        lang="javascript"
        source={require("./demos/action-name-triple.js.raw")}
      />
    </Slide>
    <Slide>
      <Notes>"Proved solution"</Notes>
      <AmaticHeading size={3}>Thunking</AmaticHeading>
      <CodePane
        textSize="1.5rem"
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
      <Heading size={2}>Redux vs setState</Heading>
    </Slide>

    <Slide>
      <Notes>
        <ul>
          <li>Hva bør man putte i sin Redux store?</li>
          <li>Overgang til snakk om hvilke alternativer man har</li>
        </ul>
      </Notes>
      <Heading>When is the "right" time to pull in Redux?</Heading>
    </Slide>

    <Slide>
      <CustomPlayground code={require("./demos/withState-playground.js.raw")} />
    </Slide>

    <Slide>
      <CustomPlayground code={require("./demos/recompose-reducer.js.raw")} />
    </Slide>

    <Slide>
      <Heading size={3}>"Lighter" alternatives to Redux:</Heading>
      <List>
        <ListItem>Context API</ListItem>
        <ListItem>Unstated</ListItem>
        <ListItem>Freactal</ListItem>
        <ListItem>Recompose</ListItem>
        <ListItem>RxJS</ListItem>
      </List>
    </Slide>

    <Slide>
      <Notes>
        Funksjonell tankegang: composition, purity, side-effects, events
      </Notes>
      <Heading>Konklusjon</Heading>
      <List>
        <ListItem>The principles behind redux are nothing new!</ListItem>
        <ListItem>
          The value of Redux increases by knowing when to "not"
        </ListItem>
        <ListItem>
          We should apply the lessons learned from using Redux in other
          applications going forward
        </ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={3}>"Further learning"</Heading>
      <List>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=JUuic7mEs-s"
            target="_blank"
          >
            <S type="italic">Advanced patterns in Redux</S>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"
            target="_blank"
          >
            <S type="italic">You Might Not Need Redux</S> - Dan Abramov
          </Link>
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="secondary">
      <Heading size={1} textColor="primary">
        ?
      </Heading>
    </Slide>
  </Deck>
);

export default Presentation;
