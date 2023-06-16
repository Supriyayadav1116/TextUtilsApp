import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black",
  // });
  let Style = {
    backgroundColor: props.mode === "dark" ? "#2e4871" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div className="container ">
      <h1 className="my-3" style={Style}>
        About Us
      </h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              style={Style}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Design WebSite</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={Style}>
              Designing a website involves several key steps. Firstly, establish
              a clear goal and target audience for your website to guide the
              design process. Next, create a well-structured layout that
              includes a user-friendly navigation system to ensure easy access
              to information. Choose a visually appealing color scheme, fonts,
              and images that align with your brand and enhance the overall user
              experience. Implement responsive design techniques to optimize the
              website's appearance and functionality on various devices. Lastly,
              regularly test and iterate your design, gathering feedback from
              users to make continuous improvements and enhance user engagement.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={Style}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={Style}
            >
              <strong>About React</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={Style}>
              React is a popular JavaScript library for building user
              interfaces. It follows a component-based approach, allowing
              developers to break down the UI into reusable and modular
              components. React utilizes a virtual DOM, which improves
              performance by efficiently updating only the necessary parts of
              the UI. It employs a unidirectional data flow, making it easier to
              manage and track data changes. React supports server-side
              rendering, enabling faster initial page loads and better SEO. Its
              vast ecosystem and strong community support make it an excellent
              choice for building dynamic and interactive web applications.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={Style}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={Style}
            >
              <strong>About NodeJs</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={Style}>
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
              engine. It allows developers to run JavaScript code outside of a
              web browser, making it suitable for server-side development.
              Node.js follows an event-driven, non-blocking I/O model, which
              enables handling concurrent requests efficiently. It has a vast
              ecosystem of modules and libraries available through the npm
              package manager, allowing developers to quickly build scalable and
              performant applications. Node.js is highly suitable for building
              real-time applications, APIs, microservices, and serverless
              architectures. Its ability to handle high traffic and its seamless
              integration with JavaScript on the client-side make it a popular
              choice for full-stack JavaScript development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
