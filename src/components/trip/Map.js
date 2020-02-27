import React, { memo, useState, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './Map.css'

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent, setCountry, country }) => {
    const [content, setContent] = useState("");
    const [allCountries, setCountries] = useState([])

    const resetCountries = () => {        
        Array.from(allCountries).forEach((e) => {
            e.style.fill = '#AABAE5'
        })
    }

    return (
        <div>
            <p>{country ? `Has seleccionado: ${country}` : 'Selecciona un pais haciendo click'}</p>
            
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                const { NAME } = geo.properties;
                                setContent(NAME);
                            }}
                            onClick={(e)=> {
                                if (allCountries.length === 0){
                                    setCountries(document.querySelectorAll('.rsm-geography'))
                                }
                                resetCountries()
                                const { NAME } = geo.properties;
                                // console.log(geo)
                                setCountry(NAME);
                                e.target.style.fill = '#F5AD31'
                                e.target.style.events = "none"
                            }}
                            />
                        ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <p>{content}</p>
        </div> 
    );
};

export default memo(MapChart);