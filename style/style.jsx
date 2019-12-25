const Style = (
  <style jsx>
    {`
      body,
      h1,
      h2,
      h3,
      h4,
      div,
      p {
        margin: 0;
        padding: 0;
      }

      span {
        color: #b94971;
      }

      a {
        color: #b94971;
        transition: all 0.3s ease;
      }

      a:hover {
        opacity: 0.6;
      }

      button {
        width: 160px;
        padding: 0.7em 20px;
        margin: 10px 0;
        outline: 0;
        color: #fff;
        font-size: 15pt;
        background: #26c6da;
        border-bottom: 2px solid #00838f;
        border-radius: 4px;
        box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
          0 2px 2px rgba(0, 0, 0, 0.19);
        transition: all 0.3s ease;
      }

      button:active {
        border-bottom: 2px solid #26c6da;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      }

      button:hover {
        opacity: 0.8;
      }

      .backimg {
        background: url(/img1.png) no-repeat 61.4vw 25vh;
        background-size: 50%;
        height: 88vh;
      }

      .transparent {
        background-color: rgba(255, 255, 255, 0.6);
        height: 100%;
      }

      .style_back {
        background-color: rgb(66, 170, 199);
        height: 88vh;
      }

      .wrap {
        margin: 0 auto;
        width: 1100px;
        padding-top: 6vh;
      }

      .char p {
        font-size: 15pt;
        margin-top: 20px;
        letter-spacing: 0.2em;
      }

      .color_char p {
        font-size: 15pt;
        margin-top: 20px;
        letter-spacing: 0.2em;
        color: #b94971;
      }

      .emphasis,
      .company,
      .char,
      .color_char {
        margin-top: 40px;
      }

      .emphasis p {
        font-size: 14pt;
        letter-spacing: 0.2em;
        margin-bottom: 20px;
        color: #b94971;
      }

      .vue {
        font-size: 15pt;
        margin-top: 40px;
        letter-spacing: 0.2em;
        color: #b94971;
      }

      .angular {
        font-size: 15pt;
        margin-top: 50px;
        letter-spacing: 0.2em;
        color: #b94971;
      }

      .description p {
        font-size: 14pt;
        letter-spacing: 0.2em;
        margin-top: 20px;
      }

      .sample {
        display: flex;
        margin-top: 40px;
      }

      .sample img {
        width: 400px;
      }

      .hello p {
        font-size: 14pt;
      }
    `}
  </style>
);

export default Style;
