import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


const Stamp = () => {
  return(
    <div className="stamp">
      STAMP
    </div>
  );
}

const Sender1 = (props) => {
  return (
    <div className="to-label-1">
      <p>different props</p>  
      <p className="name">{props.name}</p>
      <p className="address1">{props.address1}</p>
      <p className="address2">{props.address2}</p>
    </div>
  );
}

const Receiver1 = ({ name, address1, address2 }) => {
  return (
    <div className="from-label-1">
      <p>different props</p>
      <p className="name">{name}</p>
      <p className="address1">{address1}</p>
      <p className="address2">{address2}</p>
    </div>
  );
}

const Sender = ({senderProps}) => {
  console.log("inside Sender => ", senderProps);
  return (
    <div className="to-label-0">
      <p className="name">{senderProps.name}</p>
      <p className="address1">{senderProps.address1}</p>
      <p className="address2">{senderProps.address2}</p>
    </div>
  );
}

const Receiver = ({ receiverProps}) => {
  var {name, address1, address2} = receiverProps;
  return (
    <div className="from-label-0">
      <p className="name">{name}</p>
      <p className="address1">{address1}</p>
      <p className="address2">{address2}</p>
    </div>
  );
}

const AdressLabel = ({ mailinLabel, className }) => {
  let {name, address1, address2} = mailinLabel;
  return(
    <div className={`${className}`}>
      <p className="name">{name}</p>
      <p className="address1">{address1}</p>
      <p className="addess2">{address2}</p>
    </div>
  );
}

const Envelope = ({ senderLabel, receiverLabel }) => {
  console.log("sender=> ", senderLabel);
  console.log("receiver => ", receiverLabel);
  return(
    <div className="envelope">
      <Sender senderProps={senderLabel} />
      <Sender1 name="Mr. Sender" address1="123 Fake St." address2="Boston, MA 02118" />
      <Receiver receiverProps={receiverLabel} />
      <Receiver1 name="Mrs. Receiver" address1="123 Fake St." address2={"San Francisco, Ca 94101"}/>
      <AdressLabel className="to-label" mailinLabel={senderLabel} />
      <AdressLabel className="from-label" mailinLabel={receiverLabel} />
      <Stamp />
    </div>
  );
}

const returnLabel = {
  name: "Mr. Sender",
  address1: "123 Fake St.",
  address2: "Boston, MA 02118"
}

const recipientLabel = {
  name: "Mrs. Receiver",
  address1: "123 Fake St.",
  address2: "San Francisco, CA 94101"
}


ReactDOM.render(
  <Envelope senderLabel={returnLabel} receiverLabel={recipientLabel}/>,
  document.getElementById('root')
);