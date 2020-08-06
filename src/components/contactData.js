import React from "react";
import PropTypes from "prop-types";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";

const ContactData = ({ tel, email }) => (
  <div className="contactData">
    <p className="paragraph contactData__phone">
      <RiPhoneLine />
      <span>{tel}</span>
    </p>
    <p className="paragraph contactData__email">
      <RiMailLine />
      <span>{email}</span>
    </p>
  </div>
);

ContactData.propTypes = {
  email: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

export default ContactData;
