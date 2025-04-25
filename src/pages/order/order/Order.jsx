import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OrderImg from "../../../assets/shop/banner2.jpg"
import Cover from '../../shared/cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);

    const [menu] = useMenu();
  
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    

    return (
        <div>
            <Helmet>
                <title>Bistro || Order food</title>
            </Helmet>
            <Cover img={OrderImg} title={'OUR SHOP'}></Cover>
            <div className=''>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >

                        <Tab>salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        
                        <Tab>Drinks</Tab>
                       
                    </TabList>
                    <TabPanel>
                            <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={pizza}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={dessert}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;