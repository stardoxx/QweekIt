import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMicro } from '../redux/action/microAction';
const AddPostComponent = () => {

    // const posts = useSelector((state) => state.postBlog);
    // console.log(posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addMicro('hi this is a new post'));
        
    }, )

    return (
        <div>
            add post component.
            
        </div>
    )
}

export default AddPostComponent
