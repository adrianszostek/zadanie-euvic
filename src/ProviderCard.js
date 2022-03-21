import React, { Component } from "react";
import { ChildCare, Elevator, LocalParking, Wc } from '@mui/icons-material';


class ProviderCard extends Component {

    render() {
        const provider = this.props.providerData;
        return (
            <div className="provider-area">
                <div className="provider-card">
                    <p className='date'>
                        <span className="date-year">{2022}</span>
                        Tue, 14 Mar
                    </p>
                    <div className='provider-info'>
                        <div className='provider-name-and-rating'>
                            <div className='provider-name'>
                                <p className='provider-name-title'>{provider.benefit}</p>
                                <p className='provider-name-subtitle'>{provider.provider}</p>
                            </div>
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