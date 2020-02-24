import React from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import { Slider } from "infinite-react-carousel";
import styled from "styled-components";
import dog1 from "../images/shepherd1.jpg";
import dog2 from "../images/dog2.jpg";
import cat2 from "../images/cat2.jpg";
import monkey1 from "../images/monkey1.jpg";

const FrontPage = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <div>
      <Parent>
        <div className='child-one'>
          {/* <Category /> */}
          <Menu vertical style={{ width: "90%" }}>
            <Menu.Item>
              <h1>Categories</h1>
            </Menu.Item>
            <Dropdown style={{ fontSize: "1.2em" }} item text='Dogs'>
              <Dropdown.Menu style={{ width: "130%" }}>
                <Dropdown.Item>German Shepherd</Dropdown.Item>
                <Dropdown.Item>Bulldog</Dropdown.Item>
                <Dropdown.Item>Mountain Dog</Dropdown.Item>
                <Dropdown.Item>Terrier</Dropdown.Item>
                <Dropdown.Item>Chihuahua</Dropdown.Item>
                <Dropdown.Item>Pitbull</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ fontSize: "1.2em" }} item text='Cats'>
              <Dropdown.Menu style={{ width: "130%" }}>
                <Dropdown.Item>American Bobtail Cat</Dropdown.Item>
                <Dropdown.Item>American Shorthair Cat</Dropdown.Item>
                <Dropdown.Item>Birman Cat</Dropdown.Item>
                <Dropdown.Item>Manx Cat</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ fontSize: "1.2em" }} item text='Birds'>
              <Dropdown.Menu style={{ width: "130%" }}>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Pidgin</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ fontSize: "1.2em" }} item text='Rabbits'>
              <Dropdown.Menu style={{ width: "130%" }}>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Pidgin</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ fontSize: "1.2em" }} item text='Monkeys'>
              <Dropdown.Menu style={{ width: "130%" }}>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Pidgin</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
        {/* <div> */}
        <div className='child-two'>
          <div className='overlay'>
            <h1>Shop For Your Favorite Pet</h1>
            <div className='shop'>
              <Button>
                <span>Shop Now</span>
              </Button>
            </div>
          </div>
          <Slider style={{ position: "relative", height: '100%' }} {...settings}>
            <div>
              <img src={dog1} alt={dog1} width='100%' height='509vh' />
            </div>
            <div>
              <img src={dog2} alt={dog2} width='100%' height='509vh' />
            </div>
            <div>
              <img src={cat2} alt={cat2} width='100%' height='509vh' />
            </div>
            <div>
              <img src={monkey1} alt={monkey1} width='100%' height='509vh' />
            </div>
          </Slider>
        </div>
        {/* </div> */}
      </Parent>
    </div>
  );
};

const Parent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 0 10%;
  height: 70vh;
  .child-one {
    ul {
      list-style: none;
      padding: 1% 5%;
      li {
        color: #eee;
        border-bottom: 1px solid #bbb;
        padding: 5% 0;
        font-size: 1.3em;
        cursor: pointer;
        .fas {
          color: teal;
          font-size: 1.5rem;
          padding: 0 1.5rem;
        }
      }
    }
  }
  .child-two {
    color: orangered;
    position: relative;
    .overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #222222a9;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 3;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

//  const Category = () => {
//    return (
//      <div style={{ width: "100%" }}>
//       <Menu vertical style={{ width: "90%" }}>
//         <Menu.Item href='//google.com' target='_blank'>
//           <h1>Categories</h1>
//         </Menu.Item>
//         <Menu.Item link>
//           <Dropdown style={{ fontSize: "1.2em" }} item text={state.name}>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => handleClick("English")}>
//                 English
//               </Dropdown.Item>
//               <Dropdown.Item onClick={() => handleClick("Pidgin")}>
//                 Pidgin
//               </Dropdown.Item>
//               <Dropdown.Item onClick={() => handleClick("Spanish")}>
//                 Spanish
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Menu.Item>
//         <Menu.Item link>Cats</Menu.Item>
//         <Menu.Item link>Birds</Menu.Item>
//         <Menu.Item link>Rabbits</Menu.Item>
//         <Menu.Item link>Monkeys</Menu.Item>
//       </Menu>
//      </div>
//    );
//  };

export default FrontPage;
