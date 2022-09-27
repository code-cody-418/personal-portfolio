import React, { useEffect, useState } from "react";
import { Menu } from "../../shared/menu/Menu";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import goku from "../../../images/goku-trainer.png";
import naruto from "../../../images/naruto.png";
import kakashi from "../../../images/kakashi-01.png";
import korra from "../../../images/korra-trainer.png";
import trainInsaiyan from "../../../images/train-insaiyan.jpg";
import "../../styles.css";
import AnimationScene from "./AnimationScene";
import { moves } from "../../shared/interfaces/moves";
import { names } from "../../shared/interfaces/names";
import { DisplayAction } from "./DisplayAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileByProfileId } from "../../../store/profileSlice";
import { useJwtToken } from "../../shared/utils/useJwtToken";
import { ProfileInfo } from "../../shared/profile/ProfileInfo";
import { settingName } from "../../../store/nameSlice";
import { settingKakashiMove } from "../../../store/trainer-Slices/kakashiSlice";
import { settingGokuMove } from "../../../store/trainer-Slices/gokuSlice";
import { settingNarutoMove } from "../../../store/trainer-Slices/narutoSlice";
import { settingKorraMove } from "../../../store/trainer-Slices/korraSlice";
import { SelectCharacterButtons } from "./SelectCharacterButtons";
import { VideoPlayer } from "./VideoPlayer";
import { settingVideoFinishedModal } from "../../../store/VideoFinishedModalSlice";
import { EventParticipationInfo } from "./EventParticipationInfo";
import { fetchParticipation } from "../../../store/eventParticipationSlices/participationSlice";

export const Home = () => {
  //redux dispatch to manage the state of the trainer name, move and video play
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name.setName);
  const videoPlay = useSelector((state) => state.videoPlay.setVideoPlay);
  const kakashiAction = useSelector((state) => state.kakashiMove.setMove);
  const korraAction = useSelector((state) => state.korraMove.setMove);
  const gokuAction = useSelector((state) => state.gokuMove.setMove);
  const narutoAction = useSelector((state) => state.narutoMove.setMove);
  const thirtySeconds = useSelector(
    (state) => state.thirtySecondTimer.setThirtySecondsTimer
  );
  const videoFinished = useSelector(
    (state) => state.videoFinishedModal.setVideoFinishedModal
  );
  const participation = useSelector((state) =>
    state.participation ? state.participation : null
  );

  //redux functionality to get profile data
  const { authenticatedUser } = useJwtToken();

  const sideEffects = () => {
    if (authenticatedUser?.profileId) {
      dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
      dispatch(fetchParticipation(authenticatedUser.profileId));
    }
    // dispatch(fetchAuth());
  };

  useEffect(sideEffects, [authenticatedUser, dispatch]);

  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) =>
    state.profile ? state.profile : null
  );

  //adds hover cursor to character select
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  //sets up modal for when video is completed
  const handleClose = () => {
    dispatch(settingVideoFinishedModal(false));
    dispatch(settingKakashiMove(moves.celebration));
    dispatch(settingNarutoMove(moves.celebration));
    dispatch(settingKorraMove(moves.celebration));
    dispatch(settingGokuMove(moves.celebration));
  };

  //menu modal
  const [show, setShow] = useState(false);

  const handleMenuClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // array of youtube videos
  // const youTubePlaylists = [
  //     'https://www.youtube.com/embed/3ZHwkpyvDqE',
  //     'https://www.youtube.com/embed/4zHK8pRl78o',
  //     'https://www.youtube.com/embed/dY09rc_8-Rc'
  // ]
  //_____________________________________________________________________________________________________________________
  return (
    <>
      <Modal show={videoFinished} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Great Job Training!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={trainInsaiyan} alt="training " />
        </Modal.Body>
        <Modal.Footer>
          {auth ? (
            <Button
              variant="secondary"
              onClick={() => {
                handleClose();
              }}
            >
              COLLECT REWARDS
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                handleClose();
              }}
            >
              Great Job!!!
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <Container fluid={true}>
        <Row>
          <Menu profile={profile} />
        </Row>
        <Row>
          <h1 className="trainerTitle text-center">Trainers</h1>
        </Row>
        <Row className="mb-5">
          <Col>
            <img
              src={goku}
              alt="Goku training"
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() => {
                dispatch(settingName(names.goku));
                dispatch(settingGokuMove(moves.idle));
              }}
              className="rounded-circle border border-dark mx-auto d-block"
              width="125"
              height="125"
            />
          </Col>
          <Col>
            <img
              src={naruto}
              alt="Naruto training"
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() => {
                dispatch(settingName(names.naruto));
                dispatch(settingNarutoMove(moves.idle));
              }}
              className="rounded-circle border border-dark mx-auto d-block"
              width="125"
              height="125"
            />
          </Col>
          <Col>
            <img
              src={kakashi}
              alt="Kakashi training"
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() => {
                dispatch(settingName(names.kakashi));
                dispatch(settingKakashiMove(moves.idle));
              }}
              className="rounded-circle border border-dark mx-auto d-block"
              width="125"
              height="125"
            />
          </Col>
          <Col>
            <img
              src={korra}
              alt="Korra training"
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() => {
                dispatch(settingName(names.korra));
                dispatch(settingKorraMove(moves.idle));
              }}
              className="rounded-circle border border-dark mx-auto d-block"
              width="125"
              height="125"
            />
          </Col>
        </Row>
        <Row className="justify-content-center mb-3 align-items-center">
          <SelectCharacterButtons />
          <Col md={6} lg={4} className="canvasSize me-0 pe-0">
            <AnimationScene
              gokuAction={gokuAction}
              narutoAction={narutoAction}
              kakashiAction={kakashiAction}
              korraAction={korraAction}
              name={name}
            />
            <div className="underCanvas">
              <Button className="thirtySecondTimerButton mt-0">
                {thirtySeconds}
              </Button>
              <DisplayAction
                gokuAction={gokuAction}
                narutoAction={narutoAction}
                kakashiAction={kakashiAction}
                korraAction={korraAction}
                name={name}
              />
            </div>
          </Col>
          <Col lg={4} className="ms-0 ps-0 removeTop">
            <VideoPlayer profile={profile} />
            <div className="underCanvas" onClick={() => setShow(true)}>
              <ProfileInfo
                profile={profile}
                videoPlay={videoPlay}
                participation={participation}
              />
            </div>
            <EventParticipationInfo
              profile={profile}
              participation={participation}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
