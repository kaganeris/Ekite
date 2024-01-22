import React from "react";

const ForgotPasswordEmailHeader = () => {
  return (
    <div className="card-header d-flex row justify-content-center align-items-center  bg-transparent">
      <div className=" text-center mt-3 ">
        <h2>Şifre Yenileme</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png"
          className="img-fluid"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <p>Şifrenizi yenilemek için mail adresinizi girin.</p>
      </div>
    </div>
  );
};

export default ForgotPasswordEmailHeader;
