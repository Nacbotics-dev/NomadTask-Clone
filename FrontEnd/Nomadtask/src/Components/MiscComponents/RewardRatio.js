import React from 'react';
import TrustScoreRating from '../TaskDetailComponents/TrustScoreRating';

function RewardRatio({responseData}) {
    return (
        <div className='mb-5 max-w-[390px] w-full'>
            <TrustScoreRating responseData={responseData}/>
        </div>
    );
}

export default RewardRatio;