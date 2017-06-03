
export function Bundle(args) {
    this.args = args;

    var strings = args[0];
    if (!(strings instanceof Array))
        throw Error('Invalid bundle call');
    this.strings = strings;

    var values = [];
    for (var i = 1 ; i < args.length ; i++)
        values.push(args[i]);
    this.values = values;
}

export default function bundle() {
    return new Bundle(arguments);
}