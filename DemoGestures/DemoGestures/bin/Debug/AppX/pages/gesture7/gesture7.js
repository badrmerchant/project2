// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/gesture7/gesture7.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var ges = new MSGesture();hello
            ges.target = dataDiv;

            // trasform = translate (45,45) rotate (34, 56 56) scale (2)

            function handleGestureEvent(e) {
                var matrix = new MSCSSMatrix(e.target.style.transform);
                e.target.style.transform = matrix.rotate(e.rotation * 180 / Math.PI);
                //matrix = new MSCSSMatrix(e.target.style.transform);
                e.target.style.transform = matrix.scale(e.scale);
                //matrix = new MSCSSMatrix(e.target.style.transform);
                e.target.style.transform = matrix.translate(e.translationX, e.translationY)
            }

            dataDiv.addEventListener("MSPointerDown", function (e) {
                ges.addPointer(e.pointerId);
                
            });
            //dataDiv.addEventListener("MSGestureStart", handleGestureEvent);
            //dataDiv.addEventListener("MSGestureEnd", handleGestureEvent);
            dataDiv.addEventListener("MSGestureChange", handleGestureEvent);



        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
