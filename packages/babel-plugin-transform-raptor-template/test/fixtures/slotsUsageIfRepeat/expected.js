import _aB from "a-b";
export default function tmpl($api, $cmp, $slotset, $ctx) {
    const _expr = $cmp.isTrue || undefined;

    const m = $ctx.memoized || ($ctx.memoized = {});
    return [$api.c(
        "a-b",
        _aB,
        {
            classMap: {
                s2: true
            },
            slotset: {
                $default$: _expr && $api.i(
                    $cmp.items,
                    function (item) {
                        return $api.h(
                            "p",
                            {},
                            ["X"]
                        );
                    }
                )
            }
        }
    )];
}
tmpl.ids = ["isTrue", "items"];