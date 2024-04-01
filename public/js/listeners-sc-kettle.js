//look for user to click one of the download CSV buttons
//in the nj-scrubber.html file

const CSV = document.querySelector('#csv');

CSV.addEventListener('click', function() {
    if (!CSV.hasAttribute("href")) {
        CSV.innerHTML = "Generating Download";
        let mykettledata = [
            "fl_K4_Density_SetPoint",
            "fl_K4_SG_True",
            "fl_K4_FM_City_Water_FlowRate",
            "fl_K4_Kettle_Temperature",
            "fl_K4_Chlorides_Reading",
            "fl_K4_FM_HCL_FlowRate"
        ];

        site.SCGC958GetWeekToCsv(mykettledata, CSV);
    }
});