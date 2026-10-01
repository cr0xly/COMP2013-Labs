import ResortCard from "./ResortCard"
import type { ResortListing } from "../data/data"

interface ResortContainerProps {
    data: ResortListing[]
}

export default function ResortContainer({data}: ResortContainerProps){
    return (
        <div className="ResortContainer">
            {data.map((listing: ResortListing) => (
                <ResortCard key={listing.id} {...listing}/>
            ))}
        </div>
    )
}