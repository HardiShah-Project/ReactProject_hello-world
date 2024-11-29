import {useEffect} from 'react'
function useDocumentTtile(count){
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])
}
export default  useDocumentTtile
