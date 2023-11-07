import { useEffect, useState } from 'react'
import { Button } from 'react-native'
import Joke from './Joke'
import Punchline from './PunchLine'

export default function JokeList(){
    const [jokes, setJokes] = useState()
    const[currentJoke, setCurrentJoke] = useState(0)

    useEffect(() => {
        fetch('https://api.sampleapis.com/jokes/goodJokes')
            .then(res => res.json())
            .then(shuffleJokes)
            .catch(alert)
    }, [])

    const nextJoke = () => {
        if (currentJoke < jokes.length -1){
            setCurrentJoke(currentJoke + 1)
        } else {
            setCurrentJoke(0) //loop back to first joke
        }
    }

    const shuffleJokes = (array) => {
        for(let i = array.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1))//(i+1) allows the element to stay in its current place, giving more options for randomization. 
            [array[i], array[j]] = [array[j], array[i]] //swap variables in one line in js. Eliminates need for placeholder
        }
        setJokes(array)
    }

    return(
        <>
            <Joke joke={ !jokes ? 'Loading...' : jokes[currentJoke].setup } />
            <Punchline punchline={ jokes && jokes[currentJoke].punchline } />
            <Button onPress={nextJoke} title="Next Joke" />
        </>
    )
}


