import { useState } from "react";
import axios from "axios";


const RandomJokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
            setJoke(res.data);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h2>3. Random Joke Generator</h2>
                <button className='btn btn-primary' onClick={fetchJoke}>Get a Joke</button>

                {loading && <p>Loading...</p>}
                {error && <p>Oops! Something went wrong.</p>}
                {joke && (
                    <div style={{ marginTop: "20px" }}>
                        <p><strong>{joke.setup}</strong></p>
                        <p>{joke.punchline}</p>
                    </div>
                )}
            </div>
        </>

    )
}

export default RandomJokeGenerator