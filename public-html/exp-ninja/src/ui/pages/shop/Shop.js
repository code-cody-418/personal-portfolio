import React, {useEffect, useState} from "react";
import {Menu} from "../../shared/menu/Menu";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useJwtToken} from "../../shared/utils/useJwtToken";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {httpConfig} from "../../shared/utils/http-config";
import {fetchItemShopByProfileId} from "../../../store/itemShop/itemShopSlice";
import {ButtonSelectionItemShop} from "./ButtonSelectionItemShop";
import {ProfileInfo} from "../../shared/profile/ProfileInfo";


export const Shop = ({}) => {

    const dispatch = useDispatch()

//redux functionality to get profile data
    const {authenticatedUser} = useJwtToken();

    const sideEffects = () => {
        if (authenticatedUser?.profileId) {
            dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
            dispatch(fetchItemShopByProfileId(authenticatedUser.profileId))
        }
    }

    useEffect(sideEffects, [authenticatedUser, dispatch]);

    const profile = useSelector(state => (
        state.profile
            ? state.profile
            : null
    ));

    //gets the item shop
    const itemShop = useSelector(state => state.itemShop)

    //item shops are created when this function runs
    const createItemShop = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.post(`/apis/itemShop/`)
                .then(reply => {
                        if (reply.status === 200) {
                            dispatch(fetchItemShopByProfileId(profile.profileId))
                        }
                    }
                )
        }
    }

    const [profileLoginError, setProfileLoginError] = useState(false)

    const ProfileNewShop = () => {
        return (
            <>
                {
                    (itemShop === null)
                        ? (profile === null)
                        ?
                        <>
                            <Button variant={"danger"} onClick={() => setProfileLoginError(true)}>Please Login</Button>
                            {
                                (profileLoginError === true)
                                    ? <p className="alert-danger">Please Login to EnterShop</p>
                                    : <></>
                            }
                        </>
                        : <Button onClick={createItemShop}>Enter Shop</Button>
                        : <></>
                }
            </>
        )
    }

//only renders shop if a shop has been created and user is signed in
    return (
        <>
            <Container fluid>
                <Row>
                    <Menu profile={profile}/>
                </Row>
            </Container>
            <Container>
                <Row className="text-center mb-2">
                    <h1>The Shop</h1>
                </Row>

                <Row className="justify-content-start align-items-center">
                    <Col sm={4}>
                        <ProfileInfo profile={profile}/>
                    </Col>
                </Row>
                {
                    (profile !== null)
                        ? <h2 className=" text-nowrap instructions">Click Item to Buy</h2>
                        : <></>
                }
                <Row>
                    <ButtonSelectionItemShop itemShop={itemShop} profile={profile}/>
                </Row>
                <Row>
                    <ProfileNewShop/>
                </Row>
            </Container>
        </>
    )
}
