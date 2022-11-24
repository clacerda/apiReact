import React from 'react'
import axios from 'axios'


const ApiKey = '*';
const ApiKeySecret = '*';
const url = 'https://api.tvmaze.com/search/shows?q=star%20wars'
const HookCallApi = axios.create({
    baseURL: url
})
 

export default HookCallApi