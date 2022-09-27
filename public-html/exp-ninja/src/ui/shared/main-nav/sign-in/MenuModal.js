import React, { Suspense, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Carousel,
  Dropdown,
} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { SignInForm } from "./SignInForm";
import "./menuStyle.css";
import { ProfileInfo } from "../../profile/ProfileInfo";
import { SignOut } from "../sign-out/SignOut";
import { SignUpModal } from "../sign-up/SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import { EventParticipationInfo } from "../../../pages/home/EventParticipationInfo";
import { Canvas } from "@react-three/fiber";
import ChristmasHat01 from "../../../../3D-Models/event-models/Christmas-hat-01";
import ChristmasPresent from "../../../../3D-Models/event-models/Christmas-present";
import SnowFlakes02 from "../../../../3D-Models/event-models/Snow-flakes-02";
import { httpConfig } from "../../utils/http-config";
import { fetchParticipation } from "../../../../store/eventParticipationSlices/participationSlice";
import { fetchProfileByProfileId } from "../../../../store/profileSlice";
import Coins from "../../../../3D-Models/Coins";
import ChristmasTree from "../../../../3D-Models/event-models/Christmas-tree";
import christmasSound from "../../../../sounds/christmas-happy-music.wav";

export const MenuModal = ({
  handleClose,
  show,
  auth,
  profile,
  participation,
}) => {
  const dispatch = useDispatch();

  //shows coins when clicked
  const [showCoins, setShowCoins] = useState(false);
  const [presentOpened, setPresentOpened] = useState(false);

  //this function updates participationCompleted
  const updateParticipationCoinsReward = () => {
    if (profile === null) {
    } else if (
      profile != null &&
      participation.participationCompleted === 1 &&
      participation.participationCoinReward === 0
    ) {
      httpConfig
        .put("/apis/participation/updateParticipationCoins")
        .then((reply) => {
          if (reply.status === 200) {
            setPlayingParticipationCompletedAudio(true);
            setPresentOpened(true);
            setShowCoins(true);
            dispatch(fetchParticipation(profile.profileId));
            dispatch(fetchProfileByProfileId(profile.profileId));
          }
        });
    }
  };

  //participation completed sound
  const [audioParticipationCompleted] = useState(new Audio(christmasSound));
  const [
    playingParticipationCompletedAudio,
    setPlayingParticipationCompletedAudio,
  ] = useState(false);

  useEffect(() => {
    playingParticipationCompletedAudio
      ? audioParticipationCompleted.play()
      : audioParticipationCompleted.pause();
  }, [playingParticipationCompletedAudio]);

  //logic to determine if present shows when event is completed
  const [presentVisible, setPresentVisible] = useState(false);
  const [treeVisible, setTreeVisible] = useState(false);

  useEffect(() => {
    if (participation === null) {
    } else {
      if (presentOpened === true) {
        setPresentVisible(false);
        setTreeVisible(false);
      } else if (
        participation.participationCompleted === 1 &&
        participation.participationCoinReward === 1
      ) {
        setPresentVisible(false);
        setTreeVisible(true);
      } else if (participation.participationCompleted === 1) {
        setPresentVisible(true);
        setTreeVisible(false);
      } else {
        setPresentVisible(false);
        setTreeVisible(true);
      }
    }
  }, [participation, presentOpened]);

  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="menu-modal"
        aria-labelledby="example-custom-modal-styling-title"
        className="mainModal"
        // fullscreen={true}
      >
        <Modal.Body className="show-grid menuBackground border border-5 border-white rounded">
          <Container fluid>
            <Row className="websiteName align-items-center text-xl-center">
              <Col>
                <h2 className="menuTitleAnimation ">EXP NINJA</h2>
              </Col>
            </Row>
            {auth ? (
              <div className="menuSelection">
                <Button className="inMenuButton border-0" size="lg" href="/">
                  Home
                </Button>
                <Button
                  className="inMenuButton border-0"
                  size="lg"
                  href="/profile"
                >
                  Profile
                </Button>
                <Button
                  className="inMenuButton border-0"
                  size="lg"
                  href="/shop"
                >
                  Shop
                </Button>
                <Button
                  className="inMenuButton border-0"
                  size="lg"
                  href="/credit"
                >
                  Credits
                </Button>
                <Button
                  className="inMenuButton border-0"
                  size="lg"
                  onClick={handleClose}
                >
                  Close Menu
                </Button>
              </div>
            ) : (
              <div className="menuSelection">
                <Button
                  className="inMenuButton border-0"
                  size="lg"
                  href="/credit"
                >
                  Credits
                </Button>
                <Button
                  className="inMenuButton border-0"
                  size="lg"
                  onClick={handleClose}
                >
                  Close Menu
                </Button>
              </div>
            )}

            <Row>
              {auth ? (
                <>
                  <Col sm={4}>
                    <ProfileInfo
                      profile={profile}
                      participation={participation}
                    />
                    <SignOut />
                  </Col>
                  <Col sm={3}>
                    <EventParticipationInfo
                      participation={participation}
                      profile={profile}
                    />

                    <div className="eventCanvas">
                      <Canvas
                        camera={{ position: [0, 15, 25], fov: 55 }}
                        resize={0.5}
                        onCreated={({ camera }) => camera.lookAt(0, -15, -35)}
                      >
                        {/*<OrbitControls />*/}

                        {/*<ambientLight intensity={1}/>*/}

                        <directionalLight
                          castShadow
                          position={[0, 15, 25]}
                          intensity={1}
                          shadow-mapSize-width={1024}
                          shadow-mapSize-height={1024}
                          shadow-camera-far={100}
                          shadow-camera-left={-50}
                          shadow-camera-right={50}
                          shadow-camera-top={50}
                          shadow-camera-bottom={-50}
                        />
                        <pointLight position={[-10, 0, -20]} intensity={0.5} />
                        <pointLight position={[0, 0, 0]} intensity={1.5} />

                        <Suspense fallback={null}>
                          <group
                            onClick={() => {
                              updateParticipationCoinsReward();
                            }}
                            visible={presentVisible}
                            onPointerOver={() => setHovered(true)}
                            onPointerOut={() => setHovered(false)}
                          >
                            <ChristmasPresent
                              presentOpened={presentOpened}
                              participation={participation}
                              profile={profile}
                            />
                          </group>

                          <Coins
                            coinsAnimate={"animeCoinsTwo"}
                            showCoins={showCoins}
                            participation={participation}
                          />
                          <Coins
                            coinsAnimate={"animeCoinsThree"}
                            showCoins={showCoins}
                            participation={participation}
                          />

                            {/* Christmas event */}
                          {/* <group scale={3} position={[0, -5, -5]} rotation={[0, -1.57, 0]}
                                                           visible={treeVisible}>
                                                        <ChristmasTree/>
                                                    </group> */}

                          {/* <group position={[3, 5, -3]}>
                                                        <ChristmasHat01 showCoins={showCoins}/>
                                                    </group> */}
                          {/* <group position={[0, -10, 0]}>
                                                        <SnowFlakes02 snow={"snowFallingSeven"}/>
                                                        <SnowFlakes02 snow={"snowFallingEight"}/>
                                                        <SnowFlakes02 snow={"snowFallingNine"}/>
                                                    </group> */}
                        </Suspense>
                      </Canvas>
                    </div>
                  </Col>
                  {/*<Col sm={3}>*/}
                  {/*<Carousel fade nextLabel="" prevLabel="">*/}
                  {/*    <Carousel.Item>*/}
                  {/*        <img*/}
                  {/*            className="d-block w-100"*/}
                  {/*            src={comingSoon}*/}
                  {/*            alt="First slide"*/}
                  {/*            width="350"*/}
                  {/*            height="250"*/}
                  {/*        />*/}
                  {/*    </Carousel.Item>*/}
                  {/*    <Carousel.Item>*/}
                  {/*        <img*/}
                  {/*            className="d-block w-100"*/}
                  {/*            src={comingSoonTwo}*/}
                  {/*            alt="Second slide"*/}
                  {/*            width="350"*/}
                  {/*            height="250"*/}
                  {/*        />*/}
                  {/*    </Carousel.Item>*/}
                  {/*<Carousel.Item>*/}
                  {/*    <img*/}
                  {/*        className="d-block w-100"*/}
                  {/*        src={comingSoon}*/}
                  {/*        alt="Third slide"*/}
                  {/*        width="350"*/}
                  {/*        height="250"*/}

                  {/*    />*/}
                  {/*</Carousel.Item>*/}
                  {/*</Carousel>*/}
                  {/*</Col>*/}
                </>
              ) : (
                <>
                  <Col md={4} className="mb-2">
                    <SignInForm />
                    <SignUpModal />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
