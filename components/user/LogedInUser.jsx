import React from "react";

const LogedInUser = () => {
  return (
    <div className="LogedInUser_Body">
      <h3 className="my-profile">
        <span>پروفابل من</span>
      </h3>
      <h3 className="my-profile">
        <span>آگهی های من</span>
      </h3>
      <h3 className="my-profile">
        <span>نشان ها</span>
      </h3>
      <h3 className="my-profile">
        <span>یادداشت ها</span>
      </h3>
      <h3 className="my-profile">
        <span> بازدید های اخیر</span>
      </h3>
      <h3 className="my-profile">
        <span> حجره های من</span>
      </h3>
      <style jsx>
        {`
          .LogedInUser_Body {
            height: var(--bodyHight);
          }
          .my-profile {
            font-weight: lighter;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default LogedInUser;
