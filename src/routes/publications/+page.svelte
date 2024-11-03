<script>
    let showCitations = false;

    const publications = [
        {
            title: "High-aspect-ratio, free-form patterning of carbon nanotube forests using micro-electro-discharge machining",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:UeHWp8X0CEIC",
            authors: "W Khalid, MSM Ali, M Dahmardeh, Y Choi, P Yaghoobi, A Nojeh, ...",
            journal: "Diamond and Related Materials 19 (11), 1405-1410 (2010)",
            citations: 63,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=833763536245236826"
        },
        {
            title: "BMP10-mediated ALK1 signaling is continuously required for vascular development and maintenance",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:YOwf2qJgpHMC",
            authors: "TL Capasso, B Li, HJ Volek, W Khalid, ER Rochon, A Anbalagan, ...",
            journal: "Angiogenesis 23, 203-220 (2020)",
            citations: 61,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=14123334806095444678"
        },
        {
            title: "Parylene cantilevers integrated with polycrystalline silicon piezoresistors for surface stress sensing",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:u5HHmVD_uO8C",
            authors: "R Katragadda, Z Wang, W Khalid, Y Li, Y Xu",
            journal: "Applied Physics Letters 91 (8) (2007)",
            citations: 43,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=17491632793861308531"
        },
        {
            title: "High-aspect-ratio, 3-D micromachining of carbon-nanotube forests by micro-electro-discharge machining in air",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:IjCSPb-OGe4C",
            authors: "M Dahmardeh, W Khalid, MSM Ali, Y Choi, P Yaghoobi, A Nojeh, ...",
            journal: "2011 IEEE 24th International Conference on Micro Electro Mechanical Systems … (2011)",
            citations: 9,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=15527698345938812626"
        },
        {
            title: "Optical lever based parylene cantilevers for biochemical sensing",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:u-x6o8ySG0sC",
            authors: "K Zheng, W Khalid, Z Wang, Y Li, RB Katragadda, Y Zhao, Q Lin, Y Xu",
            journal: "The Open Optics Journal 2 (1) (2008)",
            citations: 6,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11924039814750523470"
        },
        {
            title: "Covalent functionalization of carbon nanotube forests grown in situ on a metal-silicon chip",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:zYLM7Y9cAGgC",
            authors: "JR Johansson, N Bosaeus, N Kann, B Åkerman, B Nordén, W Khalid",
            journal: "Nanosensors, Biosensors, and Info-Tech Sensors and Systems 2012 8344, 200-211 (2012)",
            citations: 2,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=14461185505479830394"
        },
        {
            title: "Development of micro scanning multiprobes for material characterization",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:qjMakFHDy7sC",
            authors: "Y Li, Q Zheng, Z Wang, R Katragadda, W Khalid, RP Panguluri, ...",
            journal: "Sensor Letters 6 (2), 299-304 (2008)",
            citations: 2,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=9911865913979445161"
        },
        {
            title: "BMP10 is the sole required ligand for endothelial ALK1 signaling",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:4DMP91E08xMC",
            authors: "TL Capasso, B Li, HJ Volek, W Khalid, ER Rochon, A Anbalagan, ...",
            journal: "Angiogenesis 22 (4), 588-589 (2019)",
            citations: 1,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=14649199354782798758"
        },
        {
            title: "Parylene based cantilevers for biosensing",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:9yKSN-GCB0IC",
            authors: "W Khalid",
            journal: "Wayne State University (2007)",
            citations: 1,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3494153398220097121"
        },
        {
            title: "Intelligent Vehicle Based Architecture for Real-Time Monitoring of Soldiers’ Health using MEMS Flexible Smart Skin Sensors",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:2osOgNQ5qMEC",
            authors: "W Khalid, I Hossain, SM Mahmud, Y Xu",
            journal: "Proc. 5th Annual Intelligent Vehicle Systems Symposium of National Defense … (2005)",
            citations: 1,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2752919779862180826"
        },
        {
            title: "Corrigendum to ‘Non-invasive Assessment of Liver Fat in ob/ob Mice Using Ultrasound-Induced Thermal Strain Imaging and Its Correlation with Hepatic Triglyceride Content ...",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:ULOm3_A8WrAC",
            authors: "WB Khalid, N Farhat, L Lavery, J Jarnagin, JP Delany, K Kim",
            journal: "Ultrasound in Medicine and Biology 47 (8), 2477 (2021)",
            citations: 0,
            citationsUrl: ""
        },
        {
            title: "Multifocus Thermal Strain Imaging Using a Curved Linear Array Transducer for Identification of Lipids in Deep Tissue",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&cstart=20&pagesize=80&citation_for_view=bckJET0AAAAJ:4TOpqqG69KYC",
            authors: "WB Khalid, X Chen, K Kim",
            journal: "Ultrasound in Medicine & Biology 47 (7), 1711-1724 (2021)",
            citations: 0,
            citationsUrl: ""
        },
        {
            title: "Non-invasive Assessment of Liver Fat in ob/ob Mice Using Ultrasound-Induced Thermal Strain Imaging and Its Correlation with Hepatic Triglyceride Content",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&cstart=20&pagesize=80&citation_for_view=bckJET0AAAAJ:qxL8FJ1GzNcC",
            authors: "WB Khalid, N Farhat, L Lavery, J Jarnagin, JP Delany, K Kim",
            journal: "Ultrasound in Medicine & Biology 47 (4), 1067-1076 (2021)",
            citations: 0,
            citationsUrl: ""
        },
        {
            title: "Multi-Foci Beamforming Using Curved Linear Array Transducer for Qualitative Identification of Lipids in Human Liver",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&cstart=20&pagesize=80&citation_for_view=bckJET0AAAAJ:M3ejUd6NZC8C",
            authors: "WB Khalid",
            journal: "University of Pittsburgh (2020)",
            citations: 0,
            citationsUrl: ""
        },
        {
            title: "A Novel Lab-on-Tip Device for pico-Newton Lateral Force Measurement",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&cstart=20&pagesize=80&citation_for_view=bckJET0AAAAJ:d1gkVwhDpl0C",
            authors: "Z Wang, W Khalid, Y Xu",
            journal: "SENSORS, 2006 IEEE, 152-155 (2006)",
            citations: 1,
            citationsUrl: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3494153398220097121"
        }
    ];

    const patents = [
        {
            title: "Self-flowing microfluidic analytical chip",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:MXK_kJrjxJIC",
            authors: "N Saleh, W Khalid, F Saleh",
            details: "US Patent App. 15/630,137 (2017)"
        },
        {
            title: "Stand alone microfluidic analytical chip device",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:3fE2CSJIrl8C",
            authors: "N Saleh, W Khalid, F Saleh",
            details: "US Patent 10,832,895 (2020)"
        },
        {
            title: "Nanostructure based super-capacitor for pressure and fingerprint sensor",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:kNdYIx-mwKoC",
            authors: "W Khalid",
            details: "US Patent 9,953,202 (2018)"
        },
        {
            title: "Apparatus and method for programmable spatially selective nanoscale surface functionalization",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:ufrVoPGSRksC",
            authors: "N Saleh, W Khalid, F Saleh",
            details: "US Patent App. 15/630,095 (2017)"
        },
        {
            title: "Covalent functionalization of carbon nanotubes grown on a surface",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:eQOLeE2rZwMC",
            authors: "J Johansson, W Khalid",
            details: "US Patent App. 14/481,322 (2015)"
        },
        {
            title: "Device comprising nanostructures and method of manufacturing thereof",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:Zph67rFs4hoC",
            authors: "W Khalid",
            details: "US Patent 10,483,206 (2019)"
        },
        {
            title: "Nanostructure array based sensors for electrochemical sensing, capacitive sensing and field-emission sensing",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:_kc_bZDykSQC",
            authors: "W Khalid",
            details: "US Patent App. 16/147,607 (2019)"
        },
        {
            title: "Nanostructure array based sensors for electrochemical sensing, capacitive sensing and field-emission sensing",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:Wp0gIr-vW9MC",
            authors: "W KHALID",
            details: "US Patent App. 17/386,075 (2017)"
        },
        {
            title: "Covalent functionalization of carbon nanotubes grown on a surface",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:mVmsd5A6BfQC",
            authors: "J Johansson, W Khalid",
            details: "US Patent App. 17/356,756 (2022)"
        },
        {
            title: "Device comprising nanostructures and method of manufacturing thereof",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&citation_for_view=bckJET0AAAAJ:KlAtU1dfN6UC",
            authors: "W Khalid",
            details: "US Patent 10,141,261 (2018)"
        },
        {
            title: "Stand alone microfluidic analytical chip device",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&cstart=20&pagesize=80&citation_for_view=bckJET0AAAAJ:LkGwnXOMwfcC",
            authors: "W Khalid, N Saleh, F Saleh",
            details: "US Patent App. 15/630,164 (2017)"
        },
        {
            title: "Self-flowing microfluidic analytical chip",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bckJET0AAAAJ&cstart=20&pagesize=80&citation_for_view=bckJET0AAAAJ:_FxGoFyzp5QC",
            authors: "N Saleh, W Khalid, F Saleh",
            details: "US Patent App. 15/600,492 (2017)"
        }
    ];
</script>

<div class="page-content">
    <h1 class="section-title">Research Output</h1>
    
    <div hidden class="controls">
        <label>
            <input type="checkbox" bind:checked={showCitations}>
            Show citation counts
        </label>
    </div>

    <h2 class="subsection-title">Selected Publications</h2>
    <ul class="information-list">
        {#each publications as pub}
            <li>
                <strong><a href={pub.url} target="_blank">{pub.title}</a></strong>
                <br>{pub.authors}
                <br>{pub.journal}
                {#if showCitations && pub.citations}
                    <br>Citations: <a href={pub.citationsUrl} target="_blank">{pub.citations}</a>
                {/if}
            </li>
        {/each}
    </ul>

    <h2 class="subsection-title">Patents</h2>
    <ul class="information-list">
        {#each patents as patent}
            <li>
                <strong><a href={patent.url} target="_blank">{patent.title}</a></strong>
                <br>{patent.authors}
                <br>{patent.details}
            </li>
        {/each}
    </ul>
</div>

<style>
    .controls {
        margin: 1rem 0;
    }
</style>