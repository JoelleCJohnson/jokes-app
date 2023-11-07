import { useEffect, useState } from 'react'
import { Button } from 'react-native'
import Joke from './Joke'
import Punchline from './PunchLine'

export default function JokeList() {
    const [jokes, setJokes] = useState()
    const [currentJoke, setCurrentJoke] = useState(0)

    useEffect(() => {
        fetch('https://api.sampleapis.com/jokes/goodJokes')
            .then(res => res.json())
            .then(setJokes)
            .catch(alert)
            .finally(shuffleJokes)
    }, [])

    const shuffleJokes = () => {
        if(jokes){

            const j = Math.floor(Math.random() * jokes.length)//(i+1) allows the element to stay in its current place, giving more options for randomization. 
            setCurrentJoke(j)
        }
    }

    return (
        <>
            <Joke joke={!jokes ? 'Loading...' : jokes[currentJoke].setup} />
            <Punchline punchline={jokes && jokes[currentJoke].punchline} />
            <Button onPress={shuffleJokes} title="Next Joke" />
        </>
    )
}


