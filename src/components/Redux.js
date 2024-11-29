import React from 'react'
// import Index from './ReduxDemo/Index'
// import AsyncAction from './ReduxDemo/AsyncAction'
import { Provider } from 'react-redux'
import CakeContainer from './ReduxDemo/CakeContainer'
import store from '../redux/store'
import HooksCakeContainer from './ReduxDemo/HooksCakeContainer'
import IceCreamContainer from './ReduxDemo/IceCreamContainer'
import NewCakeContainer from './ReduxDemo/NewCakeContainer'
import ItemContainer from './ReduxDemo/ItemContainer'
import UserContainer from './ReduxDemo/UserContainer'

function Redux() {
    return (
        <Provider store={store}>
            <div className="Redux">
                {/* <CakeContainer />
                 <HooksCakeContainer/> 
                <IceCreamContainer />
                <NewCakeContainer />
                <ItemContainer cake/> */}
                <UserContainer/>
            </div>
        </Provider>
    )
}
export default Redux