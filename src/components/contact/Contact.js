import React from "react";
import style from "./Contact.module.scss";

function Contact() {
  return (
    <div className={style.table__container}>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>NAME:</th>
            <td>Andreas Lackmann</td>
            <th>AGE:</th>
            <td>26 Years</td>
          </tr>
          <tr>
            <th>LOCATION: </th>
            <td>Berlin Germany</td>
            <th>PHONE:</th>
            <td>+4917623423432</td>
          </tr>
          <tr>
            <th>E-MAIL:</th>
            <td>jokzer43@gmail.com</td>
            <th>EXPERIENCE:</th>
            <td>to many</td>
          </tr>

          <tr>
            <th>WEBSITE:</th>
            <td>https://github.com/jokk3r</td>
            <th>WEBSITE:</th>
            <td>www.blabla.de</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
