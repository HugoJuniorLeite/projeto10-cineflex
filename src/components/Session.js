
export default function Session(props){

    const {weekday, date, name, nameOne, id} =props

    return(
    
        <div>
           <span>{`${weekday} - ${date} `}</span>
            <div>
                <span>
                    <button onClick="#">{name}</button>
                    <button onClick="#">{nameOne}</button>
                </span>
            </div>
        </div>
    )
    }


    