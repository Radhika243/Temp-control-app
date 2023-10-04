import React,{useState} from 'react'
import "./styles.css"

function TemperatureComponent() {
    const [temperatureValue,setTemperatureValue] = useState(10)
    const [temperatureColor,setTemperatureColor] = useState(10)


    const increaseTemperature = () =>{
        if(temperatureValue === 30){
            return
        }
        const newTemperature = temperatureValue + 1
        setTemperatureValue(newTemperature)

        if(temperatureValue >= 15){
            setTemperatureColor("hot")
        }
    }

    const decreaseTemperature = () =>{
        if(temperatureValue === 0){
            return
        }
        const newTemperature = temperatureValue - 1
        setTemperatureValue(newTemperature)

        if(temperatureValue < 20){
            setTemperatureColor("cold")
        }

    }


    return (
        <>
            <div className='app-container'>
                <div className='temperature-display-container'>
                    <div className={`temperature-display ${temperatureColor}`}>
                        {temperatureValue}C
                    </div>

                </div>
                <div className='button-container'>
                    <button onMouseDown={increaseTemperature}>+</button>
                    <button onClick={decreaseTemperature}>-</button>
                </div>

            </div>
        
        </>
    )
}

export default TemperatureComponent;
