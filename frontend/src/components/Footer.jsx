import React from "react";

export default function() {
  return (
    <div>
      <style>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </style>
      <footer
        className="page-footer font-small blue bg-dark"
        style={{ color: "white" }}
      >
        <div className="footer-copyright text-center py-3">
          © 2023 Copyright: The Programming Club IITI <br />
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <a href="/"> progclub.iiti.ac.in</a>
            <div className="mx-1">
              <a
                class="fa-brands fa-instagram"
                href="https://www.instagram.com/pclub_iiti/"
                style={{ textDecoration: "none", color: "white" }}
              ></a>
            </div>
            <div className="mx-1">
              <a
                class="fa-brands fa-linkedin"
                href="https://in.linkedin.com/company/progclub-iiti?original_referer=https%3A%2F%2Fwww.google.com%2F"
                style={{ textDecoration: "none", color: "white" }}
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
