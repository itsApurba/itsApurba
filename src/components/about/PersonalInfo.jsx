import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Apurba" },
  { meta: "last name", metaInfo: "Adhikary" },
  { meta: "Age", metaInfo: "20 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Kolkata" },
  { meta: "phone", metaInfo: "+919062371141" },
  // { meta: "Email", metaInfo: "you@mail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "Ben, Eng, Hin" },
];

const PersonalInfo = () => {
  return (
    <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className='title'>{val.meta}: </span>
          <span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
