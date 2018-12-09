import React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import { facebookConnect, facebookConnectVariables } from '../../../types/api';
import SocialLoginPresenter from './SocialLoginPresenter';

import { FACEBOOK_CONNECT } from './SocialLoginQueries';

class LoginMutation extends Mutation<facebookConnect, facebookConnectVariables>{}

interface IState {
    firstName: string;
    lastName: string;
    email?: string;
    fbId: string
}

interface IProps extends RouteComponentProps<any> {

}

class SocialLoginContainer extends React.Component<IProps, IState> {

    public mutation: any;

    public render() {
        const { firstName, lastName, email, fbId } = this.state;
         return (
            <LoginMutation 
                mutaion={FACEBOOK_CONNECT} 
                variables={{
                    email,
                    fbId,
                    firstName,
                    lastName 
            }}>
            {( facebookConnect, { loading  }) => {
                    this.mutation = facebookConnect;
                    return <SocialLoginPresenter loginCallback={this.callback}/>
        } 
        }
                
            </LoginMutation> 
         )
    }

    public callback = (fbData) => {
        this.setState({
            email: fbData.email
        })
        this.mutation();
    }

}

export default SocialLoginContainer