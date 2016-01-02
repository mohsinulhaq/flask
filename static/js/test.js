$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
    $("select").select2({
        matcher: oldMatcher(function (term, text) {
            console.log(term, text);
            if (term.length == 0) {
                return true;
            }
            var split = text.split(' ');
            var ret = false;
            $.each(split, function () {
                console.log(this.slice(0, term.length).toLowerCase());
                if (this.slice(0, term.length).toLowerCase() == term.toLowerCase()) {
                    ret = true;
                    return false;
                }
            });
            return ret;
        })
    })
});