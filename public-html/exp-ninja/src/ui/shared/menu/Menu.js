import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap";
import {MenuModal} from "../main-nav/sign-in/MenuModal";
import {fetchAuth} from "../../../store/authSlice";
import {useDispatch, useSelector} from "react-redux";
import "../main-nav/sign-in/menuStyle.css"
import {fetchParticipation} from "../../../store/eventParticipationSlices/participationSlice";
import {fetchProfileByProfileId} from "../../../store/profileSlice";

export const Menu = () => {

    const profile = useSelector(state => (
        state.profile
            ? state.profile
            : null
    ));
    const auth = useSelector(state => state.auth);
    const participation = useSelector((state) => state.participation ? state.participation : null)
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAuth());
        if (profile?.profileId) {
            dispatch(fetchParticipation(profile.profileId))
        }
    };
    const inputs = [profile];
    useEffect(effects, inputs);

    //menu modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button className="menuButtonAnimation menuButton border-0 text-lg-start" onClick={handleShow}>
                Menu
            </Button>
            <MenuModal show={show} handleClose={handleClose} handleShow={handleShow} auth={auth} profile={profile} participation={participation}/>
        </>
    )
}
