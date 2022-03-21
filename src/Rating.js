import { StarRate, StarRateOutlined } from '@mui/icons-material'
import { Component } from 'react';

class Rating extends Component {
    render() {
        /* generate the initial stars view */
        const generateStars = () => {
            let initialStars = [
            ];
            for (let i = 1; i <= 5; i++) {
                initialStars.push(
                    <li key={i} >
                        <StarRate />
                        <StarRateOutlined />
                    </li>
                );
            }
            return initialStars;
        }
        return (
            <div className="provider-rating">
                <ul >
                    {generateStars()}
                </ul>
            </div>
        )
    }
}

export default Rating