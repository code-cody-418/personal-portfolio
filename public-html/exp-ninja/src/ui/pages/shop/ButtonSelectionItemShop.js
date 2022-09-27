import React, {useEffect, useState} from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {httpConfig} from "../../shared/utils/http-config";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {useDispatch} from "react-redux";
import {Modal} from "react-bootstrap";
import {fetchItemShopByProfileId} from "../../../store/itemShop/itemShopSlice";
import tenDollarGiftCardImage from "../../../images/shop-images/tenDollarGiftCard.png"
import twentyDollarGiftCardImage from "../../../images/shop-images/CODVanguard.png"
import demonSlayerVideoGameImage from "../../../images/shop-images/demonSlayerVideoGame.png"
import "./shopStyle.css"
import twoCoins from "../../../images/two-coins.png"

//this determines which buttons to display based on whether an item has been purchased
export const ButtonSelectionItemShop = ({itemShop, profile}) => {

    const dispatch = useDispatch()

    //this sets the state of the cost for a selected item
    const [itemCost, setItemCost] = useState(null)

    //this is the object thats passed to the backend
    const itemCostObject = {
        itemCost: itemCost
    }

    //this subtracts the coins needed to buy an item
    const coinDeduction = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`apis/profile/itemCost/${profile.profileId}`, itemCostObject)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchProfileByProfileId(profile.profileId))
                    }
                })
        }
    }


    //This is the functionality to set the state of a purchased item
    //These states will then be put into an object to be sent to backend
    const [itemShopProfileId, setItemShopProfileId] = useState(null)
    const [tenDollarGiftCard, setTenDollarGiftCard] = useState(false)
    const [twentyDollarGiftCard, setTwentyDollarGiftCard] = useState(false)
    const [demonSlayerGame, setDemonSlayerGame] = useState(false)
    const [tenDollarGiftCardPurchased, setTenDollarGiftCardPurchased] = useState(0)
    const [twentyDollarGiftCardPurchased, setTwentyDollarGiftCardPurchased] = useState(0)
    const [demonSlayerGamePurchased, setDemonSlayerGamePurchased] = useState(0)

    useEffect(() => {
        if (profile === null) {
        } else if (profile != null) {
            setItemShopProfileId(profile.profileId)
        }
    }, [profile])

    //this sets the local state to be consistent with the backend
    useEffect(() => {
        if (itemShop === null) {
        } else if (itemShop != null) {
            if (tenDollarGiftCardPurchased === 0) setTenDollarGiftCardPurchased(itemShop.itemShopTenDollarGiftCard)
            if (twentyDollarGiftCardPurchased === 0) setTwentyDollarGiftCardPurchased(itemShop.itemShopTwentyDollarGiftCard)
            if (demonSlayerGamePurchased === 0) setDemonSlayerGamePurchased(itemShop.itemShopDemonSlayerGame)
        }
    }, [itemShop])

    //this is object passed to backend to update database
    const newItemShop =
        {
            itemShopId: itemShopProfileId,
            itemShopTenDollarGiftCard: tenDollarGiftCardPurchased,
            itemShopTwentyDollarGiftCard: twentyDollarGiftCardPurchased,
            itemShopDemonSlayerGame: demonSlayerGamePurchased
        }

    //this changes the boolean value of an item to true meaning it has been purchased
    const purchaseItem = () => {
        console.log("purchase item has ran")
        if (itemShop === null) {
        } else if (itemShop != null) {
            httpConfig.put(`/apis/itemShop/updateItemShop/${itemShop.itemShopProfileId}`, newItemShop)
                .then(reply => {
                    if (reply.status === 200) {
                        console.log("purchaseItem worked")
                        dispatch(fetchItemShopByProfileId(profile.profileId))
                    }
                })
        }
    }

    const [itemPurchased, setItemPurchased] = useState(false)

    useEffect(purchaseItem, [itemPurchased])

    //this determines which item was clicked in the shop and sets purchased item to 1(true)
    const determineItemForPurchase = () => {
        if (tenDollarGiftCard === true) {
            setTenDollarGiftCardPurchased(1)
        } else if (twentyDollarGiftCard === true) {
            setTwentyDollarGiftCardPurchased(1)
        } else if (demonSlayerGame === true) {
            setDemonSlayerGamePurchased(1)
        }
    }

    //sets state for whether profile has enough coins to buy item
    const [purchaseStatus, setPurchaseStatus] = useState(false)

    //determines if profile has enough coins to buy item
    const enoughCoinsToPurchase = () => {
        if (tenDollarGiftCard === true && profile.profileCoins >= 8) {
            setPurchaseStatus(true)
        } else if (twentyDollarGiftCard === true && profile.profileCoins >= 25) {
            setPurchaseStatus(true)
        } else if (demonSlayerGame === true && profile.profileCoins >= 40) {
            setPurchaseStatus(true)
        } else setPurchaseStatus(false)
    }

    useEffect(enoughCoinsToPurchase, [tenDollarGiftCard, twentyDollarGiftCard, demonSlayerGame])

    //display not enough coins if purchase cant go through
    const [errorPurchase, setErrorPurchase] = useState(null)

    // console.log("ten dollar gift card purchased state", tenDollarGiftCardPurchased)

    console.log("new item shop", newItemShop)

    //sets state of all items to false when modal is closed
    const cancelPurchase = () => {
        setTenDollarGiftCard(false)
        setTwentyDollarGiftCard(false)
        setDemonSlayerGame(false)
        setItemPurchased(false)
        setPurchaseStatus(false)
        setErrorPurchase(null)
    }


    //modal logic for confirming purchase
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        cancelPurchase()
    };
    const handleShow = () => setShow(true);

    //adds hover cursor to character select
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])


