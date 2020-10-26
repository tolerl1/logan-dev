<template>
  <div>
    <b-jumbotron fluid class="bg-primary text-white">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-sm-4">
            <img src="@/assets/images/avatar.png" alt class="avatar" />
          </div>
          <div class="col-sm-auto">
            <h1 class="name">Logan Toler</h1>
            <p>Cincinnati, OH | Charlotte, NC</p>
          </div>
        </div>
        <div class="row align-item-center social-icon-align text-center">
          <div class="social-icon-col mb-3">
            <a
              href="https://github.com/tolerl1/"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              style="text-decoration: none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32.58 31.77"
                class="git-white"
              >
                <title>GitHub</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
                    />
                  </g>
                </g>
              </svg>
              <span class="social-icon-text-center social-text-hide text-white ml-2">GitHub</span>
            </a>
          </div>
          <div class="social-icon-col mb-3">
            <a
              href="https://www.linkedin.com/in/logantoler/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              style="text-decoration: none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32"
                height="32"
                viewBox="0 0 100 100"
              >
                <image
                  width="100"
                  height="100"
                  xlink:href="data:img/png;base64,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"
                />
              </svg>
              <span class="social-icon-text-center social-text-hide text-white ml-2">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>


<style>
.git-white {
  fill: #fff;
  fill-rule: evenodd;
}
</style>