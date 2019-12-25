const footer_style = (
  <style>
    {`
      .footer {
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 12vh;
        background-color: rgba(77, 77, 77, 0.6);
      }

      .contents {
        font-size: 20pt;
        color: #fff;
        letter-spacing: 0.2em;
        margin-top: 3.8vh;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .arrow_right {
        margin-top: 3.8vh;
        width: 30px;
        height: 30px;
        border: 5px solid;
        border-color: #fff #fff transparent transparent;
        transform: rotate(45deg);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .arrow_left {
        margin-top: 3.8vh;
        width: 30px;
        height: 30px;
        border: 5px solid;
        border-color: transparent transparent #fff #fff;
        transform: rotate(45deg);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .arrow_right:hover,
      .arrow_left:hover,
      .contents:hover {
        opacity: 0.5;
      }
    `}
  </style>
);

export default footer_style;
