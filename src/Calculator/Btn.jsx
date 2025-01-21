export default function Btn({ value , onClick}) {
    
    return (
        <>
            <button   onClick={() => onClick(value)} className="btn" >{value}</button>
        </>
    )
}