//this is the logic that determines which buttons show. first it determines whether the profile has an itemShop.
// Second it determines if an item shop has been purchased by checking true or false(0 is false). Third it sets the
// coin cost of an item.
    if (itemShop === null) {
        return <></>
    } else if (itemShop != null) {
        return (
            <>
                <Col lg={4} className="mb-2">
                    {
                        (itemShop.itemShopTenDollarGiftCard === 0)
                            ?
                            <>
                                <Image
                                    src={tenDollarGiftCardImage}
                                    alt="Ten Dollar Gift Card"
                                    fluid
                                    rounded
                                    className="itemImage commonItemShadow"
                                    onClick={() => {
                                        setTenDollarGiftCard(true)
                                        setItemCost(8)
                                        handleShow()
                                    }}
                                    onPointerOver={() => setHovered(true)}
                                    onPointerOut={() => setHovered(false)}
                                />
                                <p className='coinText'>
                                    <img src={twoCoins} width={50} height={50} alt="Coins"/>
                                    8</p>
                            </>
                            : <></>
                    }
                </Col>
                <Col lg={4} className="mb-2">
                    {
                        (itemShop.itemShopTwentyDollarGiftCard === 0)
                            ?
                            <>
                                <Image
                                    src={twentyDollarGiftCardImage}
                                    alt="Twenty Dollar Gift Card"
                                    fluid
                                    rounded
                                    className="itemImage rareItemShadow"
                                    onClick={() => {
                                        setTwentyDollarGiftCard(true)
                                        setItemCost(25)
                                        handleShow()
                                    }}
                                    onPointerOver={() => setHovered(true)}
                                    onPointerOut={() => setHovered(false)}
                                />
                                <p className='coinText'>
                                    <img src={twoCoins} width={50} height={50} alt="Coins"/>
                                    25</p>
                            </>
                            : <></>
                    }
                </Col>
                <Col lg={4} className="mb-2">
                    {
                        (itemShop.itemShopDemonSlayerGame === 0)
                            ?
                            <>
                                <Image src={demonSlayerVideoGameImage}
                                       alt="Twenty Dollar Gift Card"
                                       fluid
                                       rounded
                                       className="itemImage epicItemShadow"
                                       onClick={() => {
                                           setDemonSlayerGame(true)
                                           setItemCost(40)
                                           handleShow()
                                       }}
                                       onPointerOver={() => setHovered(true)}
                                       onPointerOut={() => setHovered(false)}
                                />
                                <p className='coinText'>
                                    <img src={twoCoins} width={50} height={50} alt="Coins"/>
                                    40</p>
                            </>
                            : <></>
                    }
                </Col>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Shop</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your about to purchase this item!</Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                if (purchaseStatus === true) {
                                    determineItemForPurchase()
                                    coinDeduction()
                                    setItemPurchased(true)
                                } else if (purchaseStatus === false) {
                                    setErrorPurchase(true)
                                }
                            }}
                            variant={
                                (errorPurchase === true)
                                    ? "danger"
                                    : "primary"
                            }
                        >
                            {
                                (errorPurchase === true)
                                    ? <p>Not Enough Coins</p>
                                    : <p>Purchase</p>
                            }
                            {/*Purchase*/}
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                    {
                        (itemPurchased === true)
                            ? <p style={{color: "green"}}>Purchase Complete</p>
                            : <></>
                    }
                </Modal>
            </>
        )
    }
}
