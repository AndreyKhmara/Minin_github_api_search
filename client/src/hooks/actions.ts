import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { githubApictions } from '../store/github/github.slice'

const actions = {
    ...githubApictions
}

export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)

}