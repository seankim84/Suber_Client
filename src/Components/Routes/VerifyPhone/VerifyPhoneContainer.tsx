import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import VerifyPhonePresenter from './VerifyPhonePresenter';

interface IProps extends RouteComponentProps<any>{

}

class VerifyPhoneContainer extends React.Component {
    constructor(props: IProps){
        super(props);
        if(!props.location.state){
            props.history.push('/');
        }
        // tslint:disable-next-line
        console.log(props);
    }
    public render() {
        return <VerifyPhonePresenter />
    }
}

export default VerifyPhoneContainer;