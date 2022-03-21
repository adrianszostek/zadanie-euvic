import { StarRate, StarRateOutlined } from '@mui/icons-material'
import { Component } from 'react';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.highlightStars = this.highlightStars.bind(this);
        this.sendRating = this.sendRating.bind(this);
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
    /* send the data after clickiing on the ith star */
    sendRating = async (index) => {
        this.setState({
            starsRated: index
        });
        try {
            let ratingToSend = await fetch("https://api.nfz.gov.pl/app-itl-api/version?api-version=1.3", {
                method: "POST",
                body: JSON.stringify({
                    "api-version": {
                        "major": 1,
                        "minor": index,
                        "patch": 0,
                        "date-mod": "string",
                        "deprecated": true
                    }
                })
            })
            if (ratingToSend.status === 200) {
                console.log("Grade passed successfully");
            } else {
                console.log("There was a problem with sending the rating: " + ratingToSend.status);
            }
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        /* generate the initial stars */
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