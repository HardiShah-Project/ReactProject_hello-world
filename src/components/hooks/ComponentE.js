import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../Demo';
function ComponentE() {
    //  const user = useContext(UserContext)
    //  const channel = useContext(ChannelContext)
    return (
        <div>
            {/* {user}-{channel} */}
             <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>channel context value {channel},user context value {user}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div> 
    )
}
export default ComponentE