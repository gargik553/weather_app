import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';

const Joker = () => {
    const [joke,setjoke]= useState({setup:'',punchline:''});
    const URL='https://official-joke-api.appspot.com/jokes/random';
    useEffect(()=>{
        async function getFirstJoke(){
        const res=await fetch(URL);
        const jsonRes=await res.json();
        console.log(jsonRes)
        setjoke(jsonRes)
        }

        getFirstJoke();
    },[]);


   
    const getNewJoke=async()=>{
        const res=await fetch(URL);
        const jsonRes=await res.json();
        console.log(jsonRes)
        setjoke(jsonRes)
    }
    
  return (
    <div>
      <h1>Welcome to Gargi joker app</h1>
      <h2 style={{color:'red'}}>{joke.setup}</h2>
      <h2 style={{color:'red'}}>{joke.punchline}</h2>
      <Button variant="contained" color='success' onClick={getNewJoke}>Get New Joke</Button>
    </div>
  )
}

export default Joker
