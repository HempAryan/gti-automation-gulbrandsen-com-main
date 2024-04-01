//look for user to click one of the download CSV buttons
//in the nj-scrubber.html file

const CSV = document.querySelector('#csv');
const CSV2 = document.querySelector('#csv2');
const CSV3 = document.querySelector('#csv3');



CSV.addEventListener('click', function() {
    if (!CSV.hasAttribute("href")) {
        CSV.innerHTML = "Generating Download";
        let pumpFlowRates = [
            "fl_FT_Demister_Recirc_1_GPM",
            "fl_FT_Demister_Recirc_2_GPM",
            "fl_FT_K11_Dump_GPM",
            "fl_FT_K11_Recirc_GPM",
            "fl_FT_Scrubber_GPM",
            "fl_FT_Water_GPM"
        ];

        site.njScrubberGetWeekToCsv(pumpFlowRates, CSV);
    }
});

CSV2.addEventListener('click', function() {
    if (!CSV2.hasAttribute("href")) {
        CSV2.innerHTML = "Generating Download";
        let scrubberLevels = [
            "fl_LT_Demister_Percent",
            "fl_LT_Scrubber_Percent",
            "fl_LT_K11_Percent",
            "fl_LT_Demister_Gallons",
            "fl_LT_Scrubber_Gallons"
        ];
        site.njScrubberGetWeekToCsv(scrubberLevels, CSV2);
    }
});

CSV3.addEventListener('click', function() {
    if (!CSV3.hasAttribute("href")) {
        CSV3.innerHTML = "Generating Download";
        let phAndDiffPressure = [
            "fl_DPT_Demister_Column_Differential_Pressure",
            "fl_DPT_Scrubber_Column_Differential_Pressure",
            "fl_pH_Demister",
            "fl_pH_Scrubber"
        ];
        site.njScrubberGetWeekToCsv(phAndDiffPressure, CSV3);
    }
});