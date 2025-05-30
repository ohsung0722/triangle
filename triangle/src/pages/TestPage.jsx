import React from "react";
import PieGraph from "../components/PieGraph/PieGraph";
import ClubData from "../constants/sejong_all_clubs.json";


function TestPage(){

    const counts = Object.entries(
    ClubData.reduce((acc, club) => {
      acc[club.category] = (acc[club.category] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => a.count - b.count);

    return(
        <div>
           <PieGraph data={counts}/>
        </div>
    )
}

export {TestPage}