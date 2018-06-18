import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Container, Grid } from "./styled";
import portfolioItems from "./portfolioItems";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// images
import michaelaubry from "./michaelaubry-alt.jpg";
import michaelaubrybody from "./michaelaubrybody.png";
import instagram from "./instagram.svg";
import youtube from "./youtube.svg";
import dribbble from "./dribbble.svg";

const Banner = styled.div`
  position: relative;
  padding-bottom: 40%;
  overflow: hidden;
`;

const ImageOverlay = styled.img`
  width: 100%;
  pointer-events: none;
  position: absolute;
  z-index: 10;
`;

const Image = styled.img`
  width: 110%;
  pointer-events: none;
  position: absolute;
  filter: saturate(0);
`;

const HeaderText = styled.div`
  text-shadow: 0 1px 0px rgb(115, 111, 111);
  width: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 80px;
  z-index: 9;
  font-family: "brandon-grotesque", sans-serif;
  font-weight: bold;
  margin-top: -20px;
  transform: scale(0.1);
  transform: scale(1);
  transition: 600ms all ease;

  ${breakpoint("tablet")`
  `};
`;

const SocialMediaWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  bottom: 20px;
`;

const SocialMedia = styled.a`
  text-decoration: none;
  background: #1f2329;
  padding: 3px 6px;
  margin-left: 3px;
  border-radius: 4px;

  ${breakpoint("tablet")`
    padding: 6px 10px;
    margin-left: 10px;
  `};
`;

const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 14px;

  ${breakpoint("tablet")`
    width: 16px;
  `};
`;

const Text = styled.span`
  color: #fff;
  font-size: 11px;
  vertical-align: middle;
  margin-left: 6px;

  ${breakpoint("tablet")`
    font-size: 14px;
  `};
`;

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner>
          <HeaderText>MICHAEL AUBRY</HeaderText>
          <Image src={michaelaubry} alt="Michael Aubry" />
          <SocialMediaWrapper>
            <SocialMedia
              href="https://www.instagram.com/michaelaubry/"
              target="_blank"
            >
              <Icon src={instagram} />
              <Text>@michaelaubry</Text>
            </SocialMedia>
            <SocialMedia
              href="https://www.youtube.com/channel/UCAXHVgUUF0pPHEeoV_86K2A/featured"
              target="_blank"
            >
              <Icon src={youtube} />
              <Text>@leveluplifestyle</Text>
            </SocialMedia>
            <SocialMedia
              href="https://dribbble.com/michaelaubry"
              target="_blank"
            >
              <Icon src={dribbble} />
              <Text>@michaelaubry</Text>
            </SocialMedia>
          </SocialMediaWrapper>
        </Banner>
        <Container>
          <Tabs>
            <TabList>
              <Tab>Software</Tab>
              <Tab>Fitness</Tab>
              <Tab>Dating</Tab>
            </TabList>

            <TabPanel>
              <Grid>
                {portfolioItems.map((card, index) => (
                  <Card key={index} {...card} />
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
