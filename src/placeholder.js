var $ = window.jQuery || window.require && require("common:widget/ui/jquery/jquery.js");

$ && function(WIN, DOC, undef) {
    var shim = $('<span>');
    $.fn.placeholder = function($el, args) {
        var shim = $('<span>');

        return function(args) {
            var $el = this
                , wrap = shim.clone(!1)
                , holder = shim.clone(!1)
                , pos = $el.position();

            $el.data("__ph__", $el.attr("placeholder"));
            $el.attr("placeholder", "");

            holder.html($el.data("__ph__"));

            holder.css({
                'position': 'absolute'
                , 'top': pos.top
                , 'left': pos.left
                , 'text-indent': '3px'
                , 'pointer-events': 'none'
                , 'color': '#999'
                , 'background': '#eee'
                , 'line-height': $el.css('line-height')
            });

            $el.wrap(wrap.css({
                'display': 'inline-block'
                , 'position': 'relative'
                , 'z-index': '10'
            }));

            (wrap = $el.parent()).append(holder);

            // console.log(this)
        }
    }();

    /*_.set = function() {
        
    }

    fn.init = function() {
        var that = this
            , wrap = that.holder.clone(!1)
            , shim = that.holder.clone(!1);

            console.log(that.$el[0])

        shim.html("xxx");

        wrap.css({"position": "relative"})
            .append(that.$el)
            .append(shim);

        that.$parent.append(wrap);
    }*/
}(window, document);