 var BLOG = function () {

    /**
     * Public Functions
     */

    return {

        init:function () {
            alert("got here");
        },


    }; //end return
}(); //end BLOG, self invoking function

$(function () {
    BLOG.init();
}); //scripts loaded ready to rock and roll