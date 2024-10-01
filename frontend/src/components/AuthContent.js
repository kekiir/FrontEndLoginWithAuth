import * as React from 'react';

import { request, setAuthHeader } from '../helpers/axios_helper';

export default class AuthContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    componentDidMount() {
        request(
            "GET",
            "/supplier/capacity",
            {}).then(
            (response) => {
                this.setState({data: response.data.capacityResponseListDTO})
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }

            }
        );
    };

  render() {
     return (
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Backend response</h5>
                            <p className="card-text">Content:</p>
                            <ul>
                                {this.state.data && this.state.data.length > 0 ? (
                                    this.state.data.map((line) => (
                                        <li key={line.id}>
                                            <strong>ID:</strong> {line.id} <br />
                                            <strong>Energy Source:</strong> {line.energySource} <br />
                                            <strong>Amount MW:</strong> {line.amountMW} <br />
                                            <strong>Available MW:</strong> {line.available} <br />
                                            <strong>Price:</strong> {line.price}$ <br />
                                            <strong>From:</strong> {new Date(line.fromTime).toLocaleString()} <br />
                                            <strong>To:</strong> {new Date(line.toTime).toLocaleString()} <br />
                                        </li>
                                    ))
                                ) : (
                                    <li>No data available</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
  };
}