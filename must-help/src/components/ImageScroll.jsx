import React from "react";
import styled, { keyframes, css } from "styled-components";
import Feedhomeless from "../assets/Feedhomelesskid.jpeg";
import Slider_image1 from "../assets/Slider_image1.jpg"
import Slider_image2 from "../assets/Slider_image2.jpg"
import Slider_image3 from "../assets/Slider_image3.jpeg"
import Slider_image4 from "../assets/Slider_image4.jpeg"
import Eduationkit from "../assets/educationkit.png";
import Milkandbanana from "../assets/milkandbanana.jpeg";

const ImageScroll = () => {
    const row1 = [
      Feedhomeless,
      Slider_image2,
      Slider_image3,
      Slider_image4,
      Slider_image1,
      Eduationkit,
      Milkandbanana,
      ];
  
    return (
        <AppContainer>
        <Wrapper>
          <Text>With Great Outcomes.</Text>
          <Note>Our customers have gotten offers from awesome companies.</Note>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        
        </Wrapper>
      </AppContainer>
    );
}

export default ImageScroll
const AppContainer = styled.div`
 background-color: #fef7e5;  
 padding-top:50px;
 padding-bottom 50px
width: 100%;
  height: 341px;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:40px;
   @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    height: 250px;
    margin-bottom: 3px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height:100%
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;

   @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;

   @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
    text-align:center; 
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
text-align:center;    

  }
`;

const Marquee = styled.div`
  display: flex;
  width: 1350px;
  overflow: hidden;
  user-select: none;
height:80%;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 60%;
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
  height: 100%;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width:100%;
  margin:3px;
  height:100%;
  border-radius: 0.5rem;
  
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

   @media (max-width: 768px) {
    padding: 5px 45px;
     box-shadow: none;
     margin:14px;
  }

  
`;
