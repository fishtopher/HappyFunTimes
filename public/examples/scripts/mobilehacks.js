/*
 * Copyright 2014, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

define(function() {

  var fixHeightHack = function() {
    // Also fix all fucked up sizing
    var elements = document.querySelectorAll(".fixheight");
    for (var ii = 0; ii < elements.length; ++ii) {
      var element = elements[ii];
      var parent = element.parentNode;
      if (parseInt(element.style.height) != parent.clientHeight) {
        element.style.height = parent.clientHeight + "px";
      }
    }
  };

  var fixupAfterSizeChange = function() {
    window.scrollTo(0, 0);
    fixHeightHack();
  };

  // When the device re-orients, at least on iOS, the page is scrolled down :(
  window.addEventListener('orientationchange', fixupAfterSizeChange, false);
  window.addEventListener('resize', fixupAfterSizeChange, false);

  // Prevents the browser from sliding the page when the user slides their finger.
  // At least on iOS.
  document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);

  return {
    fixHeightHack: fixHeightHack,
  };
});

