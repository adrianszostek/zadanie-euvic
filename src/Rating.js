import { StarRate, StarRateOutlined } from '@mui/icons-material'
import { Component } from 'react';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.highlightStars = this.highlightStars.bind(this);
        this.state = {
            starsHighlighted: 1,
            starsRated: 1
        };

    }
    /* highlighting the stars when the mouse enter over the star icon */
    highlightStars = index => {
        this.setState({
            starsHighlighted: index
        });
    }
    /* resetting the visual representation of the rating when the mouse left the rating area */
    resetStars = () => {
        this.setState({
            starsHighlighted: this.state.starsRated
        });
    }
    render() {
        /* generate the initial stars view */
        const generateStars = () => {
            let initialStars = [
            ];
            for (let i = 1; i <= 5; i++) {
                initialStars.push(
                    <li key={i}
                        className={this.state.starsHighlighted >= i ? 'starHighlighted' : 'starEmpty'}
                        onMouseEnter={() => this.highlightStars(i)}
                        onMouseLeave={() => this.resetStars()}
                        onClick={() => this.sendRating(i)}>
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