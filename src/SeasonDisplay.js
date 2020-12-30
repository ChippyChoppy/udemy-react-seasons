import './SeasonDisplay.css'
import React from 'react'


const seasonConfig = {
    summer: {
        seasonMessage: "Let's hit the beach!",
        weatherIcon: 'sun'
    },
    winter: {
        seasonMessage: "Brr, it is chilly!",
        weatherIcon: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { seasonMessage, weatherIcon } = seasonConfig[season] // { text, weatherIcon }

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${weatherIcon} icon`} />
            <h1>{seasonMessage}</h1>
            <i className={`icon-right massive ${weatherIcon} icon`} />
        </div>
    )
};

export default SeasonDisplay