$.get("https://script.google.com/macros/s/AKfycbwMWX_dh4P2vVjMY40T1TetbUAUFgy_4NHL9xvMhvTeZcRL_1RPzwxeDs21_EWAde3F/exec",function (e) {
    if (e.live == 'none') {
        const startDate = dayjs(e.publishtime);
        setDate();
        setInterval(() => setDate(), 1000);

        function setDate() {
            let secs = dayjs.diff(startDate, 'second');
            let mins = Math.floor(secs / 60);
            let hours = Math.floor(mins / 60);
            let days = Math.floor(hours / 24);
            secs = secs - (mins * 60);
            mins = mins - (hours * 60);
            hours = hours - (days * 24);

            let secs2 = secs.toString().padStart(2, '0');
            let mins2 = mins.toString().padStart(2, '0');
            let hours2 = hours.toString().padStart(2, '0');

            $('#day').text(days);
            $('#hour').text(hours2);
            $('#min').text(mins2);
            $('#sec').text(secs2);
        }
    }
})