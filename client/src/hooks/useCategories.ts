import { useEffect, useState } from 'react';
import { allCategories } from '../redux/apiCalls/category';
import { useDispatch } from 'react-redux';

export const useCategories = () => {
const [categories, setCategories] = useState([])
const dispatch = useDispatch()

useEffect(() => {
const getAllCategories = async() => {
    const res = await allCategories(dispatch)
    setCategories(res)
}
getAllCategories()
},[])


    return {
        categories
    }
}