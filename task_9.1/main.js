var start, total;

function userIn() {
    start = new Date();
}

function userOut() {
    end = new Date();
    total = Math.round(start.getTime() - end.getTime(), 1000);
    alert('Total time: ${total}s')
}