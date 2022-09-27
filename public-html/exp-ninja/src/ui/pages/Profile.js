import React, {useEffect} from "react";
import {Menu} from "../shared/menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {useJwtToken} from "../shared/utils/useJwtToken";
import {fetchProfileByProfileId} from "../../store/profileSlice";
import {fetchItemShopByProfileId} from "../../store/itemShop/itemShopSlice";
import {ProfileInfo} from "../shared/profile/ProfileInfo";
import {Col, Container, Image, Row} from "react-bootstrap";
import tenDollarGiftCardImage from "../../images/shop-images/tenDollarGiftCard.png";
import twentyDollarGiftCardImage from "../../images/shop-images/twentyDollarGiftCard.png";
import demonSlayerVideoGameImage from "../../images/shop-images/demonSlayerVideoGame.png";


export const Profile = () => {
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

    console.log("item shop", itemShop)

    if (itemShop === null) {
        return <></>
    } else if (itemShop != null) {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Menu profile={profile}/>
                    </Row>
                </Container>

                <Container>
                    <Row className="text-center mb-2">
                        <h1>Profile</h1>
                    </Row>

                    <Row className="justify-content-start align-items-center">
                        <Col sm={4}>
                            <ProfileInfo profile={profile}/>
                        </Col>
                    </Row>
                    <Row className="text-center mb-2">
                        <h2>Purchased Items</h2>
                    </Row>
                    <Row>
                        <Col lg={4} className="mb-2">
                            {
                                (itemShop.itemShopTenDollarGiftCard === 1)
                                    ?
                                    <>
                                        <Image
                                            src={tenDollarGiftCardImage}
                                            alt="Ten Dollar Gift Card"
                                            fluid
                                            rounded
                                            className="itemImage commonItemShadow"
                                        />
                                    </>
                                    : <></>
                            }
                        </Col>
                        <Col lg={4} className="mb-2">
                            {
                                (itemShop.itemShopTwentyDollarGiftCard === 1)
                                    ?
                                    <>
                                        <Image
                                            src={twentyDollarGiftCardImage}
                                            alt="Twenty Dollar Gift Card"
                                            fluid
                                            rounded
                                            className="itemImage rareItemShadow"
                                        />
                                    </>
                                    : <></>
                            }
                        </Col>
                        <Col lg={4} className="mb-2">
                            {
                                (itemShop.itemShopDemonSlayerGame === 1)
                                    ?
                                    <>
                                        <Image src={demonSlayerVideoGameImage}
                                               alt="Twenty Dollar Gift Card"
                                               fluid
                                               rounded
                                               className="itemImage epicItemShadow"
                                        />
                                    </>
                                    : <></>
                            }
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}
