import React from "react";
import {
  A,
  Build,
  Button,
  Card,
  IconFlex,
  Grid,
  H1,
  H3,
  Img,
  P,
  PFlex,
  Second,
  SecurityContainer,
  SecurityStyles,
  TinyImg,
  Svg,
  InvestmentContainer,
  Investment,
  Returns,
  Saver,
  Flex,
  Featured,
  Icons,
  Customer,
  Other,
  Scroll,
  Single,
  H6,
  ButtonLink,
  Date,
  UserImg,
  ScrollContainer,
} from "./Security.styles";
import SecImg from "../images/security.png";
import Piggy from "../images/piggy.png";
import Safelock from "../images/safelock.png";
import InvestmentImg from "../images/Group 6.png";
import TechPoint from "../images/techpoint.png";
import Techcrunch from "../images/techcrunch.png";
import Guardian from "../images/guardian.png";
import FlexImg from "../images/flex.png";
import Target from "../images/target.png";
import { Links, Button as OtherButton, Img as IconImg } from "./Hero.styles";
import Google from "../images/google-icon.svg";
import Apple from "../images/apple-icon.svg";

export default function Security() {
  return (
    <SecurityContainer>
      <SecurityStyles>
        <Img src={SecImg} alt="security" />
        <Second>
          <H1>Your security is our priority</H1>
          <P className="main-p">
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is comepletely protected from fraud.
          </P>
          <A href="#" className="line-hover">
            Learn more &gt;
          </A>
        </Second>
      </SecurityStyles>
      <PFlex>
        <Build>
          <H1 className="larger">4 ways to build your savings</H1>
          <P> Earn 5%-15% when you save with any of these PiggyVest plans.</P>
          <Button>Start Saving</Button>
        </Build>
        <Grid>
          <Card>
            <TinyImg src={Piggy} alt="tiny-img" width="50px" height="50px" />
            <H3>Automated Savings</H3>
            <P className="min-h">
              Build a dedicated savings faster on your terms automatically or
              manually.
            </P>
            <IconFlex className="ic">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E0EFFF" />
                <path
                  d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z"
                  fill="#003399"
                />
              </Svg>
              <P>Piggybank</P>
            </IconFlex>
          </Card>
          <Card>
            <TinyImg src={Safelock} alt="tiny-img" width="50px" height="50px" />
            <H3>Fixed Savings</H3>
            <P className="min-h">
              Lock money away for a fixed duration with no access to it until
              maturity. It's like having a custom fixed deposit.
            </P>
            <IconFlex className="ic">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E3F5FF" />
                <path
                  d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z"
                  fill="#3296FF"
                />
              </Svg>
              <P>Safelock</P>
            </IconFlex>
          </Card>
          <Card>
            <TinyImg src={Target} alt="tiny-img" width="50px" height="50px" />
            <H3>Goal-Oriented Savings</H3>
            <P className="min-h">
              Reach all your savings goals faster. Save towards multiple goals
              on your own or with a group.
            </P>
            <IconFlex className="ic">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E4FFF0" />
                <path
                  d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z"
                  fill="#069B40"
                />
              </Svg>
              <P>Target Savings</P>
            </IconFlex>
          </Card>
          <Card>
            <TinyImg src={FlexImg} alt="tiny-img" width="50px" height="50px" />
            <H3>Flexible Savings</H3>
            <P className="min-h">
              Save, transfer, withdraw, manage and organise your money for free
              at any time.
            </P>
            <IconFlex className="ic">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle cx="16.4438" cy="16.7622" r="16.0254" fill="#FDE7F5" />
                <path
                  d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z"
                  fill="#E5288E"
                />
              </Svg>
              <P>Flex Naira</P>
            </IconFlex>
          </Card>
        </Grid>
      </PFlex>
      <InvestmentContainer>
        <img src={InvestmentImg} alt="investment" />
        <Investment>
          <Returns>Up to 25% Returns</Returns>
          <H1 className="investment">Access investment opportunities</H1>
          <P className="main-p">
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.
          </P>
          <A href="#" className="line-hover">
            Learn more about Investments &gt;
          </A>
        </Investment>
      </InvestmentContainer>
      <Flex>
        <Saver>
          <H1 className="investment">Meet the saver of the month!</H1>
          <P>
            Every month, we shine a spotlight on one saver, asking them
            questions about their savings culture and how the product is
            specifically helping them shape how they spend and save for future
            responsibilities.
          </P>
          <IconFlex className="a">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <circle cx="16.2173" cy="16.1587" r="16.0254" fill="white" />
              <path
                d="M18.6211 10.5498L17.4913 11.6796L21.1611 15.3574L8.20461 15.3574L8.20461 16.96L21.1611 16.96L17.4833 20.6378L18.6211 21.7676L24.23 16.1587L18.6211 10.5498Z"
                fill="#2295F2"
              />
            </Svg>
            <P className="meet">Meet Tito</P>
          </IconFlex>
        </Saver>
        <div
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/PHOTO_2022_08_02_17_33_57_af95edcdcb/PHOTO_2022_08_02_17_33_57_af95edcdcb.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            paddingTop: "34.6%",
            height: "10px",
          }}
        ></div>
      </Flex>
      <Customer id="customer">
        <ScrollContainer>
          <Scroll height="675" id="scroll">
            <Single>
              <Date>Thursday, 27th of October 2022 by 13:03 PM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img8a810f8584.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Rachael O</H6>
                  <P>
                    My name is Rachael Joseph and I am here to testify that
                    Piggyvest has helped me a lot. I had to spread the good news
                    to my friends and tell them about the app and behold they
                    are also using it. Thank you so much Pggyvest for saving me
                    cause I am the type of person that spends lavishly. Thank
                    you once again Piggyvest 💙
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Monday, 24th of October 2022 by 23:27 PM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img9c88f0d5d5.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Uchendu C</H6>
                  <P>
                    Whenever money got into my hands, I never knew how I
                    squandered it so fast without even saving a little. I got to
                    hear about Piggy vest and it's various services and right
                    now, I am totally enjoying this journey.
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Thursday, 6th of October 2022 by 11:42 AM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img6a9c68559e.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Tobenna A</H6>
                  <P>
                    Thanks to piggyvest I've saved enough money to start up a
                    really large business
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Wednesday, 5th of October 2022 by 03:08 AM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img2a4bd14305.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Michael F</H6>
                  <P>
                    I just joined tho and I believe piggyVest won't disappoint
                    me 😊❤️
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Thursday, 27th of October 2022 by 13:03 PM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img8a810f8584.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Rachael O</H6>
                  <P>
                    My name is Rachael Joseph and I am here to testify that
                    Piggyvest has helped me a lot. I had to spread the good news
                    to my friends and tell them about the app and behold they
                    are also using it. Thank you so much Pggyvest for saving me
                    cause I am the type of person that spends lavishly. Thank
                    you once again Piggyvest 💙
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Monday, 24th of October 2022 by 23:27 PM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img9c88f0d5d5.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Uchendu C</H6>
                  <P>
                    Whenever money got into my hands, I never knew how I
                    squandered it so fast without even saving a little. I got to
                    hear about Piggy vest and it's various services and right
                    now, I am totally enjoying this journey.
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Thursday, 6th of October 2022 by 11:42 AM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img6a9c68559e.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Tobenna A</H6>
                  <P>
                    Thanks to piggyvest I've saved enough money to start up a
                    really large business
                  </P>
                </div>
              </Flex>
            </Single>
            <Single>
              <Date>Wednesday, 5th of October 2022 by 03:08 AM</Date>
              <Flex className="center">
                <UserImg
                  src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img2a4bd14305.jpeg"
                  alt="img"
                />
                <div>
                  <H6>Michael F</H6>
                  <P>
                    I just joined tho and I believe piggyVest won't disappoint
                    me 😊❤️
                  </P>
                </div>
              </Flex>
            </Single>
          </Scroll>
        </ScrollContainer>
        <Other>
          <H1>4 Million + customers</H1>
          <P className="other-p">
            Since launching in 2016, over 4,000,000 people have used PiggyVest
            to manage their money better, avoid over-spending and be more
            accountable.
          </P>
          <OtherButton>Create free account</OtherButton>
          <Links>
            <ButtonLink>
              <IconImg src={Apple} alt="apple" />
              <P>Get on iPhone</P>
            </ButtonLink>
            <ButtonLink>
              <IconImg src={Google} alt="google" />
              <P>Get on Android</P>
            </ButtonLink>
          </Links>
        </Other>
      </Customer>
      <Featured>
        <H1>As featured in</H1>
        <Icons>
          <img src={TechPoint} height="34px" alt="gg" />
          <img src={Guardian} height="34px" alt="gg" />
          <img src={Techcrunch} height="34px" alt="gg" />
        </Icons>
      </Featured>
    </SecurityContainer>
  );
}
