import React, { Component } from "react";
import { ChildCare, Elevator, LocalParking, Wc } from '@mui/icons-material';
import Rating from "./Rating";


class ProviderCard extends Component {

    render() {
        const provider = this.props.providerData;
        /* format the date and get short names of the months and weekdays */
        const monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const daysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const date = provider.dates.date;
        const dateYear = date.slice(0, 4);
        const dateMonth = date.slice(5, 7);
        const dateDay = date.slice(8);
        const dateFormat = new Date(parseInt(dateYear), parseInt(dateMonth) - 1, parseInt(dateDay));
        return (
            <div className="provider-area">
                <div className="provider-card">
                    <p className='date'>
                        <span className="date-year">{dateYear}</span>
                        {daysNames[dateFormat.getDay() - 1]},<br />{monthsNames[dateFormat.getMonth()] + " " + dateDay}
                    </p>
                    <div className='provider-info'>
                        <div className='provider-name-and-rating'>
                            <div className='provider-name'>
                                <p className='provider-name-title'>{provider.benefit}</p>
                                <p className='provider-name-subtitle'>{provider.provider}</p>
                            </div>
                            <Rating />
                        </div>
                        <div className='provider-place-and-services'>
                            <div className='provider-place'>
                                <p>
                                    {provider.place}<br />{provider.address}<br />{provider.locality}
                                </p>
                            </div>
                            <div className='provider-additional-info'>
                                {provider.toilet === "Y" && <Wc />}
                                {provider["benefits-for-children"] === "Y" && <ChildCare />}
                                {provider.elevator === "Y" && <Elevator />}
                                {provider["car-park"] === "Y" && <LocalParking />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProviderCard