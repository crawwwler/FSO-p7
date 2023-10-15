const Country = ({ country }) => {
    // RESPONSIBLE FOR RENDERING COUNTRY INFO
    const countryOnDisplay = () => {
        return (
            <div>
                <h3>{country.name.common}<br /></h3>
                <div>Capital {country.capital}</div>
                <div>Population {country.population}</div>
                <img src={country.flags.png} height='100' alt={`Flag of ${country.name.common}`} />
            </div>
        )
    }

    return country ? (
        <div>
            {country.found ? countryOnDisplay() : <div> not found ...</div>}
        </div>
    ) : null
}

export default Country