import React, { useState, useEffect } from "react";
import ShopImg from './Images/Shop.png';
import ShopBlur from './Images/ShopBlur.png';
import back from './Images/back.png';
import './Shop.scss';
import Collapse from 'react-bootstrap/Collapse';
import fortytwo from './Images/fortytwo.png';
import items from './ShopItems.json';
import img1 from './Images/shopimg1.png';
import img2 from './Images/shopimg2.png';
import img3 from './Images/shopimg3.png';
import OrderNowLogo from './Images/OrderLogo.png';
import swipe from './Images/swipe.png';
import Success from './Images/tick.png';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Shop() {

    const [readmore, setReadmore] = useState([]);
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [navHighlight, setnavHighlight] = useState('BestsellerId');
    const [TotalItem, setTotalItem] = useState(0);
    const [pay, setPay] = useState(false);    
    const [headingScroll, setheadingScroll] = useState(false);
    const [Ordernow, setOrdernow] = useState(0);
    let flagChecking = (index, parentindex) => {
        var ans = false;
        readmore.forEach((number, ele) => {
            if (number.parent === parentindex && number.child === index) {
                ans = number.flag;
            }
        })
        return ans;
    }

    let cartChecking = (index, parentindex) => {
        let item = 0;
        cart.forEach((number, ele) => {
            if (number.parent === parentindex && number.child === index) {
                item = number.item;
            }
        });
        return item;
    }

    let getOrder = () => {
        var sum = 0;
        var itemLength=0;
        cart.forEach((number) => {
            if(number.item!==0){
                sum += number.item * number.price;
                itemLength++;
            }
        });
        setAmount(sum);
        setTotalItem(itemLength);
    }

    let addCart = (index, parentindex, price, item, e) => {
        var localflag = false;
        cart.forEach((number, ele) => {
            if (number.parent === parentindex && number.child === index) {
                localflag = true;
                cart[ele].item = number.item + 1;
                setCart([...cart]);
            }
        });
        if (localflag === false)
            setCart([...cart,
                {
                parent: parentindex,
                child: index,
                price: price,
                item: item
            }]);
        getOrder();
    }
    let subCart = (index, parentindex, price, item, e) => {
        var localflag = false;
        cart.forEach((number, ele) => {
            if (number.parent === parentindex && number.child === index) {
                localflag = true;
                cart[ele].item = number.item - 1;
                setCart([...cart]);
            }
        });
        if (localflag === false)
            setCart([...cart,
            {
                parent: parentindex,
                child: index,
                price: price,
                item: item
            }]);
        getOrder();
    }
    

    useEffect(() => {
        getOrder();
        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY;
            let mainNavLinks = document.querySelectorAll(".types .col-md-3 a");
            let mainSections = document.querySelectorAll(".CategoryMainSection section");
            mainNavLinks.forEach(link => {
              let section = document.querySelector(link.hash);
              if (section!=null &&section.offsetTop!==null && section.offsetTop <= fromTop+60 && section.offsetTop + section.offsetHeight > fromTop+60) {
                link.classList.add("current");
                setnavHighlight(link.id);
              } else {
                link.classList.remove("current");
              }
            });
          });
        window.addEventListener('scroll', fixHeader);
    }, [cart, TotalItem, amount, readmore, getOrder]);

    let countFunc = (index, parentindex) => {
        var localflag = false;
        readmore.forEach((number, ele) => {
            if (number.parent === parentindex && number.child === index) {
                localflag = true;
                if (number.flag === true) {
                    readmore[ele].flag = false;
                    setReadmore([...readmore]);
                } else {
                    // setReadmore([{
                    //     parent: parentindex,
                    //     child: index,
                    //     flag: true
                    // }, ...readmore]);
                    
                    readmore[ele].flag = true;
                    setReadmore([...readmore]);
                }
            }

        });
        if (localflag === false)
            setReadmore([...readmore,
            {
                parent: parentindex,
                child: index,
                flag: true
            }]);

    }


    let renderList = (value, index, parentindex) => {
        return (
            <div>
            <div class="row">
                <div class="col col-md-8">
                    <div class="subheading">
                        {value.subheading}
                    </div>
                    <div class="menu">
                        {value.menu}
                    </div>
                    <div class="price">
                        ₹{value.price}
                    </div>
                    <div class={flagChecking(index, parentindex) === true ?"content-collapse":"content"}>
                        {flagChecking(index, parentindex) === true ? value.morecontent : value.content}
                        <a onClick={() => countFunc(index, parentindex)}>
                            {flagChecking(index, parentindex) === true ? value.less : value.more}
                        </a>
                    </div>
                </div>
                <div class="col col-md-4">
                    <div class="photo">
                        {index === 0 ? <img src={img1} alt="icon" /> : index === 1 ? <img src={img2} alt="icon" /> : <img src={img3} alt="icon" />}

                    </div>
                    <div class="add">
                        <button >
                            {cartChecking(index, parentindex) === 0 ? <a onClick={() => {
                            addCart(index, parentindex, value.price, 1); 
                            }}> + ADD </a> :
                                <span>
                                    <a onClick={() => subCart(index, parentindex, value.price, 1)}>   - </a>
                                    {cartChecking(index, parentindex)}
                                    <a onClick={() => addCart(index, parentindex, value.price, 1)}>   + </a></span>}
                        </button>
                    </div>
                </div>
            </div>
            <div class="lineCard"></div>
            </div>
        );
    };

    let renderCard = (value, index) => {
        return (
            <section id={value.headingId}>
                <div class="heading">
                    {value.heading}
                </div>

                {value.list.map((element, childindex) => {
                    return renderList(element, childindex, index);
                })}
            </section>
        );
    };
    function handleOnDragEnd(result, e) {
        setPay(true);
    }
    const fixHeader = () => {
        if(window.scrollY >= 80)
            setheadingScroll(true);
        else 
            setheadingScroll(false);
    }


    return (
        <div class="ShopContent">
            <div class={headingScroll ? "FixedImage" :"Image"}>
                {headingScroll ? 
                <div>
                    <img src={ShopBlur} alt="Shop" />
                    <div class="row">
                        <div class="col col-md-2">
                            <a href="/">
                            <img id="back" src={back} alt="back"/>
                            </a>
                        </div>
                        <div class="col col-md-10">
                            <div class="name">
                                Behrouz Briyani
                            </div>
                            <div class="menu">
                                Biriyani Kebab, Mughlai
                            </div>
                        </div>
                    </div>
                    <div class="categoryHeading">
                        <nav class="types">
                    <div class="row">
                        <div class="col col-md-3" >
                            <a 
                            id="BestsellerId" 
                            href="#Bestsellers" 
                            // onClick={() => {
                            //     setHeadingColor('BestSellersId');
                            //     }}
                                >
                                Bestsellers
                                </a>
                                {navHighlight ==='BestsellerId' ? <div class="navHighlightLine"></div> : ''}                                
                        </div>
                        <div class="col col-md-3" >
                            <a 
                            id="RecommendedId"
                             href="#Recommended" 
                            // onClick={() => {
                            //     setHeadingColor('RecommendedId');
                            // }}
                            >Recommended</a>
                            {navHighlight ==='RecommendedId' ? <div class="navHighlightLine"></div> : ''}
                        </div>
                        <div class="col col-md-3" >
                            <a 
                            id="ValueCombosId"
                             href="#ValueCombos" 
                            // onClick={() => {
                            //     setHeadingColor('Value CombosId');
                            // }}
                            >Value Combos</a>
                            {navHighlight ==='ValueCombosId' ? <div class="navHighlightLine"></div> : ''}
                        </div>
                        <div class="col col-md-3">
                            <a 
                            id="FamilyPackId"
                             href="#FamilyPack" 
                        //     onClick={() => {
                        //         setHeadingColor('Family PackId');
                        // }}
                        >Family Pack</a>
                        {navHighlight ==='FamilyPackId' ? <div class="navHighlightLine"></div> : ''}
                        </div>
                    </div>
                    <div class="lineBlur"></div>
                    </nav>
                </div>
                </div>
                :<img src={ShopImg} alt="Shop" />}
            </div>
            <div class={headingScroll ?"menu-content-scroll" : "menu-content"}>
                <div class={headingScroll ? "row Shop-name-scroll" :"row Shop-name"}>
                    <div class="col shop col-md-6">
                        <div class="name">
                            Behrouz Biriyani
                        </div>
                        <div class="menu">
                            Biriyani Kebab, Mughlai
                        </div>
                    </div>
                    <div class="col review col-md-6">
                        <div class="rating">
                            <img src={fortytwo} alt="rating" />
                        </div>
                        <div class="price">
                            ₹ 600 for two
                        </div>
                    </div>
                </div>
                <div class={headingScroll ? "row types-scroll" :"row types"}>
                    <div class="col col-md-3" >
                        <a id="BestsellersId"
                        //  id="BestsellersId"
                          href="#Bestsellers" 
                        // onClick={() => {
                        //     setHeadingColor('BestSellersId');
                        //     }}
                            >
                            Bestsellers
                            </a>
                    </div>
                    <div class="col col-md-3" >
                        <a 
                        // id="RecommendedId"
                         href="#Recommended" 
                        // onClick={() => {
                        //     setHeadingColor('RecommendedId');
                        // }}
                        >Recommended</a>
                    </div>
                    <div class="col col-md-3" >
                        <a 
                        // id="ValueCombosId" 
                        href="#Value_Combos" 
                        // onClick={() => {
                        //     setHeadingColor('Value CombosId');
                        // }}
                        >Value Combos</a>
                    </div>
                    <div class="col col-md-3">
                        <a
                        //  id="FamilyPackId"
                          href="#Family_Pack" 
                    //     onClick={() => {
                    //         setHeadingColor('Family PackId');
                    // }}
                    >Family Pack</a>
                    </div>
                </div>
                <div class="BestsellerLine"></div>
                <div class="line"></div>
                <div class="CategoryMainSection">
                    {items.map((element, index) => {
                        return renderCard(element, index);
                    })}
                </div>
            </div>
            
            {(cart.length === 0) ? '' :
                Ordernow ?
                    <div class="OrderNowFooter">
                        <div class="row">
                            <div class="col col-md-10">
                                <div class="logo">
                                    {pay ? <img src={Success} alt="SuccessLogo" /> : <img src={OrderNowLogo} alt="Behrouz Briyani Logo" />}
                                </div>
                                <div class="name">
                                    Behrouz Briyani
                        </div>
                                <div class="account">
                                    Acc No: 1234567
                        </div>
                                <div class="amount">
                                    ₹ {amount}
                                </div>
                            </div>
                            {pay? '' :
                            <div class="col col-md-2">
                                <a onClick={() => setOrdernow(false)}> CANCEL</a>
                            </div>
                            }
                        </div>
                        {pay ?
                            <div>
                                <button onClick={ () => {setPay(false);
                                setCart([]);
                                }} ><a href="/">Go to Home</a></button>
                            </div>
                            : <div>
                                <DragDropContext onDragEnd={handleOnDragEnd}>
                                    <Droppable droppableId="direction">
                                        {(provided) => (
                                            <button {...provided.droppableprops} ref={provided.innerRef}>
                                                <Draggable draggableId="right" index={1}>
                                                    {(provided) => (
                                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <img src={swipe} alt="swipe" />
                                                        </div>
                                                    )}
                                                </Draggable>
                                                {provided.placeholder}
                                                <span>Swipe to Pay</span>
                                            </button>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </div>}

                    </div> :
                    (TotalItem === 0 || amount===0) ? '':
                    <div class="footer">
                        <div class="row">
                            <div class="col col-md-6"> {TotalItem } Item | ₹ {amount}</div>
                            <div class="col col-md-6">
                                <a onClick={() => setOrdernow(true)}>Order Now</a>
                            </div>
                        </div>
                    </div>
                    }


        </div>
    );
}

export default Shop;