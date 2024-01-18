import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/MobileLegend.module.css';

const MobileLegend = () => {
    const [heroes, setHeroes] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://api.dazelpro.com/mobile-legends/hero")
            .then((response) => {
                setHeroes(response.data.hero);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleSearch = () => {
        const result = heroes.filter(
            (hero) =>
                hero.hero_name.toLowerCase().includes(searchInput.toLowerCase()) ||
                hero.hero_role.toLowerCase().includes(searchInput.toLowerCase())
        );

        setSearchResult(result);
    };

    const handleReset = () => {
        setSearchInput("");
        setSearchResult([]);
    };

    return (
        <div className={styles.container}>
            <h1>Mobile Legends Bank Bank</h1>
            <div className={styles.box}>
                <div>
                    <h3>List of heroes</h3>
                    <div className={styles.boxInput}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search heroes based on name or role"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button onClick={handleSearch} className={styles.btn}>Search</button>
                        <button onClick={handleReset} className={styles.btn}>Reset</button>
                    </div>

                    <div className={styles.heroContainer}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className={styles.heroList}>
                                {searchResult.length > 0 ? (
                                    searchResult.map((hero) => (
                                        <div key={hero.hero_id} className={styles.heroCard}>
                                            <h6>{hero.hero_name}</h6>
                                            <p>Role: {hero.hero_role}</p>
                                            <p>Specially: {hero.hero_specially}</p>
                                        </div>
                                    ))
                                ) : (
                                    heroes.map((hero) => (
                                        <div key={hero.hero_id} className={styles.heroCard}>
                                            <h6>{hero.hero_name}</h6>
                                            <p>Role: {hero.hero_role}</p>
                                            <p>Specially: {hero.hero_specially}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileLegend;
