import "./Marketplace.css"
import marketData from "../../data/marketData.json"
import CarList from "../../components/carList/carList"

export default function MarketPlace() {
    return (
        <>
             <CarList marketData={marketData} />
        </>
    )
}