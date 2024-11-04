<style>
    .project-card {
        @apply rounded-xl border border-solid p-6 mb-0 shadow-md transition-all duration-200 ease-in-out;
        border-color: var(--card-border-color);
        background-color: var(--card-bg);
    }

    .project-card:hover {
        @apply -translate-y-0.5 shadow-lg;
    }

    :global(html) {
        --card-bg: #ffffff;
        --card-border-color: #e1e4e8;
        --text-color: #2c3e50;
        --heading-border: #3498db;
    }

    :global(html.dark) {
        --card-bg: #1a2233;
        --card-border-color: #2d3748;
        --text-color: #e2e8f0;
        --heading-border: #4299e1;
    }

    .project-card h2 {
        @apply pb-2 mb-4 text-[color:var(--text-color)];
        border-bottom: 2px solid var(--heading-border);
    }

    .project-info {
        @apply mb-4;
    }

    .project-details ul {
        @apply list-none pl-0 mt-3;
    }

    .project-details li {
        @apply relative pl-6 mb-2 leading-relaxed;
    }

    .project-details li::before {
        @apply absolute left-2 font-bold;
        content: "•";
        color: var(--heading-border);
    }

    .page-data {
        @apply max-w-full mx-auto p-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3;
    }

    .additional-info-button {
        @apply my-4 rounded-md border border-solid border-slate-500 px-4 py-2 hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out;
    }

</style>


<div class="page-content-wide">
    <div class="section-title">Research Projects Overview</div>

    <div class="page-data">
        {#each projects as project}
            <div class="project-card">
            <h2>{project.title}</h2>
            <div class="project-info">
                <p><strong>Focus:</strong> {project.focus}</p>

                {#if project.url}
                    <a href={project.url}>
                        <p class="additional-info-button">
                            Access additional information
                        </p>
                    </a>
                {/if}

                <p class="contact-info">
                    <strong>Contact:</strong> {project.contact.name} (<a href="mailto:{project.contact.email}">{project.contact.email}</a>)
                </p>
            </div>
            <div class="project-details">
                <p>{project.description}</p>
                <ul>
                    {#each project.features as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>
                
            </div>
            </div>
        {/each}
    </div>
</div>


<script>



    const contacts = {
        ronitNath: { name: "Ronit Nath", email: "ronitnath@berkeley.edu" },
        yenaKang: { name: "Yena Kang", email: "ynkang@berkeley.edu" },
        jiChoi: { name: "Ji Choi", email: "jichoi2002926@berkeley.edu" },
        shankar: { name: "Shankar", email: "Contact via Discord" },
        suKyungLee: { name: "Su Kyung Lee", email: "sukyung@berkeley.edu" },
        jesusHuizar: { name: "Jesus Huizar", email: "jhuiz014@berkeley.edu" },
        waqasKhalid: { name: "Dr. Waqas Khalid", email: "wkhalid@berkeley.edu" }
    };

    const projects = [
        {
            title: "Biosensor Technology",
            focus: "Novel biomolecule sensor for healthcare professionals",
            description: "Advanced impedance spectroscopy technology offering:",
            features: [
                "Highly miniaturized design",
                "Multiple channels",
                "Increased fidelity",
                "Point-of-care applications",
                "Integrated microfluidics"
            ],
            url: "/areas/biosensor",
            contact: contacts.suKyungLee
        },
        {
            title: "Analysis Team",
            focus: "Integrating custom analysis with large language models",
            description: "The analysis team integrates our custom analysis frameworks, based on physical interactions, with state-of-the-art large language models. This team operates in three key areas:",
            features: [
                "Biomolecular Analysis: Characterizing interactions using carbon nanotube models for downstream modeling.",
                "Ultrahigh Energy Analysis: Modeling thermal and voltaic properties of carbon nanotube systems as batteries.",
                "Personal Research Assistant: Utilizing large language models with internal data for research support and intelligence management."
            ],
            contact: contacts.ronitNath
        },
        {
            title: "Drone Team",
            focus: "Applying ultracapacitor energy storage to high mobility aerial vehicles",
            description: "The drone team extends our energy storage technology to aerial applications, focusing on:",
            features: [
                "Evaluating technical feasibility of integrating ultracapacitors into drones.",
                "Enhancing energy storage density for long-range and high-lift capacity.",
                "Developing autonomous drone systems with advanced energy management."
            ],
            contact: contacts.ronitNath
        },
        {
            title: "Microfluidics Team",
            focus: "Advanced fluid control through carbon nanotubes",
            description: "Investigating lithographic technology for microfluidic applications, enabling:",
            features: [
                "Precise manipulation of fluids using carbon nanotubes.",
                "Enhanced miniaturization and control in microfluidic systems.",
                "Integration with biosensor technology for comprehensive biological analysis."
            ],
            contact: contacts.suKyungLee
        },
        {
            title: "Energy Storage",
            focus: "Revolutionizing energy storage with carbon-based ultracapacitors",
            description: "Developing ultracapacitors that offer a sustainable and efficient alternative to traditional batteries:",
            features: [
                "Utilization of low-cost carbon materials instead of rare metals.",
                "Enhanced safety and reduced battery degradation.",
                "Lighter weight solutions suitable for various applications."
            ],
            contact: contacts.shankar
        },
        {
            title: "Exoskeleton",
            focus: "Integrating biosensing and energy storage for rehabilitation",
            description: "Creating next-generation, neurally connected body-integrated systems to aid muscular recovery:",
            features: [
                "Integration of silicon-electrical systems with neural-electrical systems.",
                "Advanced sensor suites combined with computer vision and machine learning.",
                "Innovative rehabilitation tools for stroke survivors."
            ],
            contact: contacts.yenaKang
        },
        {
            title: "Lithography",
            focus: "Democratizing lithography through carbon nanotube modulation",
            description: "Enhancing lithography processes by focusing electron beams using carbon nanotubes:",
            features: [
                "Reducing costs associated with traditional lithography equipment.",
                "Increasing accessibility and scalability of lithography technology.",
                "Alleviating bottlenecks in industrial chip production."
            ],
            contact: contacts.shankar
        },
        {
            title: "Plasma Jet",
            focus: "Focusing plasma streams for energy and cutting applications",
            description: "Utilizing lithographic techniques to manipulate plasma streams, enabling:",
            features: [
                "Creation of concentrated energy jets for satellite and cutting applications.",
                "Advanced control over plasma dynamics using carbon nanotubes.",
                "Expanding the utility of plasma streams in various industrial processes."
            ],
            contact: contacts.jesusHuizar
        },
        {
            title: "Design Team",
            focus: "Innovative design solutions for advanced technologies",
            description: "Our design team, led by Ji Choi, is dedicated to creating intuitive and efficient designs that complement our technological advancements:",
            features: [
                "User-centric design for healthcare and industrial applications.",
                "Integration of aesthetic and functional elements in product development.",
                "Collaborative efforts to enhance the usability and accessibility of our technologies."
            ],
            contact: contacts.jiChoi
        }
    ];


</script>

